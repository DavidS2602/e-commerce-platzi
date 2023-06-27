import { useEffect, useState } from 'react';
import Card from '../../Components/Card';
import Layout from './../../Components/Layout';
const Home = () => {
    const [items, setItems] = useState();
    useEffect(() => {
        const url = `https://api.escuelajs.co/api/v1/products`;
        fetch(url)
            .then(response => response.json())
            .then(data => setItems(data))
    }, []);
    return (
        <Layout>
            <div className='grid grid-cols-4 gap-4 mobile:flex mobile:flex-col tablet:grid-cols-2'>
                {
                    items?.map((item) => {
                        return <Card key={item.id} data={item} />
                    })
                }
            </div>
        </Layout>
    );
}

export default Home;