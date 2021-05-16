import React, { Fragment, useState } from "react";
import Hero from "./Hero";
import Items from "../components/Items";
import Cart from "../components/Cart";
//UI
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";

const Home = () => {
    //cookies data
    const data = [
        {
            id: "plain-cookies",
            category: "cookies",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            title: "chocolate chip cookies",
            image: "../src/images/cookie-plain.JPG",
            price:180,
            amount: 0,
        },
        {
            id: "extra-chocolate-cookies",
            category: "cookies",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            title: "chocolate chip cookies with extra chocolate chunks",
            price:200,
            amount: 0,
        },
    ];
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const getTotalItems = (cartItems) =>
        cartItems.reduce((ack, item) => ack + item.amount, 0);
    const handleAddToCart = (clickedItem) => {
        setCartItems((prev) => {
            //Is the item in the cart?
            const isItemInCart = prev.find(
                (item) => item.id === clickedItem.id
            );

            if (isItemInCart) {
                return prev.map((item) =>
                    item.id === clickedItem.id
                        ? { ...item, amount: item.amount + 1 }
                        : item
                );
            }
            //if first time item is added
            return [...prev, { ...clickedItem, amount: 1 }];
        });
    };
    const handleRemoveFromCart = (id) => {
        setCartItems((prev) =>
            prev.reduce((ack, item) => {
                if (item.id === id) {
                    if (item.amount === 1) return ack;
                    return [...ack, { ...item, amount: item.amount - 1 }];
                } else {
                    return [...ack, item];
                }
            }, [])
        );
    };
    return (
        <Fragment>
            <Hero />
            <Items items={data} handleAddToCart={handleAddToCart} />
            {cartOpen && (
                <Cart
                    cartItems={cartItems}
                    addToCart={handleAddToCart}
                    removeFromCart={handleRemoveFromCart}
                />
            )}
            
            <button
                className="h-16 show-cart-button rounded-2xl focus:outline-none flex justify-center align-center"
                onClick={(e) => {
                    e.preventDefault();
                    return setCartOpen((prev) => !prev);
                }}
            >
                <div className="p-4">
                    <Badge
                        badgeContent={getTotalItems(cartItems)}
                        color="error"
                    >
                        <AddShoppingCartIcon />
                    </Badge>{" "}
                    <br />
                    CART
                </div>
            </button>
        </Fragment>
    );
};

export default Home;
