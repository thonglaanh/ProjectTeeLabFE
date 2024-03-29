import React, { useState } from 'react';
import '../styles/Register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        password: '',
    });
    const url = 'http://localhost:4000/customer/register';
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        try {
            if (formData.name === '' || formData.date === '' || formData.email === '' || formData.password === '') {
                toast.error('Vui lòng nhập đầy đủ!', { position: 'top-center' });
                navigate('/login')

            } else {
                await axios.post(url, formData);
                toast.success('Đăng kí thành công!', { position: 'top-center' });
            }


        } catch (error) {
            alert('Đăng kí thất bại')

        }


    };

    return (
        <div>
            <div className='container-register'>
                <div className="title-register"><p>ĐĂNG KÍ</p></div>
                <input type='text' name='name' placeholder='Nhập tên của bạn' onChange={handleChange} />
                <input type='text' name='email' placeholder='Nhập số điện thoại hoặc email' onChange={handleChange} />
                <input type='date' name='date' onChange={handleChange} />
                <input type='password' name='password' placeholder='Nhập mật khẩu của bạn' onChange={handleChange} />
                <input type='password' placeholder='Nhập lại mật khẩu của bạn' />
                <div style={{ fontSize: '14px', margin: '5px 0px 10px 0px' }}>
                    Bạn đã có tài khoản?
                    <a href="/login" className="form__link" style={{ color: '#009eff', textDecoration: 'none' }}>
                        Đăng nhập
                    </a>
                </div>
                <button onClick={handleSubmit}>Đăng kí</button>
            </div>
        </div>
    );
};

export default Register;
