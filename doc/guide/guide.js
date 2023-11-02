import {a, body, div, span, flexRow} from "../../trio.js";
import {menu} from "../../ui/menu.js";

let pages = [
    "index.html",
    "dialog.html",
    "form.html",
    "menu.html",
    "channel.html",
    "table.html",
    "tree.html"
]

export function page(...content) {
    let currentPage = document.location.pathname.replace(/.*\//, "").replace(/\?.*/, "")
    let index = pages.indexOf(currentPage)

    body(
        flexRow(
            menu(a('☰'), div(...pages.map(url => div(a(url).href(url))))),
            a('Previous').href(pages[index - 1]),
            span('TRIO Guide: Chapter ', index + 1).auto().textCenter(),
            a('Next').href(pages[index + 1])
        ).setClass('header'),
        ...content
    )
}
