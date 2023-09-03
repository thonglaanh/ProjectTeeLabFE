
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
            // Thay đổi ảnh và thực hiện animation
            setCurrentImage((prevImage) => {
                const nextImage = (prevImage + 1) % images.length;
                animateSlide(nextImage); // Gọi hàm thực hiện animation
                return nextImage;
            });
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [images.length]);
    const animateSlide = (nextImage) => {
        const imageContainer = document.querySelector('.image-container');
        imageContainer.style.transform = `translateX(-${nextImage * 100}%)`;
    };

    return (
        <div className='container-slide'>
            <div className='image-container'>
                {images.map((image, index) => (
                    <img key={index} className='img-slide' src={image} alt={`Slide ${index}`} />
                ))}
            </div>
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
    );


}

export default Slide
