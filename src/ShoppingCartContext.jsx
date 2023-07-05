import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();
const ShoppingCartProvider = ({ children }) => {
    //Shopping Cart * Count
    const [count, setCount] = useState(0);
    //Shopping Cart * Add product to Cart
    const [cartProducts, setCartProducts] = useState([]);

    //Shopping cart * Order.
    const [order, setOrder] = useState([]);

    const [isCheckoutSideOpen, setIsCheckoutSideOpen] = useState(false);

    //Gets products
    const [items, setItems] = useState();
    const [filteredItems, setFilteredItems] = useState(null);

    //Gets products by title
    const [searchByTitle, setSearchByTitle] = useState(null);

    useEffect(() => {
        const url = `https://api.escuelajs.co/api/v1/products`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => setItems(data));
    }, []);

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items.filter((item) =>
            item.title.toLowerCase().includes(searchByTitle.toLowerCase())
        );
    };

    useEffect(() => {
        if (searchByTitle) {
            setFilteredItems(filteredItemsByTitle(items, searchByTitle));
        }
    }, [items, searchByTitle]);

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
        <ShoppingCartContext.Provider
            value={{
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
                setOrder,
                items,
                setItems,
                searchByTitle,
                setSearchByTitle,
                filteredItems,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
};

export default ShoppingCartProvider;
