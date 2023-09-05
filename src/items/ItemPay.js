import React, { useEffect, useState } from 'react'
import '../styles/ItemCart.css'
import axios from 'axios'

const ItemPay = ({ item }) => {
    console.log({ item });
    const [quantity, setQuantity] = useState(Number.parseInt(item.quantity))
    const [sumPrice, setSumPrice] = useState(0)
    const priceNumber = item.product.price.replace(/[.,đ]/g, "");
    const token = localStorage.getItem('token');

    useEffect(() => {
        setSumPrice(priceNumber * quantity)
    }, [quantity])
    return (
        <div className='container-item-cart' style={{ width: '600px', borderTop: '1px solid #e0e0e0e0' }}>
            <img className='img-cart' src={item.product.images[0]} />
            <div className="content-cart" style={{ width: '570px' }}>
                <p>{item.product.name}</p>
                <p>{item.color} / {item.size} </p>
                <p>Số lượng : {item.quantity}</p>
            </div>
            <div className="price-cart" style={{ marginTop: '50px' }}>
                {sumPrice.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND"
                })}
            </div>
        </div>
    )
}

export default ItemPay
