import React, { useEffect, useState } from "react";
import '../styles/EditAccount.css'
import axios from "axios";

const EditAccount = ({ openModal, setOpenModal }) => {
    const account = JSON.parse(localStorage.getItem('account'));
    const [name, setName] = useState(account.name)
    const [email, setEmail] = useState(account.email)
    const [img, setImg] = useState(account.img)
    const [date, setDate] = useState(account.date)
    const [selectedImage, setSelectedImage] = useState(null)
    const handleSubmit = async () => {
        try {
            const formData = new FormData()
            formData.append('email', email)
            formData.append('date', date)
            formData.append('name', name)
            formData.append('img', img)
            await axios.put('http://localhost:4000/customer/update/' + account._id, formData);
            console.log('Success');
        } catch (error) {
            console.log('Failed' + error);
        }
    };
    return (
        <div className="main-container">
            <div className="modal-container">
                <p style={{ fontSize: '25px', fontWeight: '400', textAlign: "center" }}>Sửa thông tin cá nhân</p>
                <form onSubmit={handleSubmit}>
                    {img || selectedImage && (
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <img
                                alt="not found"
                                width={"140px"}
                                height={"140px"}
                                style={{ borderRadius: '50%' }}
                                src={URL.createObjectURL(selectedImage) || img}
                            />
                        </div>
                    )}
                    <input
                        type="file"
                        onChange={(event) => {
                            console.log(event.target.files[0]);
                            setSelectedImage(event.target.files[0]);
                        }}
                    />
                    <label >Họ và tên : </label>
                    <input type='text' placeholder={name} onChange={(e) => setName(e.target.value)} />
                    <label >Email :</label>
                    <input type='text' placeholder={email} onChange={(e) => setEmail(e.target.value)} />
                    <label >Ngày sinh :</label>
                    <input type='date' value={date} onChange={(e) => setDate(e.target.value)} />
                    <button onClick={() => setOpenModal(false)} style={{ background: '#fff', border: '1px solid #777777', color: '#777777' }}>Hủy</button>
                    <button type='submit'>Thay đổi</button>
                </form>

            </div>
        </div>
    )
}

export default EditAccount