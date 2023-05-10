import { legacy_createStore as createStore, combineReducers } from 'redux';
import { inputValue } from '../reducers/inputValue';

const reducers = combineReducers({
    value: inputValue,
});

export const configureStore = () => createStore(reducers);
