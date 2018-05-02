import { combineReducers } from "redux"
import login from "./login"
import loading from "./loading"
import one from "./one"
const rootReducer = combineReducers({
  login,
  loading,
  one
})

export default rootReducer