import {useRef} from 'react';

export function useValueRef<T>(value: T) {
    let valueRef = useRef<T>(value);

    if (valueRef.current !== value) {
        valueRef.current = value;
    }

    return valueRef;
}
