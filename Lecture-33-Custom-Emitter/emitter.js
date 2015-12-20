function Emitter() {
    this.events = {};
};

Emitter.prototype.on = function(type, listener) {
    
    // if prop already exists then do nothing
    // else create a new array for that prop
    this.events[type] = this.events[type] || [];
    
    // Add the listener function for this event array
    this.events[type].push(listener);
};

Emitter.prototype.emit = function(type) {
    
    // check if we have the event type registered
    if (this.events[type]) {
        
        // get the array of functions associated with this event
        var listeners = this.events[type];
        
        // loop over the listeners and invoke each one
        listeners.forEach(function(listener) {
            // invoke the listener
            listener();
        })  
    }
};

module.exports = Emitter;