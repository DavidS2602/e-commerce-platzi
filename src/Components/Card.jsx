import { useContext } from "react";
import { ShoppingCartContext } from "../ShoppingCartContext";
import { AiOutlineCheck } from "react-icons/ai";

const Card = ({ data }) => {
    const context = useContext(ShoppingCartContext);

    const showProductDetail = () => {
        context.openProductDetail();
        context.setProductShow(data);
    }

    const addProductsToCart = (event, data) => {
        event.stopPropagation();
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, data]);
        context.openCheckoutSide()
        console.log('cart', context.cartProducts)
    }

    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0;
        if (isInCart) {
            return (
                <div
                    className="absolute top-2 right-1 bg-black flex justify-center items-center rounded-full w-6 h-6"
                >
                    <AiOutlineCheck size={22} color="white"/>
                </div>
            )
        } else {
            return (
                <div
                    className="absolute top-2 right-1 flex justify-center items-center rounded-full w-6 h-6"
                    onClick={(event) => addProductsToCart(event, data)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 cursor-pointer hover:text-red-700 hover:transition-colors"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                        />
                    </svg>
                </div>
            )

        }
    }

    return (
        <div
            onClick={() => showProductDetail(data)}
            className="bg-white cursor-pointer w-56 h-60 rounded-lg border"
        >
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-2 left-2 bg-white/60 rounded-lg text-black text-xs font-semibold px-1 py-0.5">
                    {data.category.name}
                </span>
                <img
                    className="w-full h-full  rounded-lg"
                    src={data.images[0]}
                    alt=""
                />
                {renderIcon(data.id)}
            </figure>
            <p className="flex justify-between mx-2">
                <span className="text-sm font-semibold">{data.title}</span>
                <p className="tex-lg font-bold">${data.price}</p>
            </p>
        </div>
    );
};

export default Card;
