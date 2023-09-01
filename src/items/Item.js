
import React, { useState } from 'react'
import '../styles/Item.css'
import { Link } from 'react-router-dom'
import slug from 'slugify'

const Item = ({ product }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const convertToSlug = (text) => {
        return slug(text, {
            lower: true,
            remove: /[*+~.()'"!:@]/g
        });
    }
    return (
        <Link to={`/detail/${convertToSlug(product.name)}`}
            state={{ product }}
            style={{ textDecoration: 'none', color: 'inherit' }} >
            <div className='container-item'>
                <div className="product-thumb">
                    <div className="product-sale">
                        <p>{product.sale}</p>
                    </div>
                    <img src={product.images[currentImage]} onMouseEnter={() => setCurrentImage(1)}
                        onMouseLeave={() => setCurrentImage(0)} />
                </div>
                <div className="product-content">
                    <div className="product-color">
                        {product.colors.map((value, key) => (
                            <div key={key} className="color-image">
                                <img src={value.image} alt={`Color ${key}`} />
                            </div>
                        ))}
                    </div>
                    <div className="product-title">
                        {product.name}
                    </div>
                    <div className="product-price">
                        <div className="price">{product.price}</div>
                        <div className="old-price">{product.oldPrice}</div>
                    </div>
                </div>

            </div>
        </Link>
    )
}

export default Item
