import React, { useEffect, useState } from 'react'
import '../styles/ItemCart.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const ItemBill = ({ item, setOpenModalDelete }) => {
    const [sumPrice, setSumPrice] = useState(0)
    const [quantity, setQuantity] = useState(Number.parseInt(item.quantity))
    const priceNumber = item.product.price.replace(/[.,đ]/g, "");
    const token = localStorage.getItem('token');
    useEffect(() => {
        setSumPrice(priceNumber * quantity)
    }, [quantity])

    const deleteBill = async () => {
        try {
            await axios.delete('http://localhost:4000/bill/delete/' + item._id, {
                headers: {
                    Authorization: token
                }
            });
            toast.success('Hủy đơn thành công!', { position: 'top-center' });
        } catch (error) {
            toast.error('Hủy đơn thất bại!', { position: 'top-center' });

        }
    }

    return (
        <div className='container-item-cart' style={{ marginLeft: '20px', width: '1200px', height: '200px' }}>
            <img className='img-cart' src={item.product.images[0]} />
            <div className="content-cart" style={{ width: '570px' }}>
                <p>{item.product.name}</p>
                <p>{item.color} / {item.size} </p>
                <p>Số lượng : {item.quantity}</p>
            </div>
            <div style={{ width: '210px' }}>
                {item.address}
            </div>
            <div style={{
                fontWeight: 'bold',
                color: 'red',
                width: '210px',
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
            <div style={{ float: 'right', position: 'absolute', right: 55, marginTop: '165px' }}>
                <button style={{ width: '180px', height: '35px', border: 'none', marginRight: '10px', background: '#666666', color: '#fff' }}>Chi tiết đơn hàng</button>
                <button style={{ width: '180px', height: '35px', border: 'none' }} onClick={() => { deleteBill(); setOpenModalDelete(true) }}>Hủy đơn hàng</button>
            </div>
        </div>
    )
}

export default ItemBill
