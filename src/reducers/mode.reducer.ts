import * as types from "../actions/types";

const initialState: boolean = true;

const modeReducer = (
  state = initialState,
  action: { type: string; payload: any },
) => {
  const { type } = action;

  switch (type) {
    case types.TOGGLE_DARK_MODE:
      return true;

    case types.TOGGLE_LIGHT_MODE:
      return false;

    default:
      return state;
  }
};

export default modeReducer;
