import {a, body, div, flexRow} from "../../view/html.js";

let pages = [
    "index.html",
    "dialog.html",
    "form.html",
    "channel.html"
]

export function page(...content) {
    let currentPage = document.location.pathname.replace(/.*\//, "").replace(/\?.*/, "")
    let index = pages.indexOf(currentPage)
    body(
        flexRow(
            a('☰').setClass('menu'),
            a('Previous').href(pages[index - 1]),
            span('TRIO Guide: Chapter ', index + 1).auto().textCenter(),
            a('Next').href(pages[index + 1])
        ).setClass('header'),
        ...content
    )
}
