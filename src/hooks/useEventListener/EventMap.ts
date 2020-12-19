export class EventMap<T> {
    private targets: Map<any, Map<string, T>> = new Map();
    private factory: () => T;

    constructor(factory: () => T) {
        this.factory = factory;
    }

    getTargetEvents(target: any) {
        let events = this.targets.get(target);

        if (!events) {
            events = new Map();

            this.targets.set(target, events);
        }

        return events;
    }

    getEventValues(target: any, event: string) {
        let targetEvents = this.getTargetEvents(target);
        let values = targetEvents.get(event);

        if (!values) {
            values = this.factory();

            targetEvents.set(event, values);
        }

        return values;
    }
}
