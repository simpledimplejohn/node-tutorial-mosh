//events in node
//a signal that something has happened
//we need to respond to these events by reading and responding

//EventEmitter is a class that contains the event
const EventEmitter = require('events')
//second one is now an object
const emitter = new EventEmitter();

// Register a listener
// must be called before the emiter
emitter.on('messageLogged', (arg) => {
  console.log('listener called', arg);
})


//emit = make a noise or produce something
//raise an event
// add an object with paramaters about the message
emitter.emit('messageLogged', {id: 1, url: 'http://', data: 'message'});

//raise: logging send (data: message)