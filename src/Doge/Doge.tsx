import * as React from 'react';
import {Eyes} from '../Eyes/Eyes';
import {cn} from '../helpers/cn';
import styles from './Doge.module.css';

interface DogeProps {
    top: number;
    left: number;
    rotate?: number;
    className?: string;
}

export const Doge: React.FC<DogeProps> = ({top, left, rotate = 0, className}) => {
    return (
        <div className={cn(styles.doge, className)} style={{top, left, transform: `rotate(${rotate}deg)`}}>
            <Eyes className={styles.eyes} />
        </div>
    );
};
