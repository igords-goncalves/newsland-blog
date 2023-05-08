interface initialState {
    inputValue: string;
}

const initialState: initialState = {
    inputValue: '',
};

export function inputValue(state = initialState, action: any) {
    switch (action.type) {
        case 'ON_CHANGE':
            return {
                ...state,
                inputValue: action.payload,
            };
        default:
            return state;
    }
}
