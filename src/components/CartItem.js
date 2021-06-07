import Button from "@material-ui/core/Button";

//Styles
import { Wrapper } from "./CartItem.styles";

//images
import plainCookieImg from "../images/cookie-plain.JPG";
import extraCookieImg from "../images/cookie-choco-chunk.jpg"

const CartItem = ({ item, addToCart, removeFromCart }) => {
    let image = "";
    //setting image based on ID
    switch (item.id) {
        case "plain-cookies":
            image = plainCookieImg;
            break;
        case "extra-chocolate-cookies":
            image = extraCookieImg;
            break;
        default:
            image = plainCookieImg;
            break;
    }
    return (
        <Wrapper>
            <div>
                <h3 className="font-semibold capitalize ">{item.title}</h3>
                <div className="information">
                    <p>Price: ₹{item.price}</p>
                    <p>Total: ₹{(item.amount * item.price).toFixed(2)}</p>
                </div>
                <div className="buttons">
                    <Button
                        size="small"
                        disableElevation
                        variant="contained"
                        onClick={() => removeFromCart(item.id)}
                    >
                        -
                    </Button>
                    {item.amount==1 && (<p className="m-1 text-center">{`1 box`}</p>)}
                    {item.amount>1 && (<p className="m-1 text-center">{`${item.amount} boxes`}</p>)}
                    <Button
                        size="small"
                        disableElevation
                        variant="contained"
                        onClick={() => addToCart(item)}
                    >
                        +
                    </Button>
                    {/* add a delete button and disable - button */}
                </div>
            </div>
            <img  className="md:max-h-36 max-h-20 rounded-xl" src={image} alt={item.title} />
        </Wrapper>
    );
};

export default CartItem;
