
import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
    return (
        <div className='container-footer'>
            <div className="about-us">
                <div className="title">
                    VỀ CHÚNG TÔI
                    <p className="p2">Levents® – Share your color with the world</p>

                </div>
                <div className="content">
                    <p className="p1">HỘ KINH DOANH Red Label</p>
                    <p className="p1">GPKD được cấp bởi Cục Cảnh sát QLHC &amp; TTXH</p>
                    <p className="p1">Trụ sở hộ kinh doanh: 842 Sư Vạn Hạnh, Phường 13, Quận 10, Tp. Hồ Chí Minh</p>
                    <p className="p1">Mä só thuê: 41J8031547</p>
                    <p className="p1">Ngày cấp: 06/07/2021</p>
                    <p className="p1">Người đại diện: Nguyễn Trần Duy Khiết</p>
                    <p className="p1">Mã Số thuế cá nhân: 8748861448-001</p>
                    <img src="https://levents.asia/wp-content/uploads/2023/02/logoSaleNoti-1.png" alt="" style={{ width: '220px', marginTop: '20px' }} />
                </div>
            </div>
            <div className="contact">
                <div className="title">
                    LIÊN HỆ
                </div>
                <div className="contact-item">
                    <p className='p1'>Hotline</p>
                    <p className='p2'>1900 633 028</p>
                </div>
                <div className="contact-item">
                    <p className='p1'>Email</p>
                    <p className='p2'>Customercare@levent.asia</p>
                </div>
                <div className="contact-item">
                    <p className='p1'>Thứ Hai - Chủ Nhật</p>
                    <p className='p2'>09:30 ~ 21:30</p>
                </div>
                <div className="contact-item">
                    <p className='p1'>Email liên hệ công việc</p>
                    <p className='p2'>bussiness@levent.asia</p>
                </div>

            </div>
            <div className="product">
                <div className="title">
                    DANH MỤC SẢN PHẨM
                </div>
                <div className='product-content'>
                    <a href="">Tất cả sản phẩm</a>
                    <a href="">Áo thun</a>
                    <a href="">Áo Polo</a>
                    <a href="">Áo sơ mi</a>
                    <a href="">Áo khoác</a>
                    <a href="">Hoodie</a>
                    <a href="">Quần</a>
                    <a href="">Phụ kiện</a>
                </div>
            </div>
            <div className="shop">
                <div className="title">
                    CỬA HÀNG
                </div>
                <div className='shop-content'>
                    <a href="">139E Nguyễn Trãi, Phường Phạm Ngũ Lão, Quận 1, HCM - COMING SOON</a>
                    <a href="">842 Sư Vạn Hạnh, Phường 12, Quận 10, HCM</a>
                    <a href="">The New Playground, 04, Quận 1, HCM</a>
                    <a href="">54, Mậu Thân, Phường Xuân Khánh, Quận Ninh Kiều, Cần Thơ</a>
                    <div className='shop-content-icon'>
                        <img src='https://levents.asia/template/assets/images/svg/ic-fb.svg' />
                        <img src='https://levents.asia/template/assets/images/svg/ic-ins.svg' />
                        <img src='https://levents.asia/template/assets/images/svg/ic-tt.svg' />
                        <img src='https://levents.asia/template/assets/images/svg/ic-yt.svg' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
