event-dispatcher Module
=======================

Exposes a Basic EventDispatcher Class.

Api
---

```
@public subscribe(event: string, callback: (data?) => void) => string

    Subscribes callback function as a listener for event.
    Returns subscription id.

@public unsubscribe(subscriptionId: string) => void

    Unsubscribes the callback subscribed with the subscriptionId subscription.

@public dispatch(event: string, data?: object) => void

    Dispatches event with data to all the callbacks subscribed to event.

@public getEventSubscriptions(event: string) => object

    Returns all the subscriptions for event.

@private _getSubscriptionId(event: string) => string

    Creates and returns a unique subscription id for event.

@private _noEvents(event: string) => boolean

    Returns if there are no events of event type.

@private _log(level: string, message: string) => void

    Logs message to console with level style.
    Uses the console js native object methods.
```

Properties
----------

```
@private _events: object

    Format

        .<eventName>: object
            .<subscriptionId>: (data?) => void
            .<subscriptionId> (data?) => void
            ...
        ...
```

Usage
-----

```

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

dispatcher.unsubscribe('HELLO', subscriptionHello);

```