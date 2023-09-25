import {suite, assertEquals, assertTrue} from "../runner/test-runner.js";
import {state} from "../../model/StateModel.js";
import {div, each, produce} from "../../view/html.js";

suite({
    name: "HTML factory tests.",

    eachTest() {
        let model = state(["A", "B"])
        let content = div(each(model, (value, index) => div(index, ': ', value)))
        assertEquals(content.get().childElementCount, 2)
    },

    produceTest() {
        let model = state()
        let content = div(produce(model, (value, index) => div(index, ': ', value)))
        assertEquals(content.get().childElementCount, 0)
        model.set("A")
        assertEquals(content.get().childElementCount, 1)
        model.set("B")
        assertEquals(content.get().childElementCount, 2)
    }
})
