import EventDispatcher from './';

describe('EventDispatcher', () => {

    it('correctly subscribes functions', () => {

        const dispatcher = new EventDispatcher();
        
        dispatcher.subscribe('HELLO', ({ name }) => {
            console.log(`Hello ${ name }`);
        });
        
        dispatcher.subscribe('GOODBYE', ({ name }) => {
            console.log(`Goodbye ${ name }`);
        });
        
        dispatcher.subscribe('GOODBYE', ({ name }) => {
            console.log(`Goodbye ${ name } again`);
        });

        expect(Object.keys(dispatcher.getEventSubscriptions('HELLO')).length).toBe(1);
        expect(Object.keys(dispatcher.getEventSubscriptions('GOODBYE')).length).toBe(2);
    });

    it('correctly unsubscribes functions', () => {

        const dispatcher = new EventDispatcher();
        
        // subscribe
        const subscription = dispatcher.subscribe('HELLO', ({ name }) => {
            console.log(`Hello ${ name }`);
        });

        // unsubscribe
        dispatcher.unsubscribe(subscription);

        expect(Object.keys(dispatcher.getEventSubscriptions('HELLO')).length).toBe(0);
    });

    it('correctly executes a subscribed function with dispatch', () => {

        const dispatcher = new EventDispatcher();

        let hellos = [];

        // subscribe
        dispatcher.subscribe('HELLO', ({ name }) => {
            hellos = [...hellos, `Hello ${ name }`];
        });

        // first dispatch
        dispatcher.dispatch('HELLO', {name: 'Andyk'});

        //console.log(hellos); // [ 'Hello Andyk' ]

        const expectedHello = 'Hello Andyk';

        expect(hellos.includes(expectedHello)).toBe(true);
        expect(hellos.filter(item => item === expectedHello).length).toEqual(1);

        // second dispatch
        dispatcher.dispatch('HELLO', {name: 'Andyk'});

        //console.log(hellos); // [ 'Hello Andyk', 'Hello Andyk' ]

        expect(hellos.filter(item => item === expectedHello).length).toEqual(2);

    });

    it('usage', () => {

        // create dispatcher instance

        const dispatcher = new EventDispatcher();
                
        // subscribe

        const subscriptionHello = dispatcher.subscribe('HELLO', ({ name }) => {
            console.log(`Hello ${ name }`);
        });

        const subscriptionGoodbye = dispatcher.subscribe('GOODBYE', ({ name }) => {
            console.log(`Goodbye ${ name }`);
        });

        const subscriptionGoodbyeMagic = dispatcher.subscribe('GOODBYE', ({ name }) => {
            console.log(`Goodbye ${ name }, you are magic!`);
        });

        // dispatch

        dispatcher.dispatch('HELLO', {name: 'Luke'});
        dispatcher.dispatch('HELLO', {name: 'John'});
        dispatcher.dispatch('GOODBYE', {name: 'Luke'});
        dispatcher.dispatch('GOODBYE', {name: 'John'});

        // unsubscribe

        dispatcher.unsubscribe(subscriptionHello);

        dispatcher.dispatch('HELLO', {name: 'Mark'});

    });

});