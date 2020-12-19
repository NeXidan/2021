import * as React from 'react';
import {animated, useSpring} from 'react-spring';
import {cn} from '../helpers/cn';
import {getElementOffset} from '../helpers/getElementOffset';
import {useEventListener} from '../hooks/useEventListener/useEventListener';
import styles from './Eyes.module.css';

interface EyesProps {
    className?: string;
}

function radToDeg(x: number) {
    return (x * (180 / Math.PI) * -1) + 180;
}

function getRad(element: HTMLDivElement | null, [pageX, pageY]: [number, number]) {
    if (!element) {
        return 0;
    }

    const offset = getElementOffset(element);

    const x = offset.left + (element.offsetWidth / 2);
    const y = offset.top + (element.offsetHeight / 2);
    return Math.atan2(pageX - x, pageY - y);
}

export const Eyes: React.FC<EyesProps> = ({className}) => {
    const aRef = React.useRef<HTMLDivElement | null>(null);
    const bRef = React.useRef<HTMLDivElement | null>(null);

    const [{a, b}, set] = useSpring<{a: number, b: number}>(() => ({a: 0, b: 0}));

    useEventListener(document, 'mousemove', (event: MouseEvent) => {
        const xy: [number, number] = [event.pageX, event.pageY];
        const aRad = getRad(aRef.current, xy);
        const bRad = getRad(aRef.current, xy);
        set({a: aRad, b: bRad, immediate: true});
    });

    return (
        <div className={cn(styles.wrapper, className)}>
            <animated.div className={styles.eye} style={{transform: a.interpolate((x) => 'rotate(' + radToDeg(x) + 'deg)')}} ref={aRef} />
            <animated.div className={styles.eye} style={{transform: b.interpolate((x) => 'rotate(' + radToDeg(x) + 'deg)')}} ref={bRef} />
        </div>
    );
};
