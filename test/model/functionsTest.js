import {suite, assertEquals} from "../runner/test-runner.js";
import {state} from "../../model/StateModel.js";
import {concat, usingTemplate, usingUriTemplate} from "../../model/functions.js";

suite({

    name: "Reactive functions tests.",

    concatTest() {
        let i1 = state("A")
        let i2 = state("B")
        let r = concat(i1, ":", i2)
        assertEquals(r.get(), "A:B")
        i1.set("C")
        assertEquals(r.get(), "C:B")
    },

    templateTest() {
        let f = usingTemplate("a/{b}/c/{a}/{b}/d")
        assertEquals(f({a: "y", b: "x"}), "a/x/c/y/x/d")
    },

    templateUriTest() {
        let f = usingUriTemplate("a/{b}/b")
        assertEquals(f({a: "y", b: "x"}), "a/x/b?a=y")
    }

})