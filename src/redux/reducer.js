import { combineReducers } from "redux-immutable"
import { reducer as recommendReducer } from "./recommend/index"

//简单这样写会出现错误 需要安装依赖redux-immutablem, 在这个依赖中间提供了combineReducers
// const combReducers = combineReducers(Map({ recommend: recommendReducer }))
const combReducers = combineReducers({ recommend: recommendReducer })

export default combReducers
