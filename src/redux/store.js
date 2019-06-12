import { createStore, combineReducers, applyMiddleware } from 'redux'
import promise from 'redux-promise-middleware'
import starWarsReducer from './reducers/starWarsReducer'




export default createStore(starWarsReducer, applyMiddleware(promise));