import { combineReducers } from "redux";

import mode from "./mode.reducer";
import todos from "./todo.reducer";

const rootReducer = combineReducers({ mode, todos });

export default rootReducer;
