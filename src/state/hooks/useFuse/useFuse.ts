import Fuse from 'fuse.js';

interface FuseTypes {
    inputValue: string | any;
    options: object;
}

export const useFuse = (
    data: object | any,
    { inputValue, options }: FuseTypes,
) => {
    const fuse = new Fuse<unknown>(data, options).search(inputValue);
    return fuse;
};
