import React from 'react';
import Header from "@/components/Header/Header";
import styles from "./Codelab.module.css";

const Codelab = () => {
    const cards = [
        {
            title: "AI Assistant",
            description: "Get help writing better code instantly.",
        },
        {
            title: "Premium Snippets",
            description: "Unlock ready-to-use professional snippets.",
        },
        {
            title: "Website Templates",
            description: "Download modern full-stack templates.",
        },
        {
            title: "Promote Yourself",
            description: "Boost your visibility in the community.",
        },
        {
            title: "No Ads",
            description: "Clean experience without interruptions.",
        },
        {
            title: "Priority Support",
            description: "Faster answers, real devs helping.",
        },
    ];

    return (
        <div>
            <Header />
            <div className={styles.container}>
                <div className={styles.cardWrapper}>
                    <h1 className={styles.title}>Unlock New Experiences </h1>
                    <h1 className={styles.title}>WITH CODELAB+</h1>
                    <div className={styles.grid}>
                        {cards.map((card, index) => (
                            <div key={index} className={styles.flipCard}>
                                <div className={styles.flipCardInner}>
                                    <div className={styles.flipCardFront}>
                                        <h3>{card.title}</h3>
                                    </div>
                                    <div className={styles.flipCardBack}>
                                        <p>{card.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.questionWrapper}>
                    <div className="left__side">
                        <h1 className={styles.contact__title}>Have questions? </h1>
                        <p className={styles.contact__desc}>We are always ready to help you</p>
                    </div>
                    <hr className={styles.hrVertical}/>
                    <div className="right__side">
                        <button className={styles.contact__button}>Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Codelab;
