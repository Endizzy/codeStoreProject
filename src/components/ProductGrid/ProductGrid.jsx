"use client"

import React from 'react';
import styles from './ProductGrid.module.css';
import ProductCard from "@/components/ProductCard/ProductCard";

const ProductGrid = () => {

    const products = [
        {
            id: 1,
            title: 'Product 1',
            username: 'Nikita',
            views: 1256,
            imageUrl: './codelab1.webp',
            isPremium: true,
        },
        {
            id: 2,
            title: 'Product 2',
            username: 'Nikita',
            views: 125645,
            imageUrl: './codelab1.webp',
            isPremium: false,
        },
        {
            id: 3,
            title: 'Product 3',
            username: 'Denis',
            views: 25645,
            imageUrl: './codelab1.webp',
            isPremium: false,
        },
        {
            id: 4,
            title: 'Product 4',
            username: 'Nikita',
            views: 45,
            imageUrl: './codelab1.webp',
            isPremium: false,
        },
        {
            id: 5,
            title: 'Product 5',
            username: 'Nikita',
            views: 125645,
            imageUrl: './codelab1.webp',
            isPremium: false,
        },

    ]
  return (
      <div>
          <div className={styles.container}>
              <select className={styles.custom_select}>
                  <option>Most Popular</option>
                  <option>Newest First</option>
                  <option>Most Views</option>
                  <option>Least Views</option>
              </select>

              <div className={styles.product_grid}>
                  {products.map((product) => (
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

              <div className={styles.load_more_container}>
                  <button className={styles.load_more_button}>
                      Load More Products
                  </button>
              </div>
          </div>
      </div>
  );
};

export default ProductGrid;
