'use client'

import styles from './NewUsersSection.module.css'; // Подключаем стили
const words = ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Node.js', 'Tailwind', 'Next.js']

export default function NewUsersSection() {
    const repeatedWords = [...words, ...words, ...words]
    return (
        <div>
            <div className={styles.scrollerWrapper}>
                <h1 style={{textAlign: "center", alignItems: "center", paddingBottom: "20px"}}>Welcome new Users!</h1>
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
