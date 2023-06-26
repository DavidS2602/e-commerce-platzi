import { GrAddCircle } from "react-icons/gr";

const Card = () => {
    return (
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg border">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-2 bg-white/60 rounded-lg text-black text-xs font-semibold px-1 py-0.5">Electronics</span>
                <img className="w-full h-full object-contain rounded-lg" src="data:image/jpeg;base64,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" alt="" />
                <div className="absolute top-2 right-1 flex justify-center items-center rounded-full bg-white w-6 h-6">
                    <GrAddCircle size={20}/>
                </div>
            </figure>
            <p className="flex justify-between mx-2">
                <span className="text-sm font-semibold">Headphones</span>
                <p className="tex-lg font-bold">$300</p>
            </p>
        </div>
    );
};

export default Card;