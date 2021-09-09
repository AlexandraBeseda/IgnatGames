import {LoadingActionType, loadingReducer} from './loadingReducer'
import {combineReducers, createStore} from "redux";
import {ChangeThemeActionType, themeReducer} from "../../h12/bll/themeReducer";

const reducers = combineReducers({
    loading: loadingReducer,
    themeReducer: themeReducer,

})

export const store = createStore(reducers)


export type AppStoreType = ReturnType<typeof reducers>

export type ActionTypes = LoadingActionType | ChangeThemeActionType;

// @ts-ignore
window.store = store // for dev
