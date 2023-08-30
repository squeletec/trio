/**
 * Observable represents a value, which notifies observers about its changes.
 */
export class Observable {

    /**
     * Get current value of the observable
     * @return current value
     */
    get() {
        throw new Error("Undeclared method Observable.get()")
    }

    /**
     * Observe state and its changes of this Observable with provided observer function.
     * @param observer
     * @return this
     */
    observe(observer) {
        this.observeChanges(observer)
        observer(this.get())
        return this
    }

    /**
     * Observe only changes of this Observable with provided observer function.
     * @param observer
     * @return this
     */
    observeChanges(observer) {
        throw new Error("Undeclared method Observable.observeChanges(observer)")
    }

    /**
     * Trigger all observers with current value.
     * @return this
     */
    trigger() {
        throw new Error("Undeclared method trigger()")
    }

    /**
     * Name of the observer bean.
     * @return {string}
     */
    getName() {
        return ""
    }

    routeTo(model, invokeNow) {
        this.observe(value => model.set(value), invokeNow)
        return this
    }

}


export function isObservable(object) {
    return object instanceof Observable
}
