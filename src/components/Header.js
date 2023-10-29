import React, { useEffect, useState } from 'react';
import '../styles/Header.css';
import shoppingIcon from '../assets/shopping-cart.png';
import searchIcon from '../assets/search.png';
import userIcon from '../assets/account.png'
import vietnamIcon from '../assets/vietnam.png'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Header = () => {
    const [categories, setCategories] = useState([])
    const [search, setSearch] = useState('')
    const account = JSON.parse(localStorage.getItem('account'));
    const token = localStorage.getItem('token');
    const [countCart, setCountCart] = useState(0)
    const [menuActive, setMenuActive] = useState(false)
    const [searchActive, setSearchActive] = useState(false)
    const toggleMenu = () => {
        setMenuActive(!menuActive);
    }
    const toggleSearch = () => {
        setSearchActive(!searchActive);
    }
    const navigate = useNavigate();
    const handleCartClick = () => {
        if (!account) {
            toast.error('Đăng nhập để vào giỏ hàng!', { position: 'top-center' });
        } else {
            navigate('/cart')
        }
    }
    useEffect(() => {
        const countCart = async () => {
            try {
                const response = await axios.get('http://localhost:4000/cart', {
                    headers: {
                        Authorization: token
                    }

                });
                setCountCart(response.data.data.length)
            } catch (error) {
            }
        }
        countCart();
    }, [])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/product');
                setCategories(response.data.data.categories);
            } catch (error) {
                console.log('Get category error' + error);

            }
        }
        fetchData();
    }, []);
    return (
        <div className='container-header'>
            <div className={`nav-overlay ${menuActive ? 'active' : ''}`} onClick={toggleMenu}></div>
            <div className="top-bar">
                <div className='top-bar-mobile'>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <p className="top-icon" style={{ marginTop: '0' }}><img src={require('../assets/bar.png')} onClick={toggleMenu} /></p>
                        <p className="top-icon" style={{ margin: '0' }}><img src={searchIcon} alt="Search" id='img-search' onClick={toggleSearch} /></p></div>
                    <p><a href="/"><img src='//bizweb.dktcdn.net/100/415/697/themes/902041/assets/logo.png?1692958575148' alt="Logo" id='logo-mobile'></img></a></p>
                </div>
                <div className='top-bar-pc'>
                    <form className={`search-form ${searchActive ? 'active' : ''}`}>
                        <input type="text" placeholder='Nhập từ khóa tìm kiếm...' onChange={(e) => setSearch(e.target.value)} value={search} />
                        <Link to={`/all?search=${search}`} state={{ _id: '1', name: "Tất cả sản phẩm" }} onClick={() => { setSearch(''); setSearchActive(false) }}>
                            <button className='search-button' ><img className='img-search' src={searchIcon} alt="Search" /></button></Link>
                    </form>
                    <a className="top-icon-account" style={{ marginRight: '-7px' }} onClick={() => account ? navigate('/account') : navigate('/login')}><img src={userIcon} /></a>
                    <div>
                        <p className="top-icon" style={{ marginTop: '0' }}><img src={shoppingIcon} onClick={handleCartClick} />{token && (<label>{countCart}</label>)}</p>
                    </div>
                    <a href="" className="top-icon" ><img src={vietnamIcon} /></a></div>
            </div>

            <div className={`header-nav ${menuActive ? 'active' : ''}`}>
                <p className='title-menu' >Menu</p>
                <div className="nav-bar">
                    <ul className="nav-list">
                        <li><a href="/">Trang chủ</a></li>
                        <li><a href="/chinh-sach-doi-tra">Chính sách đổi trả</a></li>
                        <li><a href="/"><img src='//bizweb.dktcdn.net/100/415/697/themes/902041/assets/logo.png?1692958575148' alt="Logo"></img></a></li>
                        <li><a href="/bang-size">Bảng size</a></li>
                        <li><a href="/about-us">Về chúng tôi</a></li>
                    </ul>
                </div>
                <div className="bottom-bar">
                    <ul className="nav-list">
                        <li><Link to={'/all'} state={{ _id: '1', name: "Tất cả sản phẩm" }} onClick={toggleMenu}>Tất cả sản phẩm</Link></li>
                        <li><Link to={'/ao-thun'} state={categories[0]} onClick={toggleMenu}>Áo thun</Link></li>
                        <li><Link to={'/ao-polo'} state={categories[1]} onClick={toggleMenu}>Áo Polo</Link></li>
                        <li><Link to={'/ao-somi'} state={categories[2]} onClick={toggleMenu}>Áo sơ mi</Link></li>
                        <li><Link to={'/ao-khoac'} state={categories[5]} onClick={toggleMenu}>Áo khoác</Link></li>
                        <li><Link to={'/ao-hoodie'} state={categories[3]} onClick={toggleMenu}>Hoodie</Link></li>
                        <li><Link to={'/quan'} state={categories[4]} onClick={toggleMenu}>Quần</Link></li>
                        <li><Link to={'/phu-kien'} state={categories[6]} onClick={toggleMenu}>Phụ kiện</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
