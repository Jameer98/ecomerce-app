import {combineReducers} from 'redux';
import { productReducer, selectedProductsReducer } from './productReducer';

const reducers = combineReducers({
    allProductss : productReducer,
    product: selectedProductsReducer,
})

export default reducers;