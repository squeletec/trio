import {Content, node} from "./Content.js";
import {concat} from "../model/functions.js";
import {isObservable} from "../model/Observable.js";

/**
 * Builder of general DOM Elements (not necessarily HTML).
 */
export class ElementBuilder extends Content {

    constructor(node) {
        super(node);
    }

    /**
     * Append children at the end of current content of the element.
     * @param args Any number of children to add.
     * @returns this
     */
    add(...args) {
        for(let i = 0; i < args.length; i++)
            if(args[i] !== null && args[i] !== undefined)
                this.get().appendChild(node(args[i]))
        return this
    }

    /**
     * Clear content of the element represented by this builder.
     * @returns {ElementBuilder}
     */
    clear() {
        let node = this.get()
        while(node.firstChild) node.removeChild(node.firstChild)
        return this
    }


    _manipulate(f, args) {
        if(args.length === 0) return this
        let value = args.length === 1 ? args[0] : concat(...args)
        if(isObservable(value)) value.observe(f)
        else f(value)
        return this
    }

    /*
     Manipulation of Element attributes.
     */
    set(name, ...args) {
        return this._manipulate(value => {
            if(value === null) this.get().removeAttribute(name)
            else this.get().setAttribute(name, value)
        }, args)
    }


    /*
      Manipulation of Element style properties
     */
    css(property, ...args) {
        return this._manipulate(value => {
            if(value === null) this.get().style.removeProperty(property)
            else this.get().style.setProperty(property, value)
        }, args)
    }


    setProperty(name, ...args) {
        return this._manipulate(value => {
            if(value === null) this.get()[name] = null
            else this.get()[name] = value
        }, args)
    }

    /*
     Dealing with events
     */
    on(event, handler, bubble) {
        this.get().addEventListener(event, bubble ? handler : e => {
            handler(e)
            e.preventDefault()
            return false
        })
        return this
    }

    apply(f, ...args) {
        f(this, ...args)
        return this
    }

}


export function elementBuilder(node, ...content) {
    if(node instanceof Node)
        return new ElementBuilder(node).add(...content)
    throw new ReferenceError("Provided value must be instance of Node. Got: " + node);
}

