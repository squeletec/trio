import {builder} from "./HtmlBuilder.js";
import {text} from "./Content.js";
import {dynamicFragment} from "./DynamicFragmentBuilder.js";

/**
 * Builder created on top of the existing document body element.
 * @returns {HtmlBuilder}
 */
export function body(...content) {
    return builder(document.body, ...content)
}

/**
 * Builder created on top of the existing document head element.
 * @returns {HtmlBuilder}
 */
export function head(...content) {
    return builder(document.head, ...content)
}

/**
 * Builder created on top of the existing element found by id.
 * @returns {ElementBuilder}
 */
export function byId(id) {
    return builder(document.getElementById(id))
}

/**
 * Create new DOM Element with provided name and wrap it with a builder.
 * @param name Element name.
 * @returns {HtmlBuilder} New XBuilder instance.
 */
export function element(name, ...content) {
    return builder(document.createElement(name), ...content)
}

/**
 * Create new DOM Element 'meta' and wrap it with a builder.
 * @returns {ElementBuilder} New XBuilder instance.
 */
export function meta() {
    return element('meta')
}

/**
 * Create new DOM Element 'base' and wrap it with a builder.
 * @returns {ElementBuilder} New XBuilder instance.
 */
export function base() {
    return element('base')
}

export function div(...content) {
    return element('div', ...content)
}

export function span(...content) {
    return element('span', ...content)
}

export function img(...src) {
    return element('img').src(...src)
}

export function link(rel) {
    return element('link').rel(rel)
}

export function a(...content) {
    return element('a', ...content)
}

/**
 * Create new DOM Element 'h1' and wrap it with a builder.
 * @returns {ElementBuilder} New XBuilder instance.
 */
export function h1(...content) {
    return element('h1', ...content)
}

/**
 * Create new DOM Element 'h2' and wrap it with a builder.
 * @returns {ElementBuilder} New XBuilder instance.
 */
export function h2(...content) {
    return element('h2', ...content)
}

/**
 * Create new DOM Element 'h3' and wrap it with a builder.
 * @returns {ElementBuilder} New XBuilder instance.
 */
export function h3(...content) {
    return element('h3', ...content)
}

/**
 * Create new DOM Element 'h4' and wrap it with a builder.
 * @returns {ElementBuilder} New XBuilder instance.
 */
export function h4(...content) {
    return element('h4', ...content)
}

/**
 * Create new DOM Element 'h5' and wrap it with a builder.
 * @returns {ElementBuilder} New XBuilder instance.
 */
export function h5(...content) {
    return element('h5', ...content)
}

/**
 * Create new DOM Element 'h6' and wrap it with a builder.
 * @returns {ElementBuilder} New XBuilder instance.
 */
export function h6(...content) {
    return element('h6', ...content)
}

/**
 * Create new DOM Element 'p' and wrap it with a builder.
 * @returns {ElementBuilder} New XBuilder instance.
 */
export function p(...content) {
    return element('p', ...content)
}

/**
 * Create new DOM Element 'pre' and wrap it with a builder.
 * @returns {ElementBuilder} New XBuilder instance.
 */
export function pre(...content) {
    return element('pre', ...content)
}

/**
 * Create new DOM Element 'code' and wrap it with a builder.
 * @returns {ElementBuilder} New XBuilder instance.
 */
export function code(...content) {
    return element('code', ...content)
}

/**
 * Create new DOM Element 'ul' and wrap it with a builder.
 * @returns {ElementBuilder} New XBuilder instance.
 */
export function ul(...content) {
    return element('ul', ...content)
}

/**
 * Create new DOM Element 'ol' and wrap it with a builder.
 * @returns {ElementBuilder} New XBuilder instance.
 */
export function ol(...content) {
    return element('ol', ...content)
}

/**
 * Create new DOM Element 'li' and wrap it with a builder.
 * @returns {ElementBuilder} New XBuilder instance.
 */
export function li(...content) {
    return element('li', ...content)
}

/**
 * Create new DOM Element 'small' and wrap it with a builder.
 * @returns {ElementBuilder} New XBuilder instance.
 */
export function small(...content) {
    return element('small', ...content)
}

/**
 * Create new DOM Element 'strong' and wrap it with a builder.
 * @returns {ElementBuilder} New XBuilder instance.
 */
export function strong(...content) {
    return element('strong', ...content)
}

/**
 * Create new DOM Element 'em' and wrap it with a builder.
 * @returns {ElementBuilder} New XBuilder instance.
 */
export function em(...content) {
    return element('em', ...content)
}

