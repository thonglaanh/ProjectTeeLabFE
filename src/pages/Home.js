import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Slide from '../components/Slide'
import '../styles/Home.css'

const Home = () => {
    return (
        <div>
            <Header />
            <Slide />
            <div className="section-about">
                <p className='title'>Enjoy Your Youth!</p>
                <p className='content'> Không chỉ là thời trang, TEELAB còn là “phòng thí nghiệm” của tuổi trẻ - nơi nghiên cứu và cho ra đời nguồn năng lượng mang tên “Youth”. Chúng mình luôn muốn tạo nên những trải nghiệm vui vẻ, năng động và trẻ trung.</p>
            </div>
            <Footer />
        </div>
    )
}

export default Home