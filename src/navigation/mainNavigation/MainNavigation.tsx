import React, {useEffect} from 'react';
import AuthNavigation from '../authNavigation/AuthNavigation';
import {useAppSelector, useModalManager} from '../../constants/utils/hooks';
import MainBottomtab from '../bottomTabNavigation/MainBottomTabNavigation';
import {MODAL_NAMES} from '../../constants/utils/constants';
import ChangeEmailModal from '../../components/modals/ChangeEmailModal';
import VerifyPhoneModal from '../../components/modals/VerifyPhoneModal';
import ChangeBankDetailsModal from '../../components/modals/ChangeBankDetailsModal';
import ChangeGenderModal from '../../components/modals/ChangeGenderModal';
import ChangePhoneModal from '../../components/modals/ChangePhoneModal';
import CreateListingTypeSelectionModal from '../../components/modals/CreateListingTypeSelectionModal';
import LogoutConfirmationModal from '../../components/modals/LogoutConfirmationModal';
import ResetPasswordModal from '../../components/modals/ResetPasswordModal';
import VerifyOldPasswordModal from '../../components/modals/VerifyOldPasswordModal';
import SwitchProfileAccountModal from '../../components/modals/SwitchProfileAccountModal';
import ImagePickerModal from '../../components/modals/ImagePickerModal';
import ImageUploadProgressModal from '../../components/modals/ImageUploadProgressModal';

const MainNavigation = () => {
  const {loggedIn} = useAppSelector(state => state.isLoggedIn);

  const {registerModal} = useModalManager();

  useEffect(() => {
    // Dynamically register modals with Redux
    registerModal(MODAL_NAMES.CHANGE_EMAIL_MODAL, () => <ChangeEmailModal />);
    registerModal(MODAL_NAMES.VERIFY_PHONE_MODAL, () => <VerifyPhoneModal />);
    registerModal(MODAL_NAMES.CHANGE_PHONE_MODAL, () => <ChangePhoneModal />);
    registerModal(MODAL_NAMES.CHANGE_GENDER_MODAL, () => <ChangeGenderModal />);
    registerModal(MODAL_NAMES.CHANGE_BANK_DETAILS_MODAL, () => (
      <ChangeBankDetailsModal />
    ));
    registerModal(MODAL_NAMES.VERIFY_OLD_PASSWORD_MODAL, () => (
      <VerifyOldPasswordModal />
    ));
    registerModal(MODAL_NAMES.RESET_PASSWORD_MODAL, () => (
      <ResetPasswordModal />
    ));
    registerModal(MODAL_NAMES.LOGOUT_CONFIRMATION_MODAL, () => (
      <LogoutConfirmationModal />
    ));
    registerModal(MODAL_NAMES.CREATE_LISTING_TYPE_SELECTION_MODAL, () => (
      <CreateListingTypeSelectionModal />
    ));
    registerModal(MODAL_NAMES.SWITCH_ACCOUNT_PROFILE_MODAL, () => (
      <SwitchProfileAccountModal />
    ));
    registerModal(MODAL_NAMES.IMAGE_PICKER_MODAL, () => <ImagePickerModal />);
    registerModal(MODAL_NAMES.IMAGE_UPLOAD_PROGRESS_MODAL, () => (
      <ImageUploadProgressModal />
    ));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loggedIn ? <MainBottomtab /> : <AuthNavigation />;
};

export default MainNavigation;
