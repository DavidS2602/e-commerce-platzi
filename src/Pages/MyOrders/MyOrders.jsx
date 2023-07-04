import { useContext } from "react";
import Layout from "../../Components/Layout";
import { ShoppingCartContext } from "../../ShoppingCartContext";
import { NavLink } from "react-router-dom";
import OrdersCard from "./../../Components/OrdersCard";

const MyOrders = () => {
    const context = useContext(ShoppingCartContext);
    return (
        <Layout>
            <div className="flex items-center justify-center w-80">
                <h1>My Orders</h1>
            </div>
            {
                context.order.map((order, index) => (
                    <NavLink key={index} to={`/My-orders/${index}`}>
                        <OrdersCard
                            totalPrice={order.totalPrice}
                            totalProducts={order.totalProducts}
                        />
                    </NavLink>
                ))
            }
        </Layout>
    );
};

export default MyOrders;
