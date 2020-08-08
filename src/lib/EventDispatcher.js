/**
 * Class EventDispatcher
 * 
 * @private {Object} _events
 *  .<eventName> {Object}
 *      .<subscriptionId> {Function}
 *      .<subscriptionId> {Function}
 *      ...
 *  Sample
 *      .CLICK
 *          .1596924211494-0.5753614123592607: [Function]
 *          .1596924229849-0.7226891837217109: [Function]
 *      .ON_REQUEST_START
 *          .1596924300722-0.7141574065334868: [Function]
 *      .ON_REQUEST_SUCCESS
 *          .1596924310747-0.3869856853968334: [Function]
 * 
 * @public {Function} subscribe(event: string, callback: (data?) => void) => string
 * @public {Function} unsubscribe(subscriptionId: string) => void
 * @public {Function} dispatch(event: string, data?: object) => void
 * @public {Function} getEventSubscriptions(event: string) => object
 * @private {Function} _getSubscriptionId() => string
 * @private {Function} _noEvents(event) => boolean
 * @private {Function} _log(level, message) => void
 */

class EventDispatcher {

    constructor() {
        this._events = {};
    }

    /**
     * Subscribes callback function as a listener for event
     * @param {String} event 
     * @param {Function} callback 
     * @returns {String}
     *  Returns the subscription id for callback, to be used to unsubscribe the callback with the unsubscribe(subscriptionId) method
     */
	subscribe(event, callback) {
        if (!this._events[event]) {
			this._events[event] = {};
		}
        const subscriptionId = this._getSubscriptionId(event);
        this._events[event][subscriptionId] = callback;
        return subscriptionId;
	}

    /**
     * Unsubscribes the callback subscribed with the subscriptionId subscription
     * @param {String} subscriptionId
     *  Format
     *      See _getSubscriptionId(event)
     */
    unsubscribe(subscriptionId) {
        const evt = subscriptionId.split('-')[0];
        if (this._events[evt] && this._events[evt][subscriptionId]) {
            delete this._events[evt][subscriptionId];
        }
    }

    /**
     * Dispatches event with data to all the callbacks subscribed to event
     * @param {String} event 
     * @param {Object} data 
     */
	dispatch(event, data) {
        if (this._noEvents(event)) {
            this._log('warn', `Received a ${ event } event dispatch, but no ${ event } subscription is registered.`);
			return;
		}
        for (let subscriptionId in this._events[event]) {
            let callback = this._events[event][subscriptionId];
            callback(data);
        }
	}

    /**
     * Returns all the subscriptions for event
     * @param {String} event 
     * @returns {Object}
     *  .<subscriptionId> {Function}
     *  .<subscriptionId> {Function}
     *  ...
     */
    getEventSubscriptions(event) {
        if (this._events[event]) {
            return this._events[event];
        } else {
            return null;
        }
    }

    /**
     * Creates and returns a unique subscription id
     * This must be used to unsubscribe with the unsubscribe(subscriptionId) method
     * @returns {String}
     *  Model
     *      <EVENT_TYPE>-<Date.now()>-<Math.random()>
     *  Sample
     *      'HELLO-1596924300722-0.7141574065334868'
     */
    _getSubscriptionId(event) {
        return event + '-' + Date.now() + '-' + Math.random();
    }

    /**
     * Returns if there are no events of event type
     * @param {String} event 
     * @returns {Boolean}
     */
    _noEvents(event) {
        return (!this._events[event] || Object.keys(this._events[event]).length === 0);
    }

    /**
     * Logs message to console.
     * Uses the console js native object
     * @param {String} level
     *  ['log'|'info'|'warn'|'error']
     * @param {String} message 
     */
    _log(level, message) {
        console[level](message);
    }

}

export default EventDispatcher;