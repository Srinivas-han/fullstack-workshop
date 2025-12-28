function createEventEmitter() {
    const events = {};

    return {
        
        on(eventName, callback) {
            if (!events[eventName]) {
                events[eventName] = [];
            }

            events[eventName].push(callback);

          
            return () => {
                events[eventName] = events[eventName].filter(
                    cb => cb !== callback
                );
            };
        },

       
        once(eventName, callback) {
            const wrapper = (...args) => {
                callback(...args);
                this.off(eventName, wrapper);
            };

            this.on(eventName, wrapper);
        },

       
        emit(eventName, data) {
            if (!events[eventName]) return;

           
            events[eventName].slice().forEach(callback => {
                callback(data);
            });
        },

        
        off(eventName, callback) {
            if (!events[eventName]) return;

            
            if (!callback) {
                delete events[eventName];
            } else {
                events[eventName] = events[eventName].filter(
                    cb => cb !== callback
                );
            }
        }
    };
}

         /*TEST CASE*/

const emitter = createEventEmitter();


const unsubscribe = emitter.on('userLogin', (user) => {
    console.log(`${user.name} logged in`);
});

emitter.on('userLogin', (user) => {
    console.log(`Send welcome email to ${user.email}`);
});


emitter.once('appStart', () => {
    console.log('App started - this only runs once');
});


emitter.emit('userLogin', { name: 'John', email: 'john@example.com' });


emitter.emit('appStart'); 
emitter.emit('appStart'); 

unsubscribe(); 

emitter.emit('userLogin', { name: 'Jane', email: 'jane@example.com' });


emitter.off('userLogin'); 
