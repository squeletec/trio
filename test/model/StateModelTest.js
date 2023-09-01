import {state} from "../../model/StateModel.js";
import {suite, assertEquals} from "../runner/test-runner.js";

suite({

    name: 'Tests of basic StateModel',

    initialStateShouldBeAvailable() {
        let model = state("A")
        assertEquals(model.get(), "A")
    },

    initialStateShouldBePassedToObserver() {
        let model = state("B")
        let target = null
        model.observe(value => target = value)
        assertEquals(target, "B")
    },

    initialStateShouldNotBePassedToObserverOfChanges() {
        let model = state("C")
        let target = null
        model.observeChanges(value => target = value)
        assertEquals(target, null)
    },

    stateShouldChangeOnSettingTheValue() {
        let model = state()
        assertEquals(model.get(), null)
        model.set("D")
        assertEquals(model.get(), "D")
    },

    changeShouldBePassedToObserver() {
        let model = state()
        let target = null
        model.observe(value => target = value)
        model.set("E")
        assertEquals(target, "E")
    },

    changeShouldBePassedToObserverOfChanges() {
        let model = state()
        let target = null
        model.observeChanges(value => target = value)
        model.set("F")
        assertEquals(target, "F")
    },

})
