import axios from "axios";
import { useEffect, useState } from "react";

const FakeApi = () => {
    const [product, setProducts] = useState([]);

    const fetchProducts = async () => {
        const response = await axios({
            method: 'get',
            url: 'https://jsonfakery.com/products'
        });
        console.log('response', response);

        if (response.status == 200) {
            setProducts(response.data);
        }
    }
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
    <div>
        <h1>Products</h1>
        {product.length > 0 &&
            <>

                {product.map((i) => <div>{i.title}</div>)}
            </>
        }
    </div>)
}
export default FakeApi