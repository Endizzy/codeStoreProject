'use client'

import styles from './Span.module.css'; // Подключаем стили
const words = ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Node.js', 'Tailwind', 'Next.js']

export default function Span() {
    const repeatedWords = [...words, ...words, ...words]
    return (
        <div>
            <div className={styles.scrollerWrapper}>
                <div className={styles.scroller}>
                    {repeatedWords.map((word, index) => (
                        <div key={index} className={styles.card}>
                            {word}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
