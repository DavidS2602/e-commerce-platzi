import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();
const ShoppingCartProvider = ({ children }) => {
    //Shopping Cart * Count
    const [count, setCount] = useState(0);
    //Shopping Cart * Add product to Cart
    const [cartProducts, setCartProducts] = useState([]);

    //Shopping cart * Order.
    const [order, setOrder] = useState([]);

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
            closeCheckoutSide,
            order,
            setOrder
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}

export default ShoppingCartProvider;