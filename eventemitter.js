const EventEmitter = require("events");
const event = new EventEmitter();

event.on("start", () => {
  console.log('Event "start" has been triggered');
});

event.emit("start");
