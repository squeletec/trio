import {suite, assertEquals, assertTrue} from "../runner/test-runner.js";
import {content, node} from "../../view/Content.js";

suite({
    name: "Basic content and auto-conversion tests.",

    autoCreateNodeForString() {
        let d = node("A")
        assertTrue(d instanceof Text)
        assertEquals(d.nodeValue, "A")
    },

    autoCreateNodeForNumber() {
        let d = node(1)
        assertTrue(d instanceof Text)
        assertEquals(d.nodeValue, "1")
    },

    autoCreateNodeForObject() {
        let d = node({a:"3"})
        assertTrue(d instanceof Text)
        assertEquals(d.nodeValue, "[object Object]")
    },

    passThroughNode() {
        let n = document.createElement("div")
        let d = node(n)
        assertEquals(d, n)
    },

    getNodeOfContent() {
        let n = document.createElement("div")
        let c = content(n)
        let d = node(c)
        assertEquals(d, n)
    },

})
