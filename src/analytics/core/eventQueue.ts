import { AnalyticsEvent } from '../contracts/index';

const queue: AnalyticsEvent[] = [];
let count = 0;

export function enqueue(event: AnalyticsEvent) {
    if (!event.event) return;

    queue.push(event);
    console.log(queue);
    count = count + 1;
}

export function drainQueue(): AnalyticsEvent[] {
    return queue.splice(0, queue.length);
}
