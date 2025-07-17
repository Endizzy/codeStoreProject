
'use client';

import React, {useEffect, useState} from 'react';
import styles from './Registration.module.css';
import Header from "@/components/Header/Header";
import { useRouter } from 'next/navigation';

const Registration = () => {

    const router = useRouter();

    const [form, setForm] = useState({
        email: '',
        password: '',
        nickname: '',
    });

    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        try {
            const res = await fetch('http://localhost/codestorephp/codeStoreProject/php-api/registration.php', {  // путь к твоему API
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            const data = await res.json();
            if (data.success) {
                setMessage({ type: 'success', text: 'Регистрация прошла успешно!' });
                setForm({ email: '', password: '', nickname: '' });
                router.push("/Login")
            } else {
                setMessage({ type: 'error', text: data.message || 'Ошибка регистрации' });
            }
        } catch (err) {
            setMessage({ type: 'error', text: 'Ошибка сети' });
        }

        setLoading(false);
    };

    useEffect(() => {
        // no-scroll
        document.body.style.overflow = 'hidden';

        // return no-scroll
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <>
            <Header />
            <div className={styles.container}>
                <h1 className={styles.title}>Registration</h1>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <label className={styles.label}>
                        <input
                            type="email"
                            name="email"
                            className={styles.input}
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="example@mail.com"
                        />
                    </label>

                    <label className={styles.label}>
                        <input
                            type="text"
                            name="nickname"
                            className={styles.input}
                            value={form.nickname}
                            onChange={handleChange}
                            required
                            placeholder="User Name"
                        />
                    </label>

                    <label className={styles.label}>
                        <input
                            type="password"
                            name="password"
                            className={styles.input}
                            value={form.password}
                            onChange={handleChange}
                            required
                            placeholder="Password"
                            minLength={6}
                        />
                    </label>

                    <button type="submit" className={styles.button} disabled={loading}>
                        {loading ? 'Загрузка...' : 'Registration'}
                    </button>

                    {message && (
                        <p
                            className={
                                message.type === 'success'
                                    ? styles.messageSuccess
                                    : styles.messageError
                            }
                        >
                            {message.text}
                        </p>
                    )}
                </form>
            </div>
        </>
    );
};

export default Registration;
