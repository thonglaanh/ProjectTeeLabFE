import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Item from './Item';
import '../styles/ListItem.css'

const ListItem = ({ categories, quantity }) => {
    const [listProduct, setListProduct] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:4000/product');
            setListProduct(response.data.data.products)
        }
        fetchData();
    }, []);

    return (
        <div className='container-list'>
            {categories.map((category, index) => (
                <div key={index}>
                    <p className='title-category'>{category.name}</p>
                    <ul className='list-item'>
                        {listProduct
                            .filter(item => item.category._id === category._id)
                            .slice(0, quantity)
                            .map((item, key) => (
                                <div key={key}>
                                    <Item product={item} />
                                </div>
                            ))}
                        <div className='list-item-text'>
                            <a href="">Xem thêm</a>
                        </div>
                    </ul>

                </div>
            ))}
        </div>
    )
}

export default ListItem
