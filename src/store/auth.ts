import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserProps } from "@dto/User/UserProps";

export interface AuthState {
  verifyEmail: string;
  user: UserProps;
}

const initialState: AuthState = {
  verifyEmail: "",
  user: {},
};

const authState = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToInitialState: () => ({ ...initialState }),

    /**
     * Function to set the verified email
     * Feell free to change the type of action to a suitable Type
     * @param {AuthState} state
     * @param {any} action
     */
    setVerifyEmail: (state: AuthState, action: PayloadAction<string>) => {
      state.verifyEmail = action.payload;
    },

    /**
     * Function to set the logged in user
     * Feell free to change the type of action to a suitable Type
     * @param {AuthState} state
     * @param {any} action
     */
    setCurrentUser: (state: AuthState, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
  },
});

export const { setToInitialState, setVerifyEmail, setCurrentUser } = authState.actions;

export default authState.reducer;
