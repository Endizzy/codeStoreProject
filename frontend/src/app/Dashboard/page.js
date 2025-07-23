'use client';

import styles from './Dashboard.module.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const router = useRouter();

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('token'); // предполагаем, что ты хранишь токен в localStorage

            if (!token) {
                router.push("/Login");
                return;
            }

            try {
                const res = await fetch('http://localhost/codestorephp/codeStoreProject/php-api/get-user-from-token.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                });

                const data = await res.json();

                if (data.success) {
                    setUser(data.user);
                } else {
                    setError(data.message || 'Ошибка получения пользователя');
                    router.push("/Login");
                }
            } catch (err) {
                console.error('Ошибка сети:', err);
                setError('Ошибка сети при получении данных пользователя');
                router.push("/Login");
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [router]);

    if (loading) return <LoadingSpinner />;
    if (!user) return null; // или заглушка

    const Role = user?.is_admin === 1 ? 'Admin' : 'User';

    return (
        <div className={styles.container}>
            <Sidebar />

            <div className={styles.main}>
                <div className={styles.profileCard}>
                    <h2>Name: {user.nickname}</h2>
                    <p>Tag: {user.name_tag}</p>
                    <p>Role: {Role}</p>
                    <button>Edit Profile</button>
                </div>

                <div className={styles.metrics}>
                    <div className={styles.metricCard}>
                        <p>Published Codes</p>
                        <h3>?</h3>
                    </div>
                    <div className={styles.metricCard}>
                        <p>Total Code Views</p>
                        <h3>?</h3>
                    </div>
                    <div className={styles.metricCard}>
                        <p>Rank</p>
                        <h3>?</h3>
                    </div>
                </div>

                <div className={styles.topUsers}>
                    <h3>Top Users</h3>
                    <ul>
                        <li>1. ? 👁️ 409296</li>
                        <li>2. ? 👁️ 129127</li>
                        <li>3. ? 👁️ 89206</li>
                        <li>4. ? 👁️ 82234</li>
                        <li>5. ? 👁️ 54754</li>
                        <li className={styles.you}>320. {user.nickname} 👁️ 19</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
