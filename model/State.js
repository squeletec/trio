
export class Observable {

    get() {}

    observe(observer) {
        this.observeChanges(observer)
        observer(this.get())
        return this
    }

    observeChanges(observer) {  }
}

export function isObservable(value) {
    return value instanceof Observable
}
