import { useContext } from "react";
import Card from "../../Components/Card";
import Layout from "./../../Components/Layout";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../ShoppingCartContext";
const Home = () => {
    const context = useContext(ShoppingCartContext);

    const renderView = () => {
        if (context.filteredItems && context.filteredItems.length > 0) {
            return context.filteredItems.map((product) => (
                <Card key={product.id} data={product} />
            ));
        } else {
            return <div>We don't have anything</div>;
        }
    };


    return (
        <Layout>
            <div className="flex items-center justify-center relative w-80 mb-4">
                <h1 className="font-medium text-xl">Exclusive Products</h1>
            </div>
            <input
                onChange={(event) => context.setSearchByTitle(event.target.value)}
                type="text"
                placeholder="Search a product"
                className="rounded-lg border border-black w-80 p-4 mb-4"
            />
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {renderView()}
            </div>
            <ProductDetail />
        </Layout>
    );
};

export default Home;
