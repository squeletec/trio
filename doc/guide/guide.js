import {a, body, div, flexRow, span} from "../../view/html.js";

let pages = [
    "index.html",
    "channel.html"
]

export function page(...content) {
    let currentPage = pages.indexOf(document.location.pathname.substring(document.location.pathname.lastIndexOf('/')))
    body(
        flexRow(
            div(a('Previous').href()),
            div(span('☰').setClass('menu'), 'TRIO MVC Guide: Chapter 1').auto().textCenter(),
            div(a('Next').href())
        ).setClass('header'),
        ...content
    )
}
