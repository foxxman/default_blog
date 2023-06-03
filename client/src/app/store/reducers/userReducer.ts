import { Dispatch, createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authRequested: (state) => {
      state.error = null;
    },
  },
});

const { reducer: userReducer, actions } = userSlice;

const { authRequested } = actions;

export const signUp = () => (dispatch: Dispatch) => {
  dispatch(authRequested);
};

export default userReducer;
