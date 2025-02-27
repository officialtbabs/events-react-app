import React, {FC} from 'react';
import {FlashList, ListRenderItem} from '@shopify/flash-list';
import Box from '../layout/Box';
import {useAppSelector} from '../../constants/utils/hooks';

export type NavItemOptionProps = {
  name: string;
  isActive: boolean;
  onPress: () => void;
};

export interface ScrollNavProps {
  navOptions: readonly NavItemOptionProps[] | null | undefined;
  navItem: ListRenderItem<NavItemOptionProps> | null | undefined;
}

const ScrollNav: FC<ScrollNavProps> = ({navOptions, navItem}) => {
  const globalStyles = useAppSelector(state => state.globalStyles.styles);

  return (
    <Box style={[globalStyles.wFull]}>
      <FlashList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={navOptions}
        renderItem={navItem}
        estimatedItemSize={40}
        keyExtractor={item => item.name}
      />
    </Box>
  );
};

export default ScrollNav;
