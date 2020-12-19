import {useEffect} from 'react';
import {supportsPassive} from '../../helpers/supportsPassive';
import {useValueRef} from '../useValueRef/useValueRef';
import {EventMap} from './EventMap';

const eventMap = new EventMap<{
    handlers: React.RefObject<EventListener>[];
    scheduled: boolean;
}>(() => {
    return {handlers: [], scheduled: false};
});

export function useEventListener(target: any, event: string, handler: (event: any) => void) {
    const handlerRef = useValueRef(handler);

    useEffect(() => {
        if (!target) {
            return;
        }

        let values = eventMap.getEventValues(target, event);

        let onEvent: EventListener = (...args) => {
            if (values.scheduled) {
                return;
            }

            values.scheduled = true;

            requestAnimationFrame(() => {
                values.handlers.forEach((listener: React.RefObject<any>) => {
                    if (listener.current) {
                        listener.current(...args);
                    }
                });

                values.scheduled = false;
            });
        };

        let hasListeners = Boolean(values.handlers.length);
        values.handlers.push(handlerRef);

        if (!hasListeners && target.addEventListener) {
            target.addEventListener(
                event,
                onEvent,
                supportsPassive ? {passive: true} : true
            );
        }

        return () => {
            values.handlers = values.handlers.filter((a) => a !== handlerRef);

            let hasListeners = Boolean(values.handlers);

            if (!hasListeners && target.removeEventListener) {
                target.removeEventListener(event, onEvent);
            }
        };
    }, [target, event]);
}
