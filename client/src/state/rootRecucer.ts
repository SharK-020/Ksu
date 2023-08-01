import { combineReducers } from "redux";
import authReducer from "./index"; // Provide the correct path to your authSlice

// Add other reducers here if needed
const rootReducer = combineReducers({
	auth: authReducer,
	// Add other reducers here if needed
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
