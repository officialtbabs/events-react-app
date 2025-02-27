import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {MODAL_NAMES} from '../constants/utils/constants';

interface ModalState {
  activeModal: MODAL_NAMES | null;
  isModalAnimating: boolean;
  modalRegistry: {[key in MODAL_NAMES]?: () => JSX.Element};
}

const initialState: ModalState = {
  activeModal: null,
  isModalAnimating: false,
  modalRegistry: {},
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setActiveModal: (state, action: PayloadAction<MODAL_NAMES | null>) => {
      state.activeModal = action.payload;
    },
    setModalAnimating: (state, action: PayloadAction<boolean>) => {
      state.isModalAnimating = action.payload;
    },
    registerModal: (
      state,
      action: PayloadAction<{name: MODAL_NAMES; component: () => JSX.Element}>,
    ) => {
      const {name, component} = action.payload;
      state.modalRegistry[name] = component;
    },
  },
});

export const {setActiveModal, setModalAnimating, registerModal} =
  modalSlice.actions;

export default modalSlice.reducer;
