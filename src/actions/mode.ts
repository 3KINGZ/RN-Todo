import * as types from "./types";

export const toggleMode = (mode: "light" | "dark") => async (dispatch: any) => {
  if (mode === "dark") {
    dispatch({ type: types.TOGGLE_DARK_MODE });
    return;
  }

  dispatch({ type: types.TOGGLE_LIGHT_MODE });
};
