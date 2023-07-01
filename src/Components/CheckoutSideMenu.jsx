import { ShoppingCartContext } from "../ShoppingCartContext";
import { useContext } from "react";
import OrderCard from "./OrderCard";

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);
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
            {
                context.cartProducts.map((product) => ( //Con los paréntesis indicamos que estamos haciendo un return
                    <OrderCard
                        title = {product.title}
                        imageUrl = {product.images[0]}
                        price = {product.price}
                        key = {product.id}
                        />
                ))
            }
        </aside>
    );
};

export default CheckoutSideMenu;
