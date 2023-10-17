import {a, body, div, span, flexRow, state, toggle, ul, li} from "../../view/html.js";

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
            a('☰').setClass('menu').onClick(toggle(menuDisplayed)).add(ul(
                ...pages.map(url => li(a(url).href(url)))
            )).display(menuDisplayed)),
            a('Previous').href(pages[index - 1]),
            span('TRIO Guide: Chapter ', index + 1).auto().textCenter(),
            a('Next').href(pages[index + 1])
        ).setClass('header'),
        ...content
    )
}
