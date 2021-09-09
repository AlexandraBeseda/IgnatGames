 import {ActionTypes} from "./store";

const initState: InitialStateType = {
    isLoading: false,
}

type InitialStateType = {
    isLoading: boolean,
}

export const loadingReducer = (state: InitialStateType = initState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case "LOADING":
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}


export type LoadingActionType = {
    type: "LOADING",
    isLoading: boolean,
}
export const loadingAC = (isLoading: boolean): LoadingActionType => {
    return {
        type: "LOADING",
        isLoading
    }
}