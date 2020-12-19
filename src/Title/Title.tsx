import * as React from 'react';
import styles from './Title.module.css';

export const Title: React.FC = ({children}) => {
    return (
        <div className={styles.title}>{children}</div>
    );
};
