import {LoadingActionType, loadingReducer} from './loadingReducer'
import {combineReducers, createStore} from "redux";

const reducers = combineReducers({
    loading: loadingReducer,

})

export const store = createStore(reducers)


export type AppStoreType = ReturnType<typeof reducers>

export type ActionTypes=LoadingActionType;

// @ts-ignore
window.store = store // for dev
