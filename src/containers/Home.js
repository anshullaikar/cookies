import React, { Fragment, useState } from 'react'
import Hero from './Hero'
import Items from "../components/Items"

const Home = () => {
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
        setCartItems(prev => (
            prev.reduce((ack, item) => {
                if (item.id === id) {
                    if (item.amount === 1) return ack;
                    return [...ack, { ...item, amount: item.amount - 1 }];
                } else {
                    return [...ack, item];
                }
            }, [])
        )
        );
    };
    return (
        <Fragment>
            <Hero/>
            <Items/>
        </Fragment>
    )
}

export default Home
