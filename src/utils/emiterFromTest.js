// my implementation
class EventEmitter {
  constructor() {
    const events = new Map();

    this.events = events;
  }

  broadcast(eventName, ...args) {
    const listeners = this.events.get(eventName);

    if (!listeners) return;

    [...listeners].forEach((listener) => {
      listener(...args);
    });
  }

  register(eventName, listener) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, new Set());
    }

    this.events.get(eventName).add(listener);
  }
}


// what i got from the interviewer
// EventEmitter.prototype.removeAllListeners = function (event) {
//   this.events.delete(event);
// };

var e = new EventEmitter();
// e.register("hungry", function callbackTwo() {
//   e.removeAllListeners("hungry");
// });

e.register("hungry", function callbackOne(food) {
  console.log("Got some " + food);
});
e.register("hungry", function callbackThree(food) {
  console.log("Ate some " + food);
});

// [c1, c2, c3]
// []
e.broadcast("hungry", "apples"); // What happens?
