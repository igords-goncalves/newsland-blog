export const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'change':
            return { ...state, inputValue: action.payload };
        default:
            throw new Error();
    }
};
