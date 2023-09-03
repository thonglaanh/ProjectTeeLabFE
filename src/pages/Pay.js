import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import '../styles/Pay.css'
import vietnamIcon from '../assets/vietnam.png'
import ItemPay from '../items/ItemPay';


const Pay = () => {
    const account = JSON.parse(localStorage.getItem('account'));

    const [cities, setCities] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedWard, setSelectedWard] = useState('');
    const [selectedWardInfor, setSelectedWardInfor] = useState({});

    const [phone, setPhone] = useState('')
    const [listCart, setListCart] = useState([])
    const [numPrice, setNumPrice] = useState('')
    const token = localStorage.getItem('token');
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
    const addToBill = async () => {
        try {
            const productsInCart = listCart.map((cartItem) => ({
                size: cartItem.size,
                color: cartItem.color,
                quantity: cartItem.quantity,
                product: cartItem.product,
            }));

            const data = {
                address: selectedWardInfor.path_with_type,
                phone: phone,
                cart: productsInCart,
            };

            await axios.post('http://localhost:4000/bill/create', data, {
                headers: {
                    Authorization: token,
                },
            });
            for (const cartItem of listCart) {
                await axios.delete('http://localhost:4000/cart/delete/' + cartItem._id, {
                    headers: {
                        Authorization: token,
                    },
                });
            }

            alert('Success');
        } catch (error) {
            alert('Failed:' + error);
        }
    }



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://vn-public-apis.fpo.vn/provinces/getAll?limit=-1');
                setCities(response.data.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleCityChange = async (e) => {
        setSelectedCity(e.target.value);
        const response = await axios.get(`https://vn-public-apis.fpo.vn/districts/getByProvince?provinceCode=${e.target.value}&limit=-1`);
        setDistricts(response.data.data.data)
    };

    const handleDistrictsChange = async (e) => {
        setSelectedDistrict(e.target.value);
        const response = await axios.get(`https://vn-public-apis.fpo.vn/wards/getByDistrict?districtCode=${e.target.value}&limit=-1`);
        setWards(response.data.data.data)
    };

    const handleWardsChange = (e) => {
        setSelectedWard(e.target.value);
        const selectedWardInfo = wards.find(ward => ward.code == e.target.value);
        setSelectedWardInfor(selectedWardInfo)

    };
    useEffect(() => {
        console.log(selectedWardInfor.path_with_type);
    }, [selectedWardInfor])

    return (
        <div>
            <Header />
            <div className="container-pay">
                <p style={{ fontSize: '40px', fontWeight: 'normal', color: '#333333', margin: '50px', textAlign: 'center' }}>Thanh toán</p>
                <div className="container-content-pay">
                    <div className="infor-pay">
                        <p style={{ fontWeight: '600', fontSize: '25px', margin: '20px' }}>Thông tin nhận hàng</p>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div className="content-pay" style={{ width: '230px' }} >
                                <p>Email : </p>
                                <input type='email' placeholder='Email của bạn' value={account.email} disabled style={{ width: '230px' }} />
                            </div>
                            <div className="content-pay" style={{ width: '230px' }} >
                                <p>Họ và tên : </p>
                                <input type='text' placeholder='Họ và tên của bạn' value={account.name} style={{ width: '230px' }} disabled />
                            </div>
                        </div>
                        <div className="content-pay">
                            <p>Số điện thoại : </p>
                            <img src={vietnamIcon} style={{
                                position: 'absolute',
                                width: '30px',
                                height: '30px',
                                left: '640px', // Điều chỉnh vị trí từ bên phải
                                borderLeft: '1px solid #c0c0c0',
                                padding: '10px'
                            }} />
                            <input type='text' placeholder='Số điện thoại của bạn' onChange={(e) => setPhone(e.target.value)} value={phone}></input>
                        </div>
                        <div className="content-pay">
                            <p>Tỉnh thành : </p>
                            <div className="custom-select-wrapper">
                                <select name="city" id="city" value={selectedCity} onChange={handleCityChange} className="custom-select">
                                    <option value="" disabled>Chọn một thành phố</option>
                                    {cities.map((city, index) => (
                                        <option key={index} value={city.code}>
                                            {city.name}
                                        </option>
                                    ))}
                                </select>
                                <div className="custom-select-arrow">&#9660;</div>
                            </div>
                        </div>
                        <div className="content-pay">
                            <p>Quận huyện : </p>
                            <div className="custom-select-wrapper">

                                <select name="districts" id="districts" value={selectedDistrict} onChange={handleDistrictsChange} className="custom-select">
                                    <option value="" disabled>Chọn một Quận huyện</option>
                                    {districts.map((district, index) => (
                                        <option key={index} value={district.code}>
                                            {district.name}
                                        </option>
                                    ))}
                                </select>

                                <div className="custom-select-arrow">
                                    &#9660;</div>
                            </div>

                        </div>

                        <div className="content-pay">
                            <p>Phường Xã : </p>
                            <div className="custom-select-wrapper">
                                <select name="wards" id="wards" value={selectedWard} onChange={handleWardsChange} className="custom-select">
                                    <option value="" disabled>Chọn một Phường Xã</option>
                                    {wards.map((ward, index) => (
                                        <option key={index} value={ward.code}>
                                            {ward.name}
                                        </option>
                                    ))}
                                </select>
                                <div className="custom-select-arrow">&#9660;</div>
                            </div>
                        </div>
                        <div className="content-pay" >
                            <p>Địa chỉ cụ thể : </p>
                            <input type='text' placeholder='Địa chỉ cụ thể của bạn' />
                        </div>
                        <div className="content-pay">

                            <input type='text' placeholder='Vui lòng nhập thông tin giao hàng' disabled style={{ backgroundColor: '#D1ECF1', color: '#000' }} />
                        </div>


                    </div>
                    <div className="transport-pay">
                        <p style={{ fontWeight: '600', fontSize: '25px', margin: '0px 0px 30px 0px' }}>Đơn hàng ({listCart.length} sản phẩm)</p>
                        {
                            listCart.map((value, key) => (
                                <div key={key}>
                                    <ItemPay item={value} />
                                </div>

                            ))
                        }
                        <div style={{ flexDirection: 'row', display: 'flex', width: '620px', margin: '20px 0' }}>
                            <input type='text' placeholder='Nhập mã giảm giá' style={{ width: '600px', padding: '10px', borderRadius: '4px', outline: 'none' }} />
                            <button className='buy-cart' style={{ backgroundColor: '#777777', border: 'none', float: 'right', margin: '0px 10px', width: '200px' }}>Áp dụng</button>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <p style={{ color: '#555555', fontSize: '16px' }}>Tạm tính</p>
                            <p style={{ fontSize: '16px' }}>{numPrice.toLocaleString("vi-VN", {
                                style: "currency",
                                currency: "VND"
                            })}</p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderBottom: 'solid 1px #e0e0e0e0' }}>
                            <p style={{ color: '#555555', fontSize: '16px' }}>Phí vận chuyển</p>
                            <p style={{ fontWeight: '600', fontSize: '16px' }}>--</p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <p style={{ color: '#000', fontSize: '16px' }}>Tổng cộng</p>
                            <p style={{ fontWeight: '600', fontSize: '20px' }}>{numPrice.toLocaleString("vi-VN", {
                                style: "currency",
                                currency: "VND"
                            })}</p>
                        </div>
                        <button className='buy-cart' style={{ float: 'right' }} onClick={() => addToBill()}>ĐẶT HÀNG</button>


                    </div>

                </div>


            </div>
            <Footer />
        </div>

    );
}

export default Pay;
