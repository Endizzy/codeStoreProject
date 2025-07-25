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
            <Link href="/">
                <h1 className={styles.logo}>CODELAB</h1>
            </Link>
            <p className={styles.subtitle}>Post a code to get featured...</p>
            <nav className={styles.nav}>
                <hr className={styles.line}/>
                <Link href="/"><House size={16}/> Home</Link>
                <Link href="/Dashboard"><LayoutDashboard size={16} /> Dashboard</Link>
                <Link href="/frontend/public"><Plus size={16} /> Post a Code</Link>
                <Link href="/frontend/public"><Folder size={16} /> My Codes</Link>
                <Link href="/Editor"><Pencil size={16} /> Editor</Link>
                <Link href="/frontend/public"><Heart size={16} /> Favorites</Link>
                <Link href="/frontend/public"><User size={16} /> My Account</Link>
                <Link href="/Contact"><Mail size={16} /> Contact Us</Link>
                <Link href="/frontend/public"><LogOut size={16} /> Log Out</Link>
                <hr/>
            </nav>
        </aside>
    );
}
