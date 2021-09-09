const initState = {
    theme: 'some'
};


export const themeReducer = (state: typeof initState = initState, action: any): typeof initState => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            return {...state, theme: action.newTheme};
        }
        default:
            return state;
    }
};
export type ChangeThemeActionType = {
    type: "CHANGE_THEME",
    newTheme: string,
}
export const changeTheme = (newTheme: string): ChangeThemeActionType => {
    return {
        type: "CHANGE_THEME",
        newTheme
    }
};
