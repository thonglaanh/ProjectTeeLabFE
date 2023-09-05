import React, { useState, useEffect } from 'react'
import '../styles/Account.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import ItemBill from '../items/ItemBill'
import moment from 'moment';
import NoProducts from '../components/NoProducts'
import EditAccount from '../components/EditAccount';
import DialogDelete from '../components/DialogDelete'

const Account = () => {
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);
    const [openModalDelete, setOpenModalDelete] = useState(false);

    const handlerLogOut = () => {
        localStorage.removeItem('account')
        localStorage.removeItem('token')
        navigate('/login')
    }
    const account = JSON.parse(localStorage.getItem('account'));
    const [listBill, setListBill] = useState([])
    const token = localStorage.getItem('token');

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
    return (
        <div>
            {openModal && <EditAccount openModal={openModal} setOpenModal={setOpenModal} />}
            {openModalDelete && <DialogDelete openModal={openModalDelete} setOpenModal={setOpenModalDelete} />}
            <p style={{ fontSize: '30px', color: '#333', margin: '50px', textAlign: 'center' }}>Thông tin cá nhân</p>
            <div className="container-account">
                <div className="container-account-menu">
                    <p style={{ color: 'green', fontWeight: 'bold', textDecoration: 'underline' }}>Tài khoản</p>
                    <a href="" >Thông tin tài khoản</a>
                    <p onClick={() => { setOpenModal(true); }}>Đổi thông tin</p>
                    <a href="" onClick={() => handlerLogOut()}>Đăng xuất</a>
                </div>
                <div className="container-account-content">
                    <p style={{ color: 'green', fontSize: '15px', textDecoration: 'underline', marginBottom: '40px' }}>Thông tin tài khoản</p>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <>
                            <img src={account.img} style={{ width: '170px', height: '170px', margin: '10px 30px 20px 20px', borderRadius: '50%' }} /></>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <p>Tên : {account.name}</p>
                            <p>Địa chỉ email : {account.email}</p>
                            <p>Ngày sinh : {moment(account.date).format('DD / MM / YYYY')}</p>
                            <p style={{ color: 'red' }}>Việt Nam</p></div>
                    </div>
                    <div className="container-bill">
                        <p style={{ fontSize: '25px', fontWeight: 'normal', color: '#333333', marginLeft: '30px', textAlign: 'left' }}>Đơn hàng của bạn</p>
                        {listBill.length > 0 ? (
                            <>
                                <div className="table-bill" >
                                    <p style={{ width: '660px', marginLeft: '10px', textAlign: 'left' }}>Thông tin sản phẩm</p>
                                    <p style={{ width: '190px' }}>Địa chỉ</p>
                                    <p style={{ width: '190px' }}>Thành tiền</p>
                                    <p style={{ width: '190px' }}>Trạng thái</p>

                                </div>

                                {
                                    listBill.map((item, key) => (

                                        <div key={key}>
                                            <ItemBill item={item} setOpenModalDelete={setOpenModalDelete} />
                                        </div>

                                    ))
                                }</>
                        ) : (

                            <div style={{ width: '1100px', marginTop: '80px' }}>
                                <NoProducts />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account

