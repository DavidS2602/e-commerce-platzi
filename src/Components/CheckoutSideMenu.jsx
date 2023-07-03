import { ShoppingCartContext } from "../ShoppingCartContext";
import { useContext } from "react";
import OrderCard from "./OrderCard";
import { totalPrice } from './../utils/index';
import { NavLink } from "react-router-dom";

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);

    const handleDelete = (id) => {
        const filterProducts = context.cartProducts.filter(product => product.id !== id);
        context.setCartProducts(filterProducts);
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '2021-10-10',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }
        
        context.setOrder([...context.order, orderToAdd]);
        context.setCartProducts([]);
        context.closeCheckoutSide
    }

    return (
        <aside
            className={`${context.isCheckoutSideOpen ? "flex" : "hidden"
                } w-[360px] top-[46px] h-screen flex flex-col fixed right-0 bg-white rounded-lg border border-black p-4`}
        >
            <div className="flex justify-between items-center">
                <h2 className="font-medium">My Order</h2>
                <span onClick={context.closeCheckoutSide}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 hover:text-red-700 hover:transition-colors hover:duration-150 cursor-pointer"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </span>
            </div>
            <div className="px-6 overflow-y-auto">
            {
                context.cartProducts.map((product) => ( //Con los paréntesis indicamos que estamos haciendo un return
                    <OrderCard
                        id = {product.id}
                        title = {product.title}
                        imageUrl = {product.images[0]}
                        price = {product.price}
                        key = {product.id}
                        handleDelete = {handleDelete}
                        />
                ))
            }
            </div>
            <div className="flex justify-between items-center text-xl mb-2">
                <span className="font-semibold">Total:</span>
                <span className="font-semibold text-green-500 pr-8 p-2">
                    ${totalPrice(context.cartProducts)}
                </span>
            </div>
            <NavLink to='/My-orders/last'>
                <button onClickCapture={context.closeCheckoutSide} className="w-full bg-green-500 text-white rounded-lg p-2 mt-4 hover:bg-green-400 transition-colors duration-300" onClick={() => handleCheckout()}>Checkout</button>
            </NavLink>
        </aside>
    );
};

export default CheckoutSideMenu;
