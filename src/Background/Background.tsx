import * as React from 'react';
import {Alesha} from '../Alesha/Alesha';
import {Doge} from '../Doge/Doge';
import {randomFromRange} from '../helpers/randomFromRange';
import styles from './Background.module.css';

interface BackgroundProps {
    dogesCount: number;
}

export const Background: React.FC<BackgroundProps> = ({dogesCount}) => {
    const [doges] = React.useState(() => {
        return Array.from({length: dogesCount}, () => {
            return {
                top: randomFromRange(0, document.body.clientHeight - 231),
                left: randomFromRange(0, document.body.clientWidth - 170),
                rotate: randomFromRange(-60, 60),
                Component: Math.random() > 0.5 ? Doge : Alesha,
            };
        });
    });

    return (
        <div
            className={styles.container}
        >
            {doges.map(({Component, ...props}, index) => <Component {...props} key={index} />)}
        </div>
    );
};
