import { GrAddCircle } from "react-icons/gr";
import { useContext } from "react";
import { ShoppingCartContext } from "../ShoppingCartContext";

const Card = ({ data }) => {
    const context = useContext(ShoppingCartContext)
    return (
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg border">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-2 bg-white/60 rounded-lg text-black text-xs font-semibold px-1 py-0.5">{data.category.name}</span>
                <img className="w-full h-full  rounded-lg" src={data.images[0]} alt="" />
                <div
                    className="absolute top-2 right-1 flex justify-center items-center rounded-full w-6 h-6"
                    onClick={() => context.setCount(context.count + 1)}
                >
                    <GrAddCircle size={20}/>
                </div>
            </figure>
            <p className="flex justify-between mx-2">
                <span className="text-sm font-semibold">{data.title}</span>
                <p className="tex-lg font-bold">${data.price}</p>
            </p>
        </div>
    );
};

export default Card;
