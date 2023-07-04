import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Layout from "../../Components/Layout";
import { ShoppingCartContext } from "../../ShoppingCartContext";
import OrderCard from "../../Components/OrderCard";
import { BsChevronDoubleLeft } from "react-icons/bs";

const MyOrder = () => {
    const context = useContext(ShoppingCartContext);
    const currentPath = window.location.pathname;
    let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
    if (index === "last") index = context.order?.length - 1;
    return (
        <Layout>
            <div className="flex w-80 relative justify-center items-center mb-6">
                <NavLink to="/My-orders" className="absolute left-0">
                    <div>
                        <BsChevronDoubleLeft size={20} color="black" />
                    </div>
                </NavLink>
                <h1>My Order</h1>
            </div>

            <div className="px-6 overflow-y-auto flex flex-col w-80">
                {context.order?.[index]?.products.map((product) => (
                    <OrderCard
                        key={product.id}
                        product={product.id}
                        title={product.title}
                        imageUrl={product.images[0]}
                        price={product.price}
                    />
                ))}
            </div>
        </Layout>
    );
};

export default MyOrder;
