import React from 'react';
import styles from './Sidebar.module.scss';
import SidebarData from '../../../data/sidebar.json';
import { Icon } from '@iconify/react/dist/iconify.js';

const Sidebar = () => {
    return (
        <section className={styles.container}>
            <button className={styles.logo}>
                <Icon icon="mdi:smiley" />
            </button>
            <section className={styles.icons}>
                {SidebarData.map((x) => {
                    return (
                        <Icon icon={x.icon} />
                    );
                })}
            </section>
            <button className={styles.logoutBtn}>
                <Icon icon="material-symbols:logout" />
            </button>
        </section>
    )
}

export default Sidebar;
