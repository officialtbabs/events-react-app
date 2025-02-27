import React, {FC, ReactElement} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HolderBottomTabParamList} from '../../constants/types/types';
import {ScaledSheet} from 'react-native-size-matters';
import TextComponent from '../../components/text/TextComponent';
import Animated from 'react-native-reanimated';
import pallete from '../../constants/colors/pallete';
import Home from '../../screens/bottomTabs/Home';
import HomeTabActive from '../../assets/svgs/icons/home-filled.svg';
import HomeTabInactive from '../../assets/svgs//icons/home-outlined.svg';
import ExploreTabActive from '../../assets/svgs/icons/search-filled.svg';
import ExploreTabInactive from '../../assets/svgs/icons/search-outlined.svg';
import CreateTabInactive from '../../assets/svgs/icons/create-outlined.svg';
import CreateTabActive from '../../assets/svgs/icons/create-filled.svg';
import CommunityTabInactive from '../../assets/svgs/icons/community-outlined.svg';
import CommunityTabActive from '../../assets/svgs/icons/community-filled.svg';
import ProfileTabInactive from '../../assets/svgs/icons/profile-outlined.svg';
import ProfileTabActive from '../../assets/svgs/icons/profile-filled.svg';
import Box from '../../components/layout/Box';
import Profile from '../../screens/bottomTabs/Profile';
import Create from '../../screens/bottomTabs/Create';
import ComingSoon from '../../screens/bottomTabs/ComingSoon';
import {isIos} from '../../constants/utils/utils';
import {useAppSelector} from '../../constants/utils/hooks';

const Holder = createBottomTabNavigator<HolderBottomTabParamList>();

const TabBarIcon: FC<{
  focused: boolean;
  activeIcon: ReactElement<any, any> | null;
  inActiveIcon: ReactElement<any, any> | null;
}> = ({activeIcon, focused, inActiveIcon}) => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);
  // return focused ? activeIcon : inActiveIcon;
  return (
    <Box
      style={[
        bottomtabStyle.iconsize,
        // globalStyle.justifyCenter,
        // globalStyle.alignItemsCenter,
      ]}>
      <Animated.View
        style={[globalStyles.justifyCenter, globalStyles.alignItemsCenter]}>
        {focused ? activeIcon : inActiveIcon}
      </Animated.View>
    </Box>
  );
};

const HolderBottomTab = () => {
  interface bottomTextInterface {
    title: string;
    color: string;
  }
  const BottomTabText: FC<bottomTextInterface> = ({color, title}) => {
    const globalStyles = useAppSelector(state => state.globalStyles.styles);

    return (
      <Box style={[globalStyles.mt0p5]}>
        <TextComponent
          style={[
            globalStyles.fontNeulisAlt_Light,
            isIos() && globalStyles.fontWeight300,
            globalStyles.fontSize9,
            globalStyles.lineHeight11p05,
            {color},
          ]}>
          {title}
        </TextComponent>
      </Box>
    );
  };
  return (
    <Holder.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: pallete.culrMainVermilion,
        tabBarInactiveTintColor: pallete.culrMainBlack,
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {
          ...(bottomtabStyle.tabStyle as object),
        },
      }}>
      <Holder.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: ({color}) => (
            <BottomTabText title="Home" color={color} />
          ),
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              focused={focused}
              activeIcon={<HomeTabActive />}
              inActiveIcon={<HomeTabInactive />}
            />
          ),
        }}
      />
      <Holder.Screen
        name="explore"
        component={ComingSoon}
        options={{
          tabBarLabel: ({color}) => (
            <BottomTabText title="Explore" color={color} />
          ),
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              focused={focused}
              activeIcon={<ExploreTabActive />}
              inActiveIcon={<ExploreTabInactive />}
            />
          ),
        }}
      />
      <Holder.Screen
        name="create"
        component={Create}
        options={{
          tabBarLabel: ({color}) => (
            <BottomTabText title="Create" color={color} />
          ),
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              focused={focused}
              activeIcon={<CreateTabActive />}
              inActiveIcon={<CreateTabInactive />}
            />
          ),
        }}
      />
      <Holder.Screen
        name="community"
        component={ComingSoon}
        options={{
          tabBarLabel: ({color}) => (
            <BottomTabText title="Community" color={color} />
          ),
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              focused={focused}
              activeIcon={<CommunityTabActive />}
              inActiveIcon={<CommunityTabInactive />}
            />
          ),
        }}
      />
      <Holder.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarLabel: ({color}) => (
            <BottomTabText title="Profile" color={color} />
          ),
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              focused={focused}
              activeIcon={<ProfileTabActive />}
              inActiveIcon={<ProfileTabInactive />}
            />
          ),
        }}
      />
    </Holder.Navigator>
  );
};

const bottomtabStyle = ScaledSheet.create({
  iconsize: {
    width: '32@ms',
    height: '32@ms',
  },
  tabStyle: {
    height: '79@ms',
    paddingTop: '8@ms',
    borderTopWidth: '1@s',
    borderColor: pallete.culrMainBlackOpacity10,
  },
} as Record<any, any>);

export default HolderBottomTab;
