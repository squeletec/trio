import {a, body, div, flexRow} from "../../view/html.js";

let pages = [
    "index.html",
    "form.html",
    "channel.html"
]

export function page(...content) {
    let currentPage = document.location.pathname.replace(/.*\//, "").replace(/\?.*/, "")
    let index = pages.indexOf(currentPage)
    body(
        flexRow(
            div('☰').setClass('menu'),
            div(a('Previous').href(pages[index - 1])),
            div('TRIO Guide: Chapter 1').auto().textCenter(),
            div(a('Next').href(pages[index + 1]))
        ).setClass('header'),
        ...content
    )
}
