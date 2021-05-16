import CartItem from "./CartItem";
import Button from "@material-ui/core/Button";

//Styles
import { Wrapper } from "./Cart.styles";

const Cart = ({ cartItems, addToCart, removeFromCart }) => {
    const calculateTotal = (items) =>
        items.reduce((ack, item) => ack + item.amount * item.price, 0);
    const getTotalItems = (cartItems) =>
        cartItems.reduce((ack, item) => ack + item.amount, 0);
    return (
        <div className="flex justify-center items-center bg-white">
            <Wrapper className="rounded-3xl">
                <div className="containing-cart">
                    {/* <h2 className="font-bold text-base md:text-lg">Your Shopping Cart</h2> */}
                    {cartItems.length === 0 ? <p>No Items in Cart</p> : null}
                    {cartItems.map((item) => (
                        <CartItem
                            key={item.id}
                            item={item}
                            addToCart={addToCart}
                            removeFromCart={removeFromCart}
                        />
                    ))}
                    {cartItems.length !== 0 &&
                    (<div>
                        <h2 className="pt-1 text-center italic ">
                            Total : ₹{calculateTotal(cartItems).toFixed(2)}
                        </h2>
                        <h2 className="text-center italic">
                            Discount : ₹
                            {10 * (getTotalItems(cartItems)-1).toFixed(2)}
                        </h2>
                        <h2 className="text-center font-semibold">
                            Grand Total : ₹
                            {(
                                calculateTotal(cartItems) -
                                (10 * (getTotalItems(cartItems)-1))
                            ).toFixed(2)}
                        </h2>
                        <p className="text-center text-sm italic">
                            Quantity in sets of 4 cookies
                        </p>
                        <Button
                            // onClick={(e) => {
                            //     e.preventDefault();
                            //     props.handleAddToCart(props.item);
                            // }}
                            className="rounded-3xl w-full font-sans font-semibold focus:outline-none"
                        >
                            Proceed To Checkout
                        </Button>
                    </div>)}
                </div>
            </Wrapper>
        </div>
    );
};
export default Cart;
