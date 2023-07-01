import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();
const ShoppingCartProvider = ({ children }) => {
    //Shopping Cart
    const [count, setCount] = useState(0);
    const [cartProducts, setCartProducts] = useState([]);
    const [isCheckoutSideOpen, setIsCheckoutSideOpen] = useState(false);

    //Show shopping cart

    //Product Detail
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    //Show product detail
    const [productShow, setProductShow] = useState({
        images: [],
        title: "",
        price: "",
        description: "",
    });

    const openCheckoutSide = () => setIsCheckoutSideOpen(true);
    const closeCheckoutSide = () => setIsCheckoutSideOpen(false);

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productShow,
            setProductShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideOpen,
            setIsCheckoutSideOpen,
            openCheckoutSide,
            closeCheckoutSide
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}

export default ShoppingCartProvider;