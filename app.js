//events in node
//a signal that something has happened
//we need to respond to these events by reading and responding

//EventEmitter is a class that contains the event
const EventEmitter = require('events')

//now we access a class with require
//this class now extends EventEmitter
const Logger = require('./logger');
//make a new instance of this object
const logger = new Logger();

// Register a listener
// must be called before the emiter
logger.on('messageLogged', (arg) => {
  console.log('listener called', arg);
})

logger.log('message');