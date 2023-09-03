import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios'
import ItemCart from '../items/ItemCart'
import '../styles/Cart.css'
import { Link } from 'react-router-dom'
import NoProducts from '../components/NoProducts'

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
                <p style={{ fontSize: '40px', fontWeight: 'normal', color: '#333333', margin: '50px' }}>Giỏ hàng của bạn</p>
                {
                    listCart.length > 0 ? (
                        <>
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
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '340px', margin: '0px 15px' }}>
                                    <p style={{ fontSize: '15px', flex: 1, textAlign: 'left' }}>Tổng tiền :</p>
                                    <p style={{ fontSize: '18px', fontWeight: 'bold', color: 'red', flex: 1, textAlign: 'right' }}>{numPrice.toLocaleString("vi-VN", {
                                        style: "currency",
                                        currency: "VND"
                                    })}</p>
                                </div>

                                <Link to={'/pay'}><button className='buy-cart'>THANH TOÁN</button></Link>
                            </div>
                        </>


                    ) : (
                        <>
                            <NoProducts />
                        </>
                    )
                }
            </div>

            <Footer />
        </div>
    )
}

export default Cart