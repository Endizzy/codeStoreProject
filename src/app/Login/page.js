"use client";

import React, {useEffect, useState} from 'react';
import {useRouter} from "next/navigation";
import styles from "./Login.module.css"
import Header from "@/components/Header/Header";
import Link from "next/link";

const Login = () => {
    const router = useRouter()
    const [form, setForm] = useState({
        email: '',
        password: '',
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
            const res = await fetch('http://localhost/codestorephp/codeStoreProject/php-api/login.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (data.success && data.token) {
                localStorage.setItem('token', data.token); // сохраняем токен
                setMessage({ type: 'success', text: 'Вы успешно вошли!' });
                setForm({ email: '', password: '' });
                router.push('/Dashboard');
            } else {
                setMessage({ type: 'error', text: data.message || 'Ошибка авторизации' });
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
              <h1 className={styles.title}>Login</h1>
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
                      {loading ? 'Loading...' : 'Login'}
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
                  <div className={styles.loginContent}>
                      <div>
                          <button className={styles.forgotPassword}>Forgot password?</button>
                      </div>
                      <div>
                          <Link href="/Registration">
                            <button className={styles.createAccount}>Create an account</button>
                          </Link>
                      </div>
                  </div>
              </form>
          </div>
      </>
  );
};

export default Login;
