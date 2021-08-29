import {PayLoadType, UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: mainType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload==="up") {
                return [...state.sort((a, b) => a.name.toUpperCase() <= b.name.toUpperCase() ? -1 : 1)];
            }else {
                return [...state.sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? -1 : 1)];
            }

        }
         case 'check': {
             return state.filter(p=>p.age>18)
         }
        default:
            return state;
    }
}


type mainType = SortByNameACType|SortByNameDownACType|CheckAgeACType;
type SortByNameACType = ReturnType<typeof SortByNameUpAC>;
type SortByNameDownACType = ReturnType<typeof SortByNameDownAC>;
type CheckAgeACType = ReturnType<typeof CheckAgeAC>;

export const SortByNameUpAC = () => {
    return {
        type: 'sort',
        payload: 'up'
    } as const
}

export const SortByNameDownAC = () => {
    return {
        type: 'sort',
        payload: 'down'
    } as const
}

export const CheckAgeAC = () => {
    return {
        type: 'check',
    } as const
}