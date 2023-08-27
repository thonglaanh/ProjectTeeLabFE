
import React, { useEffect, useState } from 'react'
import '../styles/Slide.css'

const Slide = () => {
    const images = ['https://bizweb.dktcdn.net/100/415/697/themes/902041/assets/slider_1.jpg?1692958575148bizweb.dktcdn.net',
        'https://bizweb.dktcdn.net/100/415/697/themes/902041/assets/slider_2.jpg?1692958575148bizweb.dktcdn.net',
        'https://bizweb.dktcdn.net/100/415/697/themes/902041/assets/slider_3.jpg?1692958575148bizweb.dktcdn.net',
        'https://bizweb.dktcdn.net/100/415/697/themes/902041/assets/slider_4.jpg?1692958575148bizweb.dktcdn.net',
        'https://bizweb.dktcdn.net/100/415/697/themes/902041/assets/slider_5.jpg?1692958575148bizweb.dktcdn.net'];
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [images.length]);

    return (
        <div className='container-slide'>
            <div className='image-container'>
                <img className='img-slide' src={images[currentImage]} alt={`Slide ${currentImage}`} />
                <div className='image-overlay'>
                    {
                        images.map((image, index) => (
                            <div
                                key={index}
                                className={`thumbnail ${index === currentImage ? 'active' : ''}`}
                                onClick={() => setCurrentImage(index)}
                            >
                                <img src={image} alt={`Thumbnail ${index}`} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );

}

export default Slide
