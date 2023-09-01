import React, { useEffect, useState } from 'react'
import '../styles/ItemCart.css'
import axios from 'axios'

const ItemBill = ({ item }) => {
    const [sumPrice, setSumPrice] = useState(0)
    const [quantity, setQuantity] = useState(Number.parseInt(item.cart.quantity))
    const priceNumber = item.cart.product.price.replace(/[.,đ]/g, "");
    const token = localStorage.getItem('token');
    useEffect(() => {
        setSumPrice(priceNumber * quantity)
    }, [quantity])

    const deleteCart = async () => {
        try {
            await axios.delete('http://localhost:4000/cart/delete/' + item._id, {
                headers: {
                    Authorization: token
                }
            })
            alert('Success')
        } catch (error) {
            alert('Error:' + error)

        }
    }
    return (
        <div className='container-item-cart' style={{ marginLeft: '20px', width: '1200px' }}>
            <img className='img-cart' src={item.cart.product.images[0]} />
            <div className="content-cart" style={{ width: '570px' }}>
                <p>{item.cart.product.name}</p>
                <p>{item.cart.color} / {item.cart.size} </p>
                <p>Số lượng : {item.cart.quantity}</p>
            </div>
            <div style={{ width: '220px', paddingLeft: '20px' }}>
                {item.address}
            </div>
            <div style={{
                fontWeight: 'bold',
                color: 'red',
                width: '210px',
                paddingLeft: '30px'
            }}>
                {sumPrice.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND"
                })}
            </div>
            <div style={{
                color: 'green',
                width: '210px',
            }}>Đang chuẩn bị hàng</div>
        </div>
    )
}

export default ItemBill
