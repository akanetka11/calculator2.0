import {calculatorState, ChangeThemeAction, ClearHistoryAction, SetValueAction, ShowHistoryAction} from "./types";
import {actions} from "./types";

const initialState: calculatorState = {
    operations: [],
    theme: false,
    isHistory: false
}
export default function calculatorReducer(
    state = initialState,
    {type, payload}: SetValueAction | ClearHistoryAction | ChangeThemeAction | ShowHistoryAction
) {
    switch (type) {
        case actions.SET_VALUE:
            return {
                ...state,
                operations: [...state.operations, payload]
            }
        case actions.CLEAR_HISTORY:
            return {
                ...state,
                operations: []
            }
        case actions.CHANGE_THEME_ACTION:
            return {
                ...state,
                theme: payload
            }
        case actions.SHOW_HISTORY_ACTION:
            return {
                ...state,
                isHistory: payload
            }
        default:
            return state
    }
}

