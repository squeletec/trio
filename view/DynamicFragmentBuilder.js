import {Content, content, text} from "./Content.js"

export class DynamicFragmentBuilder extends Content {
   constructor(start, end) {
       super(document.createDocumentFragment())
       this.get().appendChild((this._start = start).get())
       this.get().appendChild((this._end = end).get())
   }

   add(...args) {
       this._end.prepend(...args)
       return this
   }

   clear() {
       clearRange(this._start.get(), this._end.get())
       return this
   }
}

function clearRange(s, e) {
    while(s.nextSibling && s.nextSibling !== e)
        content(s.nextSibling).remove()
}

export function dynamicFragment(start = text(), end = text()) {
    return new DynamicFragmentBuilder(start, end)
}
