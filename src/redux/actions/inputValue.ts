// Create action creators
import * as actionType from './actionTypes';

export function getInputValue(inputValue: string) {
    // Action
    return {
        type: actionType.ON_CHANGE,
        payload: inputValue,
    };
}
