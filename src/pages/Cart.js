import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios'
import ItemCart from '../items/ItemCart'
import '../styles/Cart.css'

const Cart = () => {
    const [listCart, setListCart] = useState([])
    const [numPrice, setNumPrice] = useState('')
    const token = localStorage.getItem('token');

    console.log(token);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/cart', {
                    headers: {
                        Authorization: token
                    }

                });
                setListCart(response.data.data)
            } catch (error) {
                console.log('Failed');
            }
        }
        fetchData();
    }, [])
    useEffect(() => {
        const totalPrice = listCart.reduce((total, item) => {
            const priceNumber = parseFloat(item.product.price.replace(/[.,đ]/g, ""));
            return total + priceNumber * item.quantity;
        }, 0);

        setNumPrice(totalPrice);
    }, [listCart]);

    return (
        <div>
            <Header />
            <div className="container-cart">
                <p style={{ fontSize: '25px', fontWeight: 'normal', color: '#333333' }}>Giỏ hàng của bạn</p>
                <div className="table-cart">
                    <p style={{ width: '660px', marginLeft: '10px', textAlign: 'left' }}>Thông tin sản phẩm</p>
                    <p style={{ width: '190px' }}>Đơn giá</p>
                    <p style={{ width: '190px' }}>Số lượng</p>
                    <p style={{ width: '190px' }}>Thành tiền</p>
                </div>

                {
                    listCart.map((value, key) => (

                        <div key={key}>
                            <ItemCart item={value} />
                        </div>

                    ))
                }
                <div className="cart-num-price">
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '350px', margin: '0px 10px' }}>
                        <p style={{ fontSize: '15px', flex: 1, float: 'left' }}>Tổng tiền :</p>
                        <p style={{ fontSize: '18px', fontWeight: 'bold', color: 'red', flex: 1, textAlign: 'right' }}>{numPrice.toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND"
                        })}</p>
                    </div>

                    <button className='buy-cart'>THANH TOÁN</button>
                </div>
            </div>

            <Footer /></div>
    )
}

export default Cart