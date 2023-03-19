import { useReducer } from 'react';
import {
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
    UPDATE_PRODUCTS,
    ADD_TO_CART,
    ADD_MULTIPLE_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART_QUANTITY,
    CLEAR_CART,
    TOGGLE_CART,
} from './actions';

export const reducer = (state, action) => {
    switch (action.type) {
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
        case ADD_TO_CART:
            return {
                ...state,
                cartOpen: true,
                cart: [...state.cart, action.product],
            };
        case ADD_MULTIPLE_TO_CART:
            return {
                ...state,
                cartOpen: true,
                cart: [...state.cart, ...action.products],
            };
        case REMOVE_FROM_CART:
            let newCart = state.cart.filter(product => product._id !== action._id);
            return {
                ...state,
                cartOpen: newCart.length > 0,
                cart: newCart,
            };
        case UPDATE_CART_QUANTITY:
            return {
                ...state,
                cartOpen: true,
                cart: state.cart.map(product => ({
                        ...product,
                        purchaseQuantity: product._id === action._id ? action.purchaseQuantity : product.purchaseQuantity,
                    }
                )),
            };
        case CLEAR_CART:
            return {
                ...state,
                cartOpen: false,
                cart: [],
            };
        case TOGGLE_CART:
            return {
                ...state,
                cartOpen: !state.cartOpen,
            };
        // if none of the types, return the state with no modification
        default:
            return state;
    }
};

export const useProductReducer = (initialState) => {
    return useReducer(reducer, initialState);
};