/**
 * Create new DOM Element 'abbr' and wrap it with a builder.
 * @returns {ElementBuilder} New XBuilder instance.
 */
export function abbr(...content) {
    return element('abbr', ...content)
}

/**
 * Create new DOM Element 'time' and wrap it with a builder.
 * @returns {ElementBuilder} New XBuilder instance.
 */
export function time(...content) {
    return element('time', ...content)
}

/**
 * Create new DOM Element 'form' and wrap it with a builder.
 * @param method Method of form submission (GET|POST). Default value is POST
 * @returns {ElementBuilder} New XBuilder instance.
 */
export function form(...content) {
    return element('form', ...content)
}

export function textarea(name) {
    return element('textarea').name(name)
}

export function input(type, name) {
    return element('input').type(type).name(name)
}

export function inputText(name) {
    return input('text', name)
}

export function inputHidden(name) {
    return input('hidden', name)
}

export function password(name) {
    return input('password', name)
}

export function checkbox(name) {
    return input('checkbox', name)
}

export function radio(name) {
    return input('radio', name)
}

export function submit(value) {
    return input('submit').value(value)
}

export function reset(value) {
    return input('reset').value(value)
}

export function select(name, ...content) {
    return element('select', ...content).name(name)
}

export function option(value) {
    return element('option').value(value)
}

export function label(forInput) {
    return element('label').set('for', forInput)
}

export function fieldset(...content) {
    return element('fieldset', ...content)
}

export function legend(...content) {
    return element('legend', ...content)
}

/**
 * Create new DOM Element 'dd' and wrap it with a builder.
 * @returns {ElementBuilder} New XBuilder instance.
 */
export function dd(...content) {
    return element('dd', ...content)
}

/**
 * Create new DOM Element 'dl' and wrap it with a builder.
 * @returns {ElementBuilder} New XBuilder instance.
 */
export function dl(...content) {
    return element('dl', ...content)
}

/**
 * Create new DOM Element 'dt' and wrap it with a builder.
 * @returns {ElementBuilder} New XBuilder instance.
 */
export function dt(...content) {
    return element('dt', ...content)
}

/**
 * Create new DOM Element 'dfn' and wrap it with a builder.
 * @returns {ElementBuilder} New XBuilder instance.
 */
export function dfn(...content) {
    return element('dfn', ...content)
}

/**
 * Create new DOM Element 'table' and wrap it with a builder.
 * @returns {ElementBuilder} New XBuilder instance.
 */
export function table(...content) {
    return element('table', ...content)
}

/**
 * Create new DOM Element 'tbody' and wrap it with a builder.
 * @returns {ElementBuilder} New XBuilder instance.
 */
export function tbody(...content) {
    return element('tbody', ...content)
}

/**
 * Create new DOM Element 'thead' and wrap it with a builder.
 * @returns {ElementBuilder} New XBuilder instance.
 */
export function thead(...content) {
    return element('thead', ...content)
}

/**
 * Create new DOM Element 'tfoot' and wrap it with a builder.
 * @returns {ElementBuilder} New XBuilder instance.
 */
export function tfoot(...content) {
    return element('tfoot', ...content)
}

/**
 * Create new DOM Element 'tr' and wrap it with a builder.
 * @returns {ElementBuilder} New XBuilder instance.
 */
export function tr(...content) {
    return element('tr', ...content)
}

/**
 * Create new DOM Element 'td' and wrap it with a builder.
 * @returns {ElementBuilder} New XBuilder instance.
 */
export function td(...content) {
    return element('td', ...content)
}

/**
 * Create new DOM Element 'th' and wrap it with a builder.
 * @returns {ElementBuilder} New XBuilder instance.
 */
export function th(...content) {
    return element('th', ...content)
}

/**
 * Create new DOM Element 'caption' and wrap it with a builder.
 * @returns {ElementBuilder} New XBuilder instance.
 */
export function caption(...content) {
    return element('caption', ...content)
}

export function captionTop(...content) {
    return caption(...content).captionSide('top')
}

export function captionBottom(...content) {
    return caption(...content).captionSide('bottom')
}

/**
 * Create new DOM Element 'sub' and wrap it with a builder.
 * @returns {ElementBuilder} New XBuilder instance.
 */
export function sub(...content) {
    return element('sub', ...content)
}

/**
 * Create new DOM Element 'sup' and wrap it with a builder.
 * @returns {ElementBuilder} New XBuilder instance.
 */
export function sup(...content) {
    return element('sup', ...content)
}

/**
 * Create new DOM Element 'details' and wrap it with a builder.
 * @returns {ElementBuilder} New XBuilder instance.
 */
