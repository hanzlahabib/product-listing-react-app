import { combineReducers } from 'redux';
import products from './Product/reducers';
export { addProduct } from './Product/actions';

export const rootReducers = combineReducers({ products });
