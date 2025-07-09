'use client';

import { useRouter } from 'next/navigation';
import styles from './ProductCard.module.css';
import { Eye } from 'lucide-react';

const ProductCard = ({ id, title, username, views, imageUrl }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/script/${id}`);
    };

    return (
        <div className={styles.card} onClick={handleClick}>
            <div className={styles.imageWrapper}>
                <img src={imageUrl} alt={title} className={styles.image} />
            </div>

            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.meta}>
                    <span className={styles.author}>by {username}</span>
                    <div className={styles.views}>
                        <Eye size={16} />
                        <span>{views.toLocaleString()}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
