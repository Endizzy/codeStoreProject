"use client";

import React, { useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
    const [language, setLanguage] = useState("en");

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <a href="/" className={styles.logo}>
                    CODELAB
                </a>

                <nav>
                    <ul className={styles.nav__list}>
                        <li className={styles.nav__list_item}>
                            <Link href="/">
                                HOME
                            </Link>
                        </li>
                        <li className={styles.nav__list_item}>
                            <Link href="/Login">
                                LOGIN
                            </Link>
                        </li>
                        <li className={styles.nav__list_item}>
                            <span className={styles.codelabPlus}>CODELAB+</span>
                        </li>
                        <li className={styles.nav__list_item}>
                            <Link href="/Dashboard">
                                <span className={styles.nav__list_item}>Dashboard</span>
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className={styles.languageSelector}>
                    <select value={language} onChange={handleLanguageChange}>
                        <option value="en">English</option>
                        <option value="ru">Russian</option>
                        <option value="lv">Latvian</option>
                    </select>
                </div>
            </div>
        </header>
    );
};

export default Header;
