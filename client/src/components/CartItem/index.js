import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";

const CartItem = ({ item }) => {
    const [, dispatch] = useStoreContext();
    
    const removeFromCart = (id) => {
        dispatch({
            type: REMOVE_FROM_CART,
            _id: id,
        });
    };

    const updateCartQuantity = (e) => {
        const value = e.target.value;

        if (value === '0') {
            dispatch({
                type: REMOVE_FROM_CART,
                _id: item._id,
            });
        } else {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: item._id,
                purchaseQuantity: parseInt(value),
            });
        }
    };
    return (
        <div className="flex-row">
            <div><img src={`/images/${item.image}`} alt="" /></div>
            <div>
                <div>{item.name}, ${item.price}</div>
                <div>
                    <span>Qty:</span>
                    <input type="number" placeholder="1" value={item.purchaseQuantity} onChange={updateCartQuantity} />
                    <span role="img" aria-label="trash" onClick={() => removeFromCart(item._id)}>🗑️</span>
                </div>
            </div>
        </div>
    );
};

export default CartItem;