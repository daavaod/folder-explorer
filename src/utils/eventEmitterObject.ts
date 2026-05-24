export type Listener = (...args: unknown[]) => void;

export class EventEmitter {
  private events: Record<string, Listener[]> = {};

  on(eventName: string, listener: Listener): () => void {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(listener);

    return () => {
      this.off(eventName, listener);
    };
  }

  off(eventName: string, listener: Listener): void {
    const listeners = this.events[eventName];

    if (!listeners) return;

    this.events[eventName] = listeners.filter((l) => l !== listener);

    if (this.events[eventName].length === 0) {
      delete this.events[eventName];
    }
  }

  emit(eventName: string, ...args: unknown[]): void {
    const listeners = this.events[eventName];

    if (!listeners) return;

    [...listeners].forEach((listener) => {
      listener(...args);
    });
  }

  once(eventName: string, listener: Listener): () => void {
    const unsubscribe = this.on(eventName, (...args) => {
      unsubscribe();
      listener(...args);
    });

    return unsubscribe;
  }

  removeAll(eventName?: string): void {
    if (eventName) {
      delete this.events[eventName];
      return;
    }

    this.events = {};
  }

  eventNames(): string[] {
    return Object.keys(this.events);
  }
}
