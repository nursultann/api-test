import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const params = useParams();
    const id = params.adid;
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
    }, [])

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
                                )
                                }
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <h2>{detail.title}</h2>
                        <p>{detail.description}</p>

                    </>
                }
            </div>

        </>
    )
}
export default ProductDetail;