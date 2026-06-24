import axios from "axios";
import { useState } from "react";

export const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [images, setImages] = useState('');

    const addProduct = async (e) => {
        e.preventDefault();
        const response = await axios({
            method:'post',
            url:'https://api.escuelajs.co/api/v1/products/',
            data:{
                title:title,
                price:price,
                description:description,
                categoryId:1,
                images:[images]
            }
        });
        console.log('res', response);
        if(response.status == 201 || response.status == 200){
            alert('Product added!');
        }else{
            alert('Smth went wrong!');
        }
        
    };
    return (
        <div>
            <h1>Add Product</h1>
            <form onSubmit={addProduct}>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
                <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                <input type="number" placeholder="Category ID" value={category} onChange={(e) => setCategory(e.target.value)} required />
                <input type="text" placeholder="Image URL" value={images} onChange={(e) => setImages(e.target.value)} required />
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};
