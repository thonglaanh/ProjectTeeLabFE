import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Slide from '../components/Slide'
import '../styles/Home.css'
import axios from 'axios'
import ListItem from '../items/ListItem'

const Home = () => {
    const [categories, setCategories] = useState([])
    const imageFeedback = [
        '//bizweb.dktcdn.net/100/415/697/themes/902041/assets/feedback_1.jpg?1692958575148',
        '//bizweb.dktcdn.net/100/415/697/themes/902041/assets/feedback_2.jpg?1692958575148',
        '//bizweb.dktcdn.net/100/415/697/themes/902041/assets/feedback_3.jpg?1692958575148',
        '//bizweb.dktcdn.net/100/415/697/themes/902041/assets/feedback_4.jpg?1692958575148',
        '//bizweb.dktcdn.net/100/415/697/themes/902041/assets/feedback_5.jpg?1692958575148',
        '//bizweb.dktcdn.net/100/415/697/themes/902041/assets/feedback_6.jpg?1692958575148',
        '//bizweb.dktcdn.net/100/415/697/themes/902041/assets/feedback_7.jpg?1692958575148',
        '//bizweb.dktcdn.net/100/415/697/themes/902041/assets/feedback_8.jpg?1692958575148',
    ]
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
    useEffect(() => {
        console.log(categories);
    }, [categories])

    return (
        <div>
            <Header />
            <Slide />
            <div className="container-content-home">
                <div className="section-about">
                    <p className='title-home'>Enjoy Your Youth!</p>
                    <p className='content'> Không chỉ là thời trang, TEELAB còn là “phòng thí nghiệm” của tuổi trẻ - nơi nghiên cứu và cho ra đời nguồn năng lượng mang tên “Youth”. Chúng mình luôn muốn tạo nên những trải nghiệm vui vẻ, năng động và trẻ trung.</p>
                </div>
                <div className="product">
                    <ListItem categories={categories} quantity={7} />
                </div>
                <div className="br"></div>
                <div className="section-feedback">
                    <p className='title-home'>Find out TEELAB more</p>
                    <div className="feedback-image">
                        {
                            imageFeedback.map((value, key) => (
                                <div key={key}>
                                    <img src={value} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="br"></div>
            <Footer />
        </div>
    )
}

export default Home