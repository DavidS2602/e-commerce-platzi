import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";

const OrdersCard = (props) => {
    const { totalPrice, totalProducts } = props;
    return (
        <div className="flex justify-between items-center my-2 border border-black w-44 px-2 rounded-lg">
            <p className="flex flex-col">
                <div className="flex items-center gap-2">
                    <span>
                        <BsCalendarDate />
                    </span>
                    <span>01.02.23</span>
                </div>
                <div className="flex items-center gap-2">
                    <span>
                        <AiOutlineShoppingCart />
                    </span>
                <span>{totalProducts} articles</span>
                </div>
            </p>
                <div>
                    <span className="text-xl font-semibold text-green-500">${totalPrice}</span>
                </div>
        </div>
    );
};

export default OrdersCard;
