import React, { useEffect, useState } from 'react'
import '../styles/ItemCart.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const ItemCart = ({ item }) => {
    const [quantity, setQuantity] = useState(Number.parseInt(item.quantity))
    const [sumPrice, setSumPrice] = useState(0)
    const priceNumber = item.product.price.replace(/[.,đ]/g, "");
    const token = localStorage.getItem('token');

    useEffect(() => {
        setSumPrice(priceNumber * quantity)
    }, [quantity])

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const deleteCart = async () => {
        try {
            await axios.delete('http://localhost:4000/cart/delete/' + item._id, {
                headers: {
                    Authorization: token
                }
            })
            toast.success('Xóa sản phẩm thành công!', { position: 'top-center' });
        } catch (error) {
            toast.error('Xóa sản phẩm thất bại!', { position: 'top-center' });

        }
    }

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };
    return (
        <div className='container-item-cart'>
            <img className='img-cart' src={item.product.images[0]} />
            <div className="content-cart">
                <p>{item.product.name}</p>
                <p>{item.color} / {item.size}</p>
                <p ><a href="" onClick={() => deleteCart()}>Xóa</a></p>
            </div>
            <div className="price-cart">
                {item.product.price}
            </div>
            <div className="cart-quantity">
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <button className='button-1' onClick={handleDecrease}>-</button>
                    <div style={{ textAlign: 'center', width: '50px', border: 'solid 1px #bbbbbb', height: '25px' }}>{quantity}</div>
                    <button className='button-2' onClick={handleIncrease}>+</button>
                </div>
            </div>
            <div className="price-cart">
                {sumPrice.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND"
                })}
            </div>
        </div>
    )
}

export default ItemCart
