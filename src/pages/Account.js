
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/Account.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import ItemBill from '../items/ItemBill'
import moment from 'moment';

const Account = () => {
    const account = JSON.parse(localStorage.getItem('account'));
    const navigate = useNavigate();
    const [listBill, setListBill] = useState([])
    const token = localStorage.getItem('token');

    console.log(token);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/bill', {
                    headers: {
                        Authorization: token
                    }

                });
                setListBill(response.data.data)
            } catch (error) {
                console.log('Failed');
            }
        }
        fetchData();
    }, [])
    const handlerLogOut = () => {
        localStorage.removeItem('account')
        localStorage.removeItem('token')
        navigate('/login')
    }
    return (
        <div>
            <Header />
            <p style={{ fontSize: '30px', color: '#333', margin: '50px', textAlign: 'center' }}>Thông tin cá nhân</p>

            <div className="container-account">

                <div className="container-account-menu">
                    <p style={{ color: 'green', fontWeight: 'bold', textDecoration: 'underline' }}>Tài khoản</p>
                    <a href="">Thông tin tài khoản</a>
                    <a href="">Đổi thông tin</a>
                    <a href="" onClick={() => handlerLogOut()}>Đăng xuất</a>

                </div>
                <div className="container-account-content">
                    <p style={{ color: 'green', fontSize: '15px', textDecoration: 'underline', marginBottom: '40px' }}>Thông tin tài khoản</p>
                    <p>Tên : {account.name}</p>
                    <p>Địa chỉ email : {account.email}</p>
                    <p>Ngày sinh : {moment(account.date).format('DD / MM / YYYY')}</p>
                    <p style={{ color: 'red' }}>Việt Nam</p>
                    <div className="container-bill">
                        <p style={{ fontSize: '25px', fontWeight: 'normal', color: '#333333', float: 'left', marginLeft: '20px' }}>Đơn hàng của bạn</p>
                        <div className="table-bill" >
                            <p style={{ width: '660px', marginLeft: '10px', textAlign: 'left' }}>Thông tin sản phẩm</p>
                            <p style={{ width: '190px' }}>Địa chỉ</p>
                            <p style={{ width: '190px' }}>Thành tiền</p>
                            <p style={{ width: '190px' }}>Trạng thái</p>

                        </div>

                        {
                            listBill.map((value, key) => (

                                <div key={key}>
                                    <ItemBill item={value} />
                                </div>

                            ))
                        }
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Account

