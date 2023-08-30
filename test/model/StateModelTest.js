import {state} from "../../model/StateModel.js";
import {suite, assertThat} from "../runner/test-runner.js";

suite({

    name: 'Tests of basic StateModel',

    initialStateShouldBeAvailable() {
        let model = state("A")
        assertThat(model.get(), "A")
    },

    initialStateShouldBePassedToObserver() {
        let model = state("B")
        let target = null
        model.observe(value => target = value)
        assertThat(target, "B")
    },

    initialStateShouldNotBePassedToObserverOfChanges() {
        let model = state("C")
        let target = null
        model.observeChanges(value => target = value)
        assertThat(target, null)
    },

    stateShouldChangeOnSettingTheValue() {
        let model = state()
        assertThat(model.get(), null)
        model.set("D")
        assertThat(model.get(), "D")
    },

    changeShouldBePassedToObserver() {
        let model = state()
        let target = null
        model.observe(value => target = value)
        model.set("E")
        assertThat(target, "E")
    },

    changeShouldBePassedToObserverOfChanges() {
        let model = state()
        let target = null
        model.observeChanges(value => target = value)
        model.set("F")
        assertThat(target, "F")
    },

})
