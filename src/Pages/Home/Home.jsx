import { useContext } from "react";
import Card from "../../Components/Card";
import Layout from "./../../Components/Layout";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../ShoppingCartContext";
const Home = () => {
    const context = useContext(ShoppingCartContext);

    const renderView = () => {
        const itemsToRender = context.searchByTitle
            ? context.filteredItems
            : context.items;
        if (itemsToRender?.length > 0) {
            return itemsToRender.map((item) => <Card key={item.id} data={item} />);
        } else {
            return <h1 className="text-center text-2xl">No products found</h1>;
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
            <div className="grid grid-cols-4 gap-4 mobile:flex mobile:flex-col tablet:grid-cols-2">
                {renderView()}
            </div>
            <ProductDetail />
        </Layout>
    );
};

export default Home;
