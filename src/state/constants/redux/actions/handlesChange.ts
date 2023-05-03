export const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    dispatch: React.Dispatch<any>,
) => {
    dispatch({ type: 'change', payload: e.target.value });
};
