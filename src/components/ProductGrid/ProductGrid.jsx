"use client";

import React, { useState } from 'react';
import styles from './ProductGrid.module.css';
import ProductCard from "../ProductCard/ProductCard";

const PAGE_SIZE = 6; // Кол-во карточек на одной странице

const ProductGrid = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const products = [
        { id: 1, title: 'Product 1', username: 'Nikita', views: 1256, imageUrl: './codelab1.webp', isPremium: true },
        { id: 2, title: 'Product 2', username: 'Nikita', views: 125645, imageUrl: './codelab1.webp', isPremium: false },
        { id: 3, title: 'Product 3', username: 'Denis', views: 25645, imageUrl: './codelab1.webp', isPremium: false },
        { id: 4, title: 'Product 4', username: 'Nikita', views: 45, imageUrl: './codelab1.webp', isPremium: true },
        { id: 5, title: 'Product 5', username: 'Andrej', views: 125645, imageUrl: './codelab1.webp', isPremium: false },
        { id: 6, title: 'Product 6', username: 'Nikita', views: 998, imageUrl: './codelab1.webp', isPremium: false },
        { id: 7, title: 'Product 7', username: 'Denis', views: 300, imageUrl: './codelab1.webp', isPremium: false },
        { id: 8, title: 'Product 8', username: 'Alex', views: 10500, imageUrl: './codelab1.webp', isPremium: true },
        { id: 9, title: 'Product 9', username: 'Nikita', views: 45, imageUrl: './codelab1.webp', isPremium: false },
        { id: 10, title: 'Product 10', username: 'Nikita', views: 125645, imageUrl: './codelab1.webp', isPremium: false },
        { id: 11, title: 'Product 11', username: 'Andrej', views: 998, imageUrl: './codelab1.webp', isPremium: true },
        { id: 12, title: 'Product 12', username: 'Denis', views: 300, imageUrl: './codelab1.webp', isPremium: false },
        { id: 13, title: 'Product 13', username: 'Alex', views: 10500, imageUrl: './codelab1.webp', isPremium: false },
    ];

    const totalPages = Math.ceil(products.length / PAGE_SIZE);

    const paginatedProducts = products.slice(
        (currentPage - 1) * PAGE_SIZE,
        currentPage * PAGE_SIZE
    );

    const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

    return (
        <div className={styles.container}>
            <div className={styles.product_grid}>
                {paginatedProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        username={product.username}
                        views={product.views}
                        imageUrl={product.imageUrl}
                        isPremium={product.isPremium}
                    />
                ))}
            </div>

            <div className={styles.pagination}>
                <button onClick={prevPage} disabled={currentPage === 1}>←</button>
                <span>{currentPage} / {totalPages}</span>
                <button onClick={nextPage} disabled={currentPage === totalPages}>→</button>
            </div>
        </div>
    );
};

export default ProductGrid;
