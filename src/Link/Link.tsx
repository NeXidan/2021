import * as React from 'react';
import styles from './Link.module.css';

interface LinkProps {
    href: string
}

export const Link: React.FC<LinkProps> = ({href}) => {
    return (
        <a className={styles.wrapper} href={href}>
            <div className={styles.description}>Че зыришь глаза пузыришь?</div>
            <div className={styles.link}>{'> Жми сюда <'}</div>
        </a>
    );
};
