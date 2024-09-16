import React from 'react';
import styles from './Card.module.scss';

const Card = ({ title, color="#072C2B", count, isLoading = true }) => {
    return (
        <article className={styles.cardContainer}>
            <div className={styles.progressContainer}>
                <div className={styles.progress} style={{borderColor: color}}>
                    { count }
                </div>
            </div>
            <div className={styles.informationContainer}>
                <h1>{title}</h1>
            </div>
        </article>
    )
}

export default Card;
