import { useReducer } from 'react';
import {
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
    UPDATE_PRODUCTS,
} from './actions';

export const reducer = (state, action) => {
    switch(action.type) {
        // if action type is update products, return a new object with update products array
        case UPDATE_PRODUCTS:
            return {
                ...state,
                products: [...action.products],
            };
        case UPDATE_CATEGORIES:
            return {
                ...state,
                categories: [...action.categories],
            };
        case UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory,
            };
        // if none of the types, return the state with no modification
        default:
            return state;
    }
};

export const useProductReducer = (initialState) => {
    return useReducer(reducer, initialState);
};