import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ReactHtmlParse from 'html-react-parser';
import '../styles/Detail.css';
import axios from 'axios';
import Item from '../items/Item';
import next from '../assets/next.png';
import back from '../assets/back.png';
import { toast } from 'react-toastify';

const Detail = () => {
    const location = useLocation();
    const product = location.state.product;
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    const [color, setColor] = useState(product.colors[0]?.name || '');
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState('S');
    const listSize = ['S', 'M', 'XL'];
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const getDetail = async () => {
            try {
                const response = await axios.get('http://localhost:4000/product/' + product._id);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        getDetail();
    }, [product]);

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecreaseImage = () => {
        if (currentImage > 0) {
            setCurrentImage(currentImage - 1);
        }
    };

    const handleIncreaseImage = () => {
        if (currentImage < product.images.length - 1) {
            setCurrentImage(currentImage + 1);
        }
    };

    const [listProduct, setListProduct] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:4000/product');
            setListProduct(response.data.data.products);
        };
        fetchData();
    }, []);
    const addToCart = async () => {
        if (!token) {
            toast.error('Vui lòng đăng nhập để tiến hành mua hàng!', { position: 'top-center' });
        } else {
            try {
                const data = {
                    size: size,
                    color: color,
                    quantity: quantity,
                    product: product._id
                }
                console.log(data);
                await axios.post('http://localhost:4000/cart/create', data, {
                    headers: {
                        Authorization: token
                    }
                });
                navigate('/cart')

            } catch (error) {
                toast.error('Thêm sản phẩm vào giỏ thất bại!', { position: 'top-center' });


            }
        }

    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % product.images.length);
        }, 4000);

        return () => {
            clearInterval(interval);
        };
    }, [product.images.length]);

    return (
        <div>
            <div className="container-product-detail">
                <div className="product-detail">
                    <div className="product-image">
                        <div className='product-image-main'>
                            <img className='img-button' src={back} onClick={handleDecreaseImage} />
                            <img className='thumb' src={product.images[currentImage]} alt="" />
                            <img className='img-button' src={next} onClick={handleIncreaseImage} />
                        </div>
                        <div className='image-overlay'>
                            {
                                product.images.map((image, index) => (
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

                    <div className="product-content" style={{ marginLeft: '50px' }}>
                        <div className="product-name">{product.name}</div>
                        <div className='product-value'>
                            <div className="product-price">{product.price}</div>
                            <div className="product-oldPrice">{product.oldPrice}</div>
                        </div>
                        {product.colors.length > 0 && (
                            <>
                                <div>Màu sắc: {color}</div>
                                <div className="product-color-detail">
                                    {product.colors.map((value, key) => (
                                        <div
                                            key={key}
                                            className={`color-image ${color === value.name ? 'selected' : ''}`}
                                            onClick={() => {
                                                setColor(value.name);
                                                //  setImage(value.image) 
                                            }}
                                        >
                                            <img src={value.image} alt={`Color ${key}`} />
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                        <div>Kích thước :   {size}</div>
                        <div className="product-size-detail">
                            {listSize.map((value, key) => (
                                <div
                                    key={key}
                                    className={`size ${size === value ? 'selected' : ''}`}
                                    onClick={() => setSize(value)}
                                >
                                    <div className='item-size'>{value}</div>
                                </div>
                            ))}
                        </div>
                        <div className="product-instruct">
                            <a href="/bang-size">+ Hướng dẫn chọn size</a>
                        </div>
                        <div className="product-quantity">
                            <div style={{ marginBottom: '10px' }}>Số lượng :</div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <button className='button-1' onClick={handleDecrease}>-</button>
                                <div style={{ textAlign: 'center', width: '70px', border: 'solid 1px #000', height: '35px' }}>{quantity}</div>
                                <button className='button-2' onClick={handleIncrease}>+</button>
                            </div>
                        </div>
                        <div className="add-cart" onClick={() => addToCart()}>
                            THÊM VÀO GIỎ HÀNG
                        </div>

                    </div>

                </div>
                <div className='product-description'>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '385px', height: '50px', border: '1px solid black', borderRadius: '5px' }}>
                        MÔ TẢ SẢN PHẨM
                    </div>
                    {ReactHtmlParse(product.description)}
                </div>
                <div className="more-product">
                    <p>SẢN PHẨM TƯƠNG TỰ</p>
                </div>
                <div className='list-item'>
                    {listProduct
                        .filter(item => item.category._id === product.category._id)
                        .filter(item => item._id !== product._id)
                        .slice(0, 4)
                        .map((item, key) => (
                            <div key={key}>
                                <Item product={item} />
                            </div>
                        ))}
                </div>

            </div >

        </div >
    )
}

export default Detail
