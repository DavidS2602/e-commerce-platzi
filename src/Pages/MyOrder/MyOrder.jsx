import { useContext } from "react";
import Layout from "../../Components/Layout";
import { ShoppingCartContext } from "../../ShoppingCartContext";
import OrderCard from "../../Components/OrderCard";

const MyOrder = () => {
    const context = useContext(ShoppingCartContext)
    console.log(context.order?.slice(-1)[0])
    return (
        <Layout>
            <p>My Order</p>
            <div className="px-6 overflow-y-auto flex flex-col w-80">
            {context.order?.slice(-1)[0].products.map((product) => (
                <OrderCard
                    key={product.id}
                    product={product.id}
                    title={product.title}
                    imageUrl={product.images}
                    price={product.price}
                />
            ))}
            </div>
        </Layout>
    );
}

export default MyOrder;