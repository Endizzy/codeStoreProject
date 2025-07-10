'use client';

import styles from './Dashboard.module.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import React from "react";

export default function DashboardPage() {
    return (
        <div className={styles.container}>
            <Sidebar />

            <div className={styles.main}>
                <div className={styles.profileCard}>
                    <h2>Name: ?</h2>
                    <p>Tag: ?</p>
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
                        <li className={styles.you}>320. ? 👁️ 19</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
