import { ShoppingCartContext } from "../ShoppingCartContext";
import { useContext } from "react";

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext);
    return (
        <aside
            className={`${context.isProductDetailOpen ? "flex" : "hidden"
                } w-[360px] top-[46px] h-screen flex flex-col fixed right-0 bg-white rounded-lg border border-black p-4`}
        >
            <div className="flex justify-between items-center">
                <h2 className="font-medium">Detail</h2>
                <span onClick={context.closeProductDetail}>
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
            <figure className="pt-2">
                <img
                    className="w-full h-full rounded-lg"
                    src={context.productShow.images[0]}
                    alt=""
                />
            </figure>
            <p className="flex flex-col">
                <span className="text-xl font-semibold text-green-500">${context.productShow.price}</span>
                <span className="text-lg font-semibold font-sans">{context.productShow.title}</span>
                <span>{context.productShow.description}</span>
            </p>
        </aside>
    );
};

export default ProductDetail;
