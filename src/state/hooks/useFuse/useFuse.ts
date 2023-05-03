import Fuse from 'fuse.js';

interface FuseTypes {
    state: string | any;
    options: object;
}

export const useFuse = (data: object | any, { state, options }: FuseTypes) => {
    const fuse = new Fuse(data, options).search(state.inputValue);
    return fuse;
};
