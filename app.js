//events in node
//a signal that something has happened
//we need to respond to these events by reading and responding

//EventEmitter is a class that contains the event
const EventEmitter = require('events')
//second one is now an object
const emitter = new EventEmitter();

// Register a listener
// must be called before the emiter
emitter.on('messageLogged', function(){
  console.log('listener called');
})


//emit = make a noise or produce something
//raise an event
emitter.emit('messageLogged')