export function details(...content) {
    return element('details', ...content)
}

/**
 * Create new DOM Element 'summary' and wrap it with a builder.
 * @returns {ElementBuilder} New XBuilder instance.
 */
export function summary(...content) {
    return element('summary', ...content)
}

/**
 * Create new DOM Element 'del' and wrap it with a builder.
 * @returns {ElementBuilder} New XBuilder instance.
 */
export function del(...content) {
    return element('del', ...content)
}

/**
 * Create new DOM Element 'ins' and wrap it with a builder.
 * @returns {ElementBuilder} New XBuilder instance.
 */
export function ins(...content) {
    return element('ins', ...content)
}

/**
 * Create new DOM Element 'hr' and wrap it with a builder.
 * @returns {ElementBuilder} New XBuilder instance.
 */
export function hr() {
    return element('hr')
}

/**
 * Create new DOM Element 'br' and wrap it with a builder.
 * @returns {ElementBuilder} New XBuilder instance.
 */
export function br() {
    return element('br')
}

export function q(...content) {
    return element('q', ...content)
}

export function blockquote(...content) {
    return element('blockquote', ...content)
}

export function address(...content) {
    return element('address', ...content)
}

export function cite(...content) {
    return element('cite', ...content)
}

export function iframe(...src) {
    return element('iframe').src(src)
}

export function dialog(title = div('dialog-close').position('absolute').top('inherit').right('inherit').add('x').onClick(event => event.target.parentNode.close())) {
    return element('dialog').add(title)
}

/**
 * Create new DOM Fragment with provided content and wrap it with a builder.
 * @returns {ElementBuilder} New XBuilder instance.
 */
export function fragment(...args) {
    return builder(document.createDocumentFragment()).add(...args)
}

export function flexRow(...args) {
    return div().display('flex').add(...args)
}

export function flexColumn(...args) {
    return div().display('flex').flexDirection('column').add(...args)
}

export function auto(...args) {
    return div().flex('auto').add(...args)
}

/**
 * Space with start and end boundary, which will be populated dynamically as reaction to model change, using its display
 * function.
 * On any change of the model, the space is re-rendered using the display function.
 * It can handle following situation.
 * If model value is an array, every item will be rendered using the display function and inserted into the space.
 * If model value is null, space stays empty.
 * Otherwise, the value itself is rendered using the display function.
 *
 * This function will always re-render all items newly on model change. That means, that any state in the previously
 * rendered item view may be lost.
 * For rendering, which re-uses previously rendered items, if they remain, see function `refresh()`.
 *
 * @param start Start element of the space.
 * @param model Model (state), driving the content.
 * @param itemDisplayFunction Function used to render an item. The function accepts the item value, and an index, and
 *        must return appendable content.
 * @param end Optional end element, which is used as an anchor of the space, so all rendered content is prepended before
 *        this element. If not provided, artificial empty text node is created for that purpose.
 * @returns {Content} Fragment builder.
 */
export function range(start, model, itemDisplayFunction = item => item, end = text()) {
    let f = dynamicFragment(start, end)
    model.observe(value => {
        f.clear();
        (Array.isArray(value) ? value : null === value ? [] : [value]).forEach((item, index) => f.add(itemDisplayFunction(item, index)))
    })
    return f
}

/**
 * Space which will be populated dynamically as reaction to model change, using its display function.
 * On any change of the model, the space is re-rendered using the display function.
 * It can handle following situation.
 * If model value is an array, every item will be rendered using the display function and inserted into the space.
 * If model value is null, space stays empty.
 * Otherwise, the value itself is rendered using the display function.
 *
 * This function will always re-render all items newly on model change. That means, that any state in the previously
 * rendered item view may be lost.
 * For rendering, which re-uses previously rendered items, if they remain, see function `refresh()`.
 *
 * @param model Model (state), driving the content.
 * @param itemDisplayFunction Function used to render an item. The function accepts the item value, and an index, and
 *        must return appendable content.
 * @param end Optional end element, which is used as an anchor of the space, so all rendered content is prepended before
 *        this element. If not provided, artificial empty text node is created for that purpose.
 * @returns {Content} Fragment builder.
 */
export function each(model, itemDisplayFunction = (item, index) => item, end = text()) {
    return range(text(), model, itemDisplayFunction, end)
}


export function produce(model, itemDisplayFunction = item => item, end = text()) {
    let f = dynamicFragment(text(), end)
    model.observe(item => f.add(item == null ? null : itemDisplayFunction(item)))
    return f
}
