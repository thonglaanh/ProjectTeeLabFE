import React from 'react'
import imgBag from '../assets/bag.png'

const NoProducts = () => {
    return (
        <>
            <img src={imgBag} style={{ width: '100px', height: '100px', marginTop: '20px' }} />
            <p style={{ color: '#555555', fontSize: '18px', fontWeight: '400' }}>Không có sản phẩm nào trong giỏ hàng của bạn</p>
        </>
    )
}

export default NoProducts
