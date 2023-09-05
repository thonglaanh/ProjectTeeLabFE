import React from "react";
import '../styles/DialogDelete.css'
import attentionIcon from '../assets/attention.png'

const DialogDelete = ({ openModal, setOpenModal }) => {

    return (
        <div className="main-container">
            <div className="modal-container-delete">
                <p style={{ fontSize: '25px', fontWeight: '400', textAlign: "center" }}>Lý do hủy đơn</p>
                <p style={{
                    backgroundColor: '#d3f4ea', color: 'green', padding: '10px', fontSize: '14px'
                }}><img src={attentionIcon} style={{ width: '15px', height: '15px' }} /> Vui lòng chọn lý do hủy đơn hàng này, với lý do này bạn sẽ hủy đơn hàng và không thể thay đổi sau đó</p>
                <div className="radio-group">
                    <label>
                        <input type="radio" name="reason" /><label style={{ margin: '0px 10px' }} />Tôi muốn thay đổi địa chỉ giao hàng, số điện thoại
                    </label>
                    <label >
                        <input type="radio" name="reason" /><label style={{ margin: '0px 10px' }} />Tôi muốn nhập/thay đổi mã Voucher
                    </label>
                    <label >
                        <input type="radio" name="reason" /><label style={{ margin: '0px 10px' }} />Tôi muốn thay đổi trong đơn hàng (size, màu sắc, số lượng, ...)
                    </label>
                    <label >
                        <input type="radio" name="reason" /><label style={{ margin: '0px 10px' }} />Thủ tục thanh toán rắc rối
                    </label>
                    <label >
                        <input type="radio" name="reason" /><label style={{ margin: '0px 10px' }} />Tìm thấy nơi có sản phẩm tốt hơn, rẻ hơn
                    </label>
                    <label >
                        <input type="radio" name="reason" /><label style={{ margin: '0px 10px' }} />Khác
                    </label>

                </div>
                <button onClick={() => setOpenModal(false)} style={{ background: '#fff', border: '1px solid #777777', color: '#777777' }}>Hủy</button>
                <a href=""><button type='submit'>Hủy đơn hàng</button></a>
            </div>
        </div >
    )
}

export default DialogDelete