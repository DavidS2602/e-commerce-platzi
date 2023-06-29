import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();
const ShoppingCartProvider = ({ children }) => {
    //Shopping Cart
    const [count, setCount] = useState(0);

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
    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productShow,
            setProductShow
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}

export default ShoppingCartProvider;