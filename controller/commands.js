import {isObservable} from "../model/Observable.js";
import {postChannel} from "../model/PostChannel.js";

/**
 * Create command which sets a model to fixed value or actual value of another model.
 *
 * @param model Model to set.
 * @param value Value to set the model to.
 * @returns {{(): *, (): *}}
 */
export function set(model, value) {
    return isObservable(value) ? () => model.set(value.get()) : () => model.set(value)
}

/**
 * Create command to toggle value of provided model to its negation.
 *
 * @param model Model to negate.
 * @returns {function(): *}
 */
export function toggle(model) {
    return () => model.set(!model.get())
}

export function when(condition, command) {
    return () => condition.get() && command()
}

/**
 * Create command to trigger provided model.
 * This command is mainly used to trigger call or remote data.
 * @param model Model to trigger.
 * @returns {function(): *}
 */
export function trigger(model) {
    return () => model.trigger()
}

export function increment(model, by = 1) {
    return () => model.set(model.get() + by)
}

export function decrement(model, by = 1) {
    return increment(model, -by)
}

export function invert(model) {
    return model.set(-model.get())
}

export function remove(content) {
    return () => content.remove()
}

export function clear(content) {
    return () => content.clear()
}

export function show(dialog) {
    return () => dialog.get().showModal()
}

export function close(dialog) {
    return () => dialog.get().close()
}

export function save(model, response = state()) {
    return event => postChannel(event.targetElement.action, model, response).trigger()
}
