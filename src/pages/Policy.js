
import React, { useState } from 'react'
import '../styles/Policy.css'
const Policy = () => {
    const [show, setShow] = useState(false)
    return (
        <>
            <div className='container-policy'>
                <p className='title-policy'>Chính sách Đổi trả</p>
                <div className='text-container bold'>
                    <p><span>1. CHÍNH SÁCH ĐỔI SẢN PHẨM</span></p>
                    <p><span className='bold'>a. Đổi size</span></p>
                    <p><span className='normal'>– Áp dụng 01 lần đổi /1 đơn hàng với các đơn hàng mua online và các đơn hàng mua tại cửa hàng.</span></p>
                    <p><span className='normal'>– Sản phẩm đổi trong thời gian 3&nbsp;ngày kể từ ngày mua hàng trên hoá đơn (đối với khách mua hàng trực tiếp tại cửa hàng), 3&nbsp;ngày kể từ ngày nhận hàng (Đối với khách mua online)</span></p>
                    <p><span className='normal'>– Sản phẩm còn mới nguyên tem, tags và mang theo hoá đơn mua hàng, sản phẩm chưa giặt và không dơ bẩn, hư hỏng bởi những tác nhân bên ngoài cửa hàng sau khi mua hàng.</span></p>
                    <p><span className='normal'>– Không áp dụng đối với các sản phẩm là phụ kiện</span></p>
                    <p><span className='bold'>b. Đổi sản phẩm lỗi</span></p>
                    <p><span className='normal'>Điều kiện áp dụng</span></p>
                    <p><span className='normal'>– Sản phẩm lỗi kỹ thuật: Sản phẩm rách, bung keo, …</span></p>
                    <p><span className='normal'>Trường hợp không được giải quyết</span></p>
                    <p><span className='normal'>– Sản phầm đã qua sử dụng</span></p>
                    <p><span className='normal'>Đối với sản phẩm lỗi kỹ thuật cần phản hồi đến TEELAB&nbsp;trong vòng 3 ngày, kể từ ngày mua hàng trên hoá đơn đối với khách mua trực tiếp tại cửa hàng, 3&nbsp;ngày kể từ ngày nhận hàng đối với khách mua online.&nbsp;</span></p>
                    <p><span className='bold'>2. PHƯƠNG THỨC ĐỔI SẢN PHẨM</span></p>
                    <p><span className='normal'>– Hàng mua trực tiếp tại cửa hàng: Đổi trả trực tiếp tại cửa hàng mua hàng</span></p>
                    <p><span className='normal'>– Hàng mua online (thông qua webiste, Shopee, Lazada): liên hệ fanpage <a href="http://fb.com/teelab.vn">Teelab</a>&nbsp;để được hướng dẫn đổi trả</span></p>
                    <p><span className='bold'>3. CHI PHÍ ĐỔI HÀNG</span></p>
                    <p><span className='normal'>– Miễn phí đổi hàng cho khách mua ở TEELAB&nbsp;trong trường hợp bị lỗi từ nhà sản xuất, giao nhầm hàng, bị hư hỏng trong quá trình vận chuyển hàng.</span></p>
                    <p><span className='normal'>– Trong trường hợp không vừa size hay khách hàng không ưng sản phẩm không muốn nhận hàng phiền khách hàng trả ship hoàn đơn hàng về</span></p>
                </div>
                <div className='text-container bold link'>
                    <p><a className='link' href="http://fb.com/teelab.vn">TEELAB</a></p>
                    <p><span><b>Experiment on Your Style</b></span></p>
                </div>
                <img src="https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/March2022/handle_cert.png" alt="" style={{ width: '220px', marginTop: '20px' }} />
            </div>
        </>
    )
}

export default Policy
