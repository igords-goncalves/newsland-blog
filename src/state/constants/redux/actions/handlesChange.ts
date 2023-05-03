export const handleChange = (e: any, dispatch: any) => {
    dispatch({ type: 'change', payload: e.target.value });
};
