import { combineReducers } from "redux";
import gameReducer from "./gamesReducer";

const rootReducer = combineReducers({
    game: gameReducer,
})

export default rootReducer