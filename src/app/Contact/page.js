import React from 'react';
import styles from "./Contact.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Mail } from 'lucide-react';

const Contact = () => {
    return (
        <div>
            <div className={styles.sidebarWrapper}>
                <Sidebar />
                <div className={styles.container}>
                    <div className={styles.cardTitle}>
                        <h1 className={styles.title}>Contact Us</h1>
                        <p className={styles.desc}>Drop us a line and we&#39;ll be in touch.</p>
                    </div>
                    <div className={styles.cardWrapper}>
                        <div className={styles.contactWelcome}>
                            <p className={styles.desc}>Drop us a line and we&#39;ll be in touch.</p>
                            <p className={styles.desc}>We&#39;d love to hear from you. Fill out the form below and we&#39;ll respond as soon as possible.</p>
                        </div>
                        <form className={styles.form}>
                            <input type="text" placeholder="Your name" className={styles.input} required />
                            <input type="email" placeholder="Your email" className={styles.input} required />
                            <textarea placeholder="Your message" className={styles.textarea} required></textarea>
                            <button type="submit" className={styles.button}>
                                    <Mail size={24} />
                                    <span>Send Message</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
