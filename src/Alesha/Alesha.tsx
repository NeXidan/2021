import * as React from 'react';
import {Eyes} from '../Eyes/Eyes';
import {cn} from '../helpers/cn';
import styles from './Alesha.module.css';

interface AleshaProps {
    top: number;
    left: number;
    rotate?: number;
    className?: string;
}

export const Alesha: React.FC<AleshaProps> = ({top, left, rotate = 0, className}) => {
    return (
        <div className={cn(styles.alesha, className)} style={{top, left, transform: `rotate(${rotate}deg)`}}>
            <Eyes className={styles.eyes} />
        </div>
    );
};
