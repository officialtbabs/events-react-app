import React, {useCallback} from 'react';

import LayoutWithSafeAreaWithBg from '../../components/layout/LayoutWithSafeAreaWithBg';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useModalManager} from '../../constants/utils/hooks';
import {MainBottomTabNavigationProps} from '../../constants/types/types';
import {MODAL_NAMES} from '../../constants/utils/constants';
import {MagicModalHideReason} from 'react-native-magic-modal';

export enum LeisureCategoryOptionEnums {
  EVENT = 'Event',
  PLACES = 'Places',
  EXPERIENCES = 'Experiences',
  LOOP = 'Loop',
}

const Create = () => {
  const {openModal, closeModal} = useModalManager();

  const {goBack} = useNavigation<MainBottomTabNavigationProps>();

  const openCreateListingModalCallback = useCallback(() => {
    openModal(MODAL_NAMES.CREATE_LISTING_TYPE_SELECTION_MODAL, {
      onBackButtonPress: ({hide}) => {
        goBack();
        closeModal();
        hide({
          reason: MagicModalHideReason.BACK_BUTTON_PRESS,
        });
      },
      onBackdropPress: ({hide}) => {
        goBack();
        closeModal();
        hide({
          reason: MagicModalHideReason.BACKDROP_PRESS,
        });
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFocusEffect(openCreateListingModalCallback);

  return (
    <>
      <LayoutWithSafeAreaWithBg children={undefined} />
    </>
  );
};

export default Create;
