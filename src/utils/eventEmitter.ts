export type Listener = (...args: unknown[]) => void;

type ErrorReporter = (error: unknown, context: { eventName: string }) => void;

export class EventEmitter {
  private events = new Map<string, Set<Listener>>();

  private reportError?: ErrorReporter;

  on(eventName: string, listener: Listener): () => void {
    // Check if this event already has listeners
    if (!this.events.has(eventName)) {
      // If not, initialize it with an empty Set
      this.events.set(eventName, new Set());
    }

    // Add the listener to this event
    this.events.get(eventName)!.add(listener);

    // console.log("on: ", this.events);

    // Return an unsubscribe function
    return () => {
      this.off(eventName, listener);
    };
  }

  off(eventName: string, listener: Listener): void {
    // get listeners for this event
    const listeners = this.events.get(eventName);
    // If the event does not exist, there is nothing to remove
    if (!listeners) return;

    console.log("off events:", this.events);
    console.log("off listeners:", listeners);
    console.log("off listener count:", listeners.size);
    console.log("0ff listeners as array:", [...listeners]);

    // Remove this specific listener
    listeners.delete(listener);

    // If there are no listeners left, remove the event completely
    if (listeners.size === 0) {
      this.events.delete(eventName);
    }
  }

  emit(eventName: string, ...args: unknown[]): void {
    // Get listeners for this event
    const listeners = this.events.get(eventName);

    // If the event does not exist, there is nothing to call
    if (!listeners) return;

    // Call every listener with the provided arguments
    [...listeners].forEach((listener) => {
      //   listener(...args);
      try {
        listener(...args);
      } catch (error) {
        this.reportError?.(error, { eventName });
      }
    });
  }

  once(eventName: string, listener: Listener): () => void {
    // Register a wrapper listener instead of the original listener
    const unsubscribe = this.on(eventName, (...args) => {
      // Remove the wrapper before calling the original listener
      unsubscribe();

      // Call the original listener with the emitted arguments
      listener(...args);
    });

    // Return unsubscribe in case caller wants to remove it before it runs
    return unsubscribe;
  }

  removeAll(eventName?: string): void {
    // If eventName is provided, remove only that event
    if (eventName) {
      this.events.delete(eventName);
      return;
    }

    // If no eventName is provided, remove everything
    this.events.clear();
  }

  eventNames(): string[] {
    return [...this.events.keys()];
  }

  listenerCount(eventName: string): number {
    return this.events.get(eventName)?.size ?? 0;
  }
}

// const appEmitter = new EventEmitter((error, context) => {
//   console.error("Emitter listener failed:", error, context);

//   // Later this could be:
//   // Sentry.captureException(error, { extra: context });
// });
