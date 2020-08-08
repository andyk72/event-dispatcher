event-dispatcher Module
=======================

Exposes a Basic EventDispatcher Class.

api
===

nextDayOfWeek Object
--------------------

nextDayOfWeek.DAYS_OF_WEEK {Object}  
nextDayOfWeek.dateFormat(date, format?)
nextDayOfWeek.nextDayOfWeek(dayOfWeek?, date?)  
nextDayOfWeek.nextSunday(date?)  
nextDayOfWeek.nextMonday(date?)  
nextDayOfWeek.nextTuesday(date?)  
nextDayOfWeek.nextWednesday(date?)  
nextDayOfWeek.nextThursday(date?)  
nextDayOfWeek.nextFriday(date?)  
nextDayOfWeek.nextSaturday(date?)  

usage
=====

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