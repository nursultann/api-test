import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditProduct = () => {
    const params = useParams();
    const id = params.id;
    const [detail, setDetail] = useState(null);
    const fetchDetail = async () => {
        const response = await axios({
            method: 'get',
            url: `https://api.escuelajs.co/api/v1/products/${id}`
        });
        console.log('response', response);
        if (response.status == 200) {
            setDetail(response.data);
        }
    }
    useEffect(() => {
        fetchDetail();
    }, []);

    const Edit = async () => {
        const response = await axios({
            method: 'put',
            url: `https://api.escuelajs.co/api/v1/products/${id}`,
            data: {
                title: detail.title,
                description: detail.description,
                price: detail.price,
                images: detail.images,
                categoryId: detail.categoryId
            }
        });
        console.log('response', response);
        if (response.status == 200) {
            alert('Product edited!');
        } else {
            alert('Smth went wrong!');
        }
    }

    return (
        <>
            <div className="col-4">
                {detail != null &&
                    <>
                        <div id="carouselExample" class="carousel slide">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={detail.images[0]} class="d-block w-100" alt="..." />
                                </div>
                                {detail.images.map((image) =>
                                    <div class="carousel-item">
                                        <img src={image} class="d-block w-100" alt="..." />
                                    </div>
                                )}
                            </div>
                        </div>
                        <h2>{detail.title}</h2>
                        <input type="text" value={detail.title} onChange={(e) => setDetail({ ...detail, title: e.target.value })} />
                        <p>{detail.description}</p>
                        <input type="text" value={detail.description} onChange={(e) => setDetail({ ...detail, description: e.target.value })} />
                        <p>{detail.price}</p>
                        <input type="text" value={detail.price} onChange={(e) => setDetail({ ...detail, price: e.target.value })} />
                        <button onClick={Edit}>Edit</button>
                    </>
                }
            </div>
        </>
    );
}

export default EditProduct;