import {isObservable} from "../model/Observable.js";
import {postChannel} from "../model/PostChannel.js";
import {state} from "../model/StateModel.js";

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
    return () => model.set(-model.get())
}

export function remove(content) {
    return () => content.remove()
}

export function clear(content) {
    return () => content.clear()
}

export function show(dialog) {
    if(typeof dialog == 'string')
        return () => document.getElementById(dialog).showModal()
    return () => dialog.get().showModal()
}

function dialogOf(element) {
    for(; element; element = element.parentNode)
        if(element.tagName === 'DIALOG')
            return element
    throw new Error('x')
}

export function close(dialog) {
    if(dialog)
        return () => dialog.get().close()
    return event => dialogOf(event.target).close()
}

export function save(model, response = state()) {
    return event => postChannel(event.target.action, model, response).trigger()
}
