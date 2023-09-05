import React, { useState, useEffect } from 'react';
import Item from '../items/Item';
import axios from 'axios';
import '../styles/Product.css';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { Link } from 'react-router-dom';

const Product = () => {
    const [listProducts, setListProducts] = useState([]);
    const location = useLocation();
    const [categories, setCategories] = useState(location.state ? location.state : null);
    const search = location.search.substring(1); // Loại bỏ dấu "?"
    const queryParams = queryString.parse(search);
    const encodedSearchTerm = queryParams.search;
    const itemsPerPage = 16;
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/product');
                setListProducts(response.data.data.products);
            } catch (error) {
                console.log('Get category error' + error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        setCategories(location.state === undefined ? categories : location.state);
        console.log(location);
    }, [location.state, encodedSearchTerm]);
    useEffect(() => {
        setCurrentPage(1);
    }, [categories._id]);


    const filteredProducts = listProducts
        .filter(item => (!categories || (categories._id === "1" || item.category._id === categories._id)) && (!encodedSearchTerm || item.name.toLowerCase().includes(encodedSearchTerm.toLowerCase())))

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const searchParams = encodedSearchTerm ? `search=${encodedSearchTerm}&` : '';

    return (
        <div>
            <div className="container-list-product">
                <div className='title-list'>
                    {categories._id !== '1' ? categories.name : (
                        encodedSearchTerm ? `Sản phẩm với từ khóa '${queryParams.search}'` : 'Tất cả sản phẩm'
                    )}
                </div>

                <div className='list-item'>
                    {filteredProducts.slice(startIndex, startIndex + itemsPerPage).map((item, key) => (
                        <div key={key}>
                            <Item product={item} />
                        </div>
                    ))}

                </div>
                {
                    totalPages > 1 && (
                        <div className="pagination">
                            <Link
                                to={`?${searchParams}page=${currentPage - 1}`}
                                className={`pagination-btn ${currentPage === 1 ? 'disabled' : ''}`}
                                onClick={goToPreviousPage}
                                disabled={currentPage === 1}
                                state={categories}
                            >
                                Previous
                            </Link>
                            {Array.from({ length: totalPages }, (_, index) => (
                                <Link
                                    key={index + 1}
                                    to={`?${searchParams}page=${index + 1}`}
                                    className={`pagination-btn ${currentPage === index + 1 ? 'active' : ''}`}
                                    onClick={() => setCurrentPage(index + 1)}
                                    state={categories}
                                >
                                    {index + 1}
                                </Link>
                            ))}
                            <Link
                                to={`?${searchParams}page=${currentPage + 1}`}
                                className={`pagination-btn ${currentPage === totalPages ? 'disabled' : ''}`}
                                onClick={goToNextPage}
                                disabled={currentPage === totalPages}
                                state={categories}
                            >
                                Next
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Product;
