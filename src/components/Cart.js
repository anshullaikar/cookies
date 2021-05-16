import CartItem from "./CartItem";

//Styles
import { Wrapper } from "./Cart.styles";


const Cart= ({ cartItems, addToCart, removeFromCart }) => {
    const calculateTotal = (items) => items.reduce((ack, item) => ack + item.amount*item.price, 0)
    return (
        <Wrapper>
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? <p>No Items in Cart</p> : null}
            {cartItems.map((item) => (
                <CartItem
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ))}
            <h2>Total : ₹{calculateTotal(cartItems).toFixed(2)}</h2>
        </Wrapper>
    );
};
export default Cart;
