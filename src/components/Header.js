import React from 'react';
import '../styles/Header.css';
import shoppingIcon from '../assets/shopping-cart.png';
import searchIcon from '../assets/search.png';
import userIcon from '../assets/account.png'
import vietnamIcon from '../assets/vietnam.png'

const Header = () => {
    return (
        <div className='container-header'>
            <div className="top-bar">
                <form className="search-form">
                    <input type="text" placeholder='Nhập từ khóa tìm kiếm...' />
                    <button className='search-button'><img className='img-search' src={searchIcon} alt="Search" /></button>
                </form>
                <a href="" className="top-icon" style={{ marginRight: '-7px' }}><img src={userIcon} /></a>
                <div>
                    <a href="" className="top-icon"><img src={shoppingIcon} /></a>
                    <label>1</label>
                </div>
                <a href="" className="top-icon"><img src={vietnamIcon} /></a>
            </div>
            <div className="header-nav">
                <div className="nav-bar">
                    <ul className="nav-list">
                        <li><a href="">TRANG CHỦ</a></li>
                        <li><a href="">CHÍNH SÁCH ĐỔI TRẢ</a></li>
                        <li><a href=""><img src='//bizweb.dktcdn.net/100/415/697/themes/902041/assets/logo.png?1692958575148' alt="Logo"></img></a></li>
                        <li><a href="">BẢNG SIZE</a></li>
                        <li><a href="">HỆ THỐNG CỬA HÀNG</a></li>
                    </ul>
                </div>
                <div className="bottom-bar">
                    <ul className="nav-list">
                        <li><a href="">Tất cả sản phẩm</a></li>
                        <li><a href="">Áo thun</a></li>
                        <li><a href="">Áo Polo</a></li>
                        <li><a href="">Áo sơ mi</a></li>
                        <li><a href="">Áo khoác</a></li>
                        <li><a href="">Hoodie</a></li>
                        <li><a href="">Quần</a></li>
                        <li><a href="">Phụ kiện</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
