import { combineReducers, createStore } from "redux";
import counter from "./modules/counter";

const rootReducer = combineReducers({
	counter
});

export default createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
