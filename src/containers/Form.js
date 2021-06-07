import { useForm, Controller } from "react-hook-form";
import { init, send } from "emailjs-com";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
init("user_e65E7A3FllifqdF0kvL2W");

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const Form = (props) => {
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [toSend, setToSend] = useState({
        from_name: "Aryan",
        to_email: "",
        message: "",
        reply_to: "anshullaikar@gmail.com",
    });
    let itemArr = [];
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        console.log(toSend);
        if (toSend.to_email !== "") {
            send(
                "service_36ke9zb",
                "template_au3y0ii",
                toSend,
                "user_e65E7A3FllifqdF0kvL2W"
            )
                .then((response) => {
                    setOrderPlaced(true);
                    console.log("SUCCESS!", response.status, response.text);
                })
                .catch((err) => {
                    console.log("FAILED...", err, toSend);
                });
        }
    }, [toSend]);

    async function onSubmit(data) {
        cartItems.map((el) => {
            itemArr.push(`${el.id} ${el.amount}`);
        });
        itemArr.push(grandTotal);
        let arrayData = Object.values(data);
        arrayData.push(...itemArr);
        console.log(arrayData);
        console.log("array of items", itemArr);
        let message1 = "";
        let message2 = "";
        let message3 = "";
        if (itemArr.length === 3) {
            message1 = `Hi, ${data.name.split(" ")[0]}.`;

            message2 = `This is a confirmation message for your order of ${
                itemArr[0].split(" ")[1]
            } ${itemArr[0].split(" ")[1] > 1 ? "boxes" : "box"} of ${itemArr[0]
                .split(" ")[0]
                .split("-")
                .join(" ")} and ${itemArr[1].split(" ")[1]} ${
                itemArr[1].split(" ")[1] > 1 ? "boxes" : "box"
            } of ${itemArr[1].split(" ")[0].split("-").join(" ")}.`;
            message3 = `The total bill amount for your order is Rs.${grandTotal}`;
        } else if (itemArr.length === 2) {
            message1 = `Hi, ${data.name.split(" ")[0]}.`;
            message2 = `This is a confirmation message for your order of ${
                itemArr[0].split(" ")[1]
            } ${itemArr[0].split(" ")[1] > 1 ? "boxes" : "box"} of ${itemArr[0]
                .split(" ")[0]
                .split("-")
                .join(" ")}.`;
            message3 = `The total bill amount for your order is Rs.${grandTotal}`;
        }

        setToSend({
            from_name: "Aryan",
            to_email: data.email,
            reply_to: "anshullaikar@gmail.com",
            line1: message1,
            line2: message2,
            line3: message3,
        });
        console.log(toSend);
        try {
            const response = await fetch(
                "https://v1.nocodeapi.com/anshull/google_sheets/IGAotrjidWRDiiHv?tabId=Sheet1",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify([arrayData]),
                }
            );
        } catch (err) {
            console.log(err);
        }
    }
    let cartItems = props.location.cartItems;
    let discount = props.location.discount;
    let grandTotal = props.location.grandTotal;
    return (
        <div>
            <div className="form-order-bg flex flex-col justify-center items-center py-4">
                {console.log(cartItems)}
                <h1 className="dark-text  bg-white font-DancingScript py-2 px-5 lg:text-8xl rounded-3xl md:text-6xl sm:text-5xl text-4xl font-black my-6 h-4/5 text-center w-max">
                    Your Order
                </h1>
                <div className="bg-white rounded-3xl p-4">
                    {cartItems ? (
                        cartItems.map((cartItem) => {
                            return (
                                <div className="font-DancingScript py-2 lg:text-2xl md:text-2xl text-xl">
                                    <h3 className="capitalize">{`${cartItem.title}`}</h3>
                                    <p>{`Amount: ${cartItem.amount}`}</p>
                                    <p>{`Total: ${
                                        cartItem.price * cartItem.amount
                                    }`}</p>
                                </div>
                            );
                        })
                    ) : (
                        <div className="capitalize text-red-500">
                            <Link to="/cookies">
                                No Order Available, click here to order
                                something
                            </Link>{" "}
                        </div>
                    )}
                    <hr />
                    {cartItems && (
                        <div className="font-DancingScript py-2 lg:text-2xl md:text-2xl text-xl capitalize">
                            <h2>{`discount: ${discount}`}</h2>
                            <h2>{`grand total: ${grandTotal}`}</h2>
                        </div>
                    )}
                </div>
                {cartItems && !orderPlaced && (
                    <form
                        className=" rounded-3xl my-4 p-4"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div>
                            <span className="rounded-xl bg-white p-2">
                                {"Full Name"}
                            </span>
                        </div>
                        <input
                            className="my-3 border w-full rounded my-3"
                            {...register("name")}
                        />{" "}
                        <div>
                            <span className="my-3 rounded-xl bg-white p-2">
                                {"Email Address"}
                            </span>
                        </div>
                        <input
                            className="border w-full rounded my-3"
                            {...register("email")}
                        />
                        {/* register an input */}
                        <div>
                            <span className="rounded-xl bg-white p-2">
                                {"Phone Number"}
                            </span>
                        </div>
                        <input
                            className="border w-full rounded my-3"
                            {...register("phonenumber", {
                                pattern:
                                    /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                                required: true,
                            })}
                        />
                        {errors.phonenumber && (
                            <p className="my-3 text-red-500">
                                Has to be a phone number
                            </p>
                        )}
                        <div>
                            <span className="rounded-xl bg-white p-2">
                                {"Address"}
                            </span>
                        </div>
                        <div className="my-4">
                            <span className="rounded-xl bg-white p-2">
                                {"Line 1 (Flat/Building)"}
                            </span>
                        </div>
                        <input
                            className=" border w-full rounded mb-3"
                            {...register("address1")}
                        />
                        <div>
                            <span className="rounded-xl bg-white p-2">
                                {
                                    "Line 2 (Not required for Neelkanth Gardens residents)"
                                }
                            </span>
                        </div>
                        <input
                            className="border w-full rounded my-3"
                            {...register("address2")}
                        />
                        <div className="mb-3">
                            <span className="rounded-xl bg-white p-2">
                                Do you want the cookies to be eggless?
                            </span>
                        </div>
                        <input
                            classname="p-2 "
                            type="checkbox"
                            {...register("eggless")}
                        />
                        <div className="mt-3 mb-4">
                            <span className="rounded-xl bg-white p-2">
                                Method of Payment
                            </span>
                        </div>
                        <input
                            type="radio"
                            {...register("payment")}
                            value="gpay"
                        />
                        <span className="rounded-xl ml-2 bg-white p-2">
                            {
                                " GPAY (Phone number: 9920048504, UPI ID: aryanbansal1710@hdfcbank)"
                            }
                        </span>
                        <br />
                        <input
                        className="my-5"
                            type="radio"
                            {...register("payment")}
                            value="paytm"
                        />
                        <span className="rounded-xl ml-2 bg-white p-2">
                            {" PayTM (Phone Number: 9870025171)"}
                        </span>
                        <br />
                        <div className="w-full flex items-center justify-center">
                            <input
                                className=" font-DancingScript text-2xl dark-text border focus:outline-none bg-white rounded-3xl my-4 p-4"
                                type="submit"
                            />
                        </div>
                    </form>
                )}
                {orderPlaced && (
                    <div className="font-semibold font-DancingScript bg-white dark-text rounded-3xl mx-8 my-4 p-4 lg:text-5xl md:text-4xl text-3xl capitalize text-center">
                        Thank You For Your Order! <br />
                        You should recieve a confirmation email shortly.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Form;
