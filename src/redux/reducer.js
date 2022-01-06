import { combineReducers } from "redux"
import { reducer as recommendReducer } from "./recommend/index"
const combReducers = combineReducers({ recommend: recommendReducer })

export default combReducers
