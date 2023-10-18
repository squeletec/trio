import {a, body, div, span, flexRow, state, toggle, ul, li} from "../../trio.js";
import {menu} from "../../ui/Menu.js";

let pages = [
    "index.html",
    "dialog.html",
    "form.html",
    "channel.html"
]

export function page(...content) {
    let currentPage = document.location.pathname.replace(/.*\//, "").replace(/\?.*/, "")
    let index = pages.indexOf(currentPage)
    let menuDisplayed = state(false)
    
    body(
        flexRow(
            menu('☰').setClass('menu').popup(
                ...pages.map(url => div(a(url).href(url)))
            ),
            a('Previous').href(pages[index - 1]),
            span('TRIO Guide: Chapter ', index + 1).auto().textCenter(),
            a('Next').href(pages[index + 1])
        ).setClass('header'),
        ...content
    )
}
