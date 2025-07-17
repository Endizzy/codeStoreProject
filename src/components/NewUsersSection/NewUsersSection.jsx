'use client'

import { useEffect, useState } from 'react';
import styles from './NewUsersSection.module.css';

export default function NewUsersSection() {
    const [nicknames, setNicknames] = useState([]);

    useEffect(() => {
        async function fetchNicknames() {
            try {
                const res = await fetch('http://localhost/codestorephp/codeStoreProject/php-api/get_new_users.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

                const data = await res.json();
                if (Array.isArray(data)) {
                    const names = data.map(user => user.nickname);
                    setNicknames(names);
                }
            } catch (error) {
                console.error('Ошибка при получении пользователей:', error);
            }
        }

        fetchNicknames();
    }, []);

    return (
        <div>
            <div className={styles.scrollerWrapper}>
                <h1 style={{ textAlign: "center", paddingBottom: "20px" }}>
                    Welcome New Users!
                </h1>

                {/* Обёртка с двумя одинаковыми блоками для бесконечной прокрутки */}
                <div className={styles.scroller}>
                    <div className={styles.track}>
                        {nicknames.map((name, index) => (
                            <div key={`1-${index}`} className={styles.card}>
                                {name}
                            </div>
                        ))}
                        {nicknames.map((name, index) => (
                            <div key={`2-${index}`} className={styles.card}>
                                {name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
