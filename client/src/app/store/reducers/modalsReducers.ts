import { Dispatch, createSlice } from "@reduxjs/toolkit";
import { modalNames } from "../../../types/modals";
import { RootState } from "..";

const initialState = {
  [modalNames.auth]: false,
};

interface IVisibleAction {
  payload: { modalName: modalNames };
  type: string;
}

const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    changeVisability: (state, action: IVisibleAction) => {
      state[action.payload.modalName] = !state[action.payload.modalName];
    },
  },
});

const { reducer: modalsReducer, actions } = modalsSlice;

const { changeVisability } = actions;

export const toggleModal = (modalName: modalNames) => (dispatch: Dispatch) => {
  dispatch(changeVisability({ modalName }));
};

export const getIsOpenModal = (modalName: modalNames) => (state: RootState) =>
  state.modals[modalName];

export default modalsReducer;
