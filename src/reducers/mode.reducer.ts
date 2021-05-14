import * as types from "../actions/types";

const darkMode: boolean = true;

const modeReducer = (
  state = darkMode,
  action: { type: string; payload: any },
) => {
  const { type } = action;

  switch (type) {
    case types.TOGGLE_DARK_MODE:
      return (state = true);

    case types.TOGGLE_LIGHT_MODE:
      return (state = false);

    default:
      return state;
  }
};

export default modeReducer;
