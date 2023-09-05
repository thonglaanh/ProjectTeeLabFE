import React, { useEffect, useState } from 'react'
import '../styles/Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let url = 'http://localhost:4000/customer/login';
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email === '' || password === '') {
            toast.error('Vui lòng nhập đầy đủ thông tin!', { position: 'top-center' });
        } else {
            try {
                const response = await axios.post(url, { email, password });
                localStorage.setItem('account', JSON.stringify(response.data.data.account));
                localStorage.setItem('token', response.data.data.token);

                console.log(JSON.stringify(response.data.data.account));
                console.log(response.data.data.token);
                toast.success('Đăng nhập thành công!', { position: 'top-center' });
                navigate('/');
            } catch (error) {
                if (error.response && error.response.status === 402) {
                    toast.error('Sai mật khẩu!', { position: 'top-center' });
                } else {
                    console.log(error);
                    toast.error('Email không tồn tại!', { position: 'top-center' });
                }
            }
        }
    };

    return (
        <div>
            <div className='container-login'>
                <div className="title-login"><p>ĐĂNG NHẬP</p></div>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Email hoặc số điện thoại' onChange={(e) => setEmail(e.target.value)} />
                    <input type='password' placeholder='Mật khẩu' onChange={(e) => setPassword(e.target.value)} />
                    <div style={{ fontSize: '14px', margin: '10px 0px' }}>Bạn chưa có tài khoản?<a href="/register" class="form__link" style={{ color: '#009eff', textDecoration: 'none' }}> Đăng ký</a></div>
                    <button type='submit'>Đăng nhập</button>
                </form>

            </div>
        </div>
    )
}

export default Login