'use client';
import { useState } from 'react';
import styles from './LanguageSelector.module.css';
import { FaChevronDown } from 'react-icons/fa';

const languages = [
    { code: 'en', label: 'English' },
    { code: 'lv', label: 'Latvian' },
    { code: 'ru', label: 'Russian' },
];

export default function LanguageSelector() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState(languages[0]);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const selectLanguage = (lang) => {
        setSelectedLang(lang);
        setIsOpen(false);
        // TODO: add your language switching logic here
    };

    return (
        <div className={styles.dropdown}>
            <button onClick={toggleDropdown} className={styles.dropdownToggle}>
                {selectedLang.label}
                <FaChevronDown
                    className={`${styles.icon} ${isOpen ? styles.rotate : ''}`}
                />
            </button>

            {isOpen && (
                <ul className={styles.dropdownMenu}>
                    {languages.map((lang) => (
                        <li
                            key={lang.code}
                            onClick={() => selectLanguage(lang)}
                            className={`${styles.dropdownItem} ${
                                selectedLang.code === lang.code ? styles.active : ''
                            }`}
                        >
                            {lang.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
