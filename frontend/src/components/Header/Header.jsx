"use client";

import React, { useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [language, setLanguage] = useState("en");
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <a href="/" className={styles.logo}>
                    CODELAB
                </a>

                <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
                    <ul className={styles.nav__list}>
                        <li className={styles.nav__list_item}>
                            <Link href="/" onClick={toggleMenu}>HOME</Link>
                        </li>
                        <li className={styles.nav__list_item}>
                            <Link href="/Login" onClick={toggleMenu}>LOGIN</Link>
                        </li>
                        <li className={styles.nav__list_item}>
                            <Link href="/Codelab" onClick={toggleMenu}>
                                <span className={styles.codelabPlus}>CODELAB+</span>
                            </Link>
                        </li>
                        <li className={styles.nav__list_item}>
                            <Link href="/Dashboard" onClick={toggleMenu}>
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li className={styles.mobileLanguageSelector}>
                            <select value={language} onChange={handleLanguageChange}>
                                <option value="en">English</option>
                                <option value="ru">Russian</option>
                                <option value="lv">Latvian</option>
                            </select>
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

                <div className={styles.burger} onClick={toggleMenu}>
                    {menuOpen ? <X size={28} color="#fff" /> : <Menu size={28} color="#fff" />}
                </div>
            </div>
        </header>
    );
};

export default Header;
