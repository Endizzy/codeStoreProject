import styles from './Sidebar.module.css';
import Link from 'next/link';
import { House } from 'lucide-react';
import { LayoutDashboard } from 'lucide-react';
import { Plus } from 'lucide-react';
import { Folder } from 'lucide-react';
import { Pencil } from 'lucide-react';
import { Heart } from 'lucide-react';
import { User } from 'lucide-react';
import { Mail } from 'lucide-react';
import { LogOut } from 'lucide-react';

export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <h1 className={styles.logo}>WEBLEB</h1>
            <p className={styles.subtitle}>Post a code to get featured...</p>
            <nav className={styles.nav}>
                <hr className={styles.line}/>
                <Link href="/"><House size={16}/> Home</Link>
                <Link href="/"><LayoutDashboard size={16} /> Dashboard</Link>
                <Link href="/"><Plus size={16} /> Post a Code</Link>
                <Link href="/"><Folder size={16} /> My Codes</Link>
                <Link href="/"><Pencil size={16} /> Editor</Link>
                <Link href="/"><Heart size={16} /> Favorites</Link>
                <Link href="/"><User size={16} /> My Account</Link>
                <Link href="/"><Mail size={16} /> Contact Us</Link>
                <Link href="/"><LogOut size={16} /> Log Out</Link>
                <hr/>
            </nav>
        </aside>
    );
}
