import {state, toggle, div} from "../trio.js";

export function menu(item, popup) {
    let displayed = state(false)
    displayed.observeChanges(value => value || popup.openedItem?.set(false))
    let m = div(item.onClick(toggle(displayed)), popup.display(displayed).position('absolute').setClass('trio-ui-popup')).position('relative').setClass('trio-ui-menu')
    m.popupDisplayed = displayed
    return m
}

export function menuPopup(...content) {
    let p = div(...content)
    p.openedItem = null
    content.forEach(item => {
        item.popupDisplayed && item.popupDisplayed.observe(value => {
            if(value) {
                p.openedItem && p.openedItem.set(false)
                p.openedItem = item.popupDisplayed
            } else {
                p.openedItem = null
            }
        })
    })
    return p
}

export function subMenu(item, popup) {
    return menu(item, popup.top('0').left('100%'))
}