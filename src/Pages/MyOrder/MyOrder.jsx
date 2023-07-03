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
            {
                context.order?.slice(-1)[0].products.map((product) => ( //Con los paréntesis indicamos que estamos haciendo un return
                    <OrderCard
                        id = {product.id}
                        title = {product.title}
                        imageUrl = {product.images[0]}
                        price = {product.price}
                        key = {product.id}
                        />
                ))
            }
            </div>
        </Layout>
    );
}

export default MyOrder;