export interface calculatorState {
    operations: any,
    theme: any,
    isHistory: any
}
export interface SetValueAction {
    type: "SET_VALUE"
    payload: number
}
export interface ClearHistoryAction {
    type: "CLEAR_HISTORY",
    payload: ''
}
export interface ChangeThemeAction {
    type: "CHANGE_THEME_ACTION",
    payload: true
}
export interface ShowHistoryAction {
    type: "SHOW_HISTORY_ACTION",
    payload: false
}
export const actions = {
    SET_VALUE: 'SET_VALUE',
    CLEAR_HISTORY: 'CLEAR_HISTORY',
    CHANGE_THEME_ACTION: 'CHANGE_THEME_ACTION',
    SHOW_HISTORY_ACTION: 'SHOW_HISTORY_ACTION'
}