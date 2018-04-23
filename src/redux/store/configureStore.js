import { createStore, applyMiddleware } from "redux"
import rootReducer from "../reducers/index"
import thunk from 'redux-thunk'  // redux 异步 action 中间件
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)
export default store