import {state} from "../../model/StateModel.js";
import {suite, assertEquals} from "../runner/test-runner.js";
import {transform} from "../../model/ObservableTransformer.js";

suite({

    name: 'Tests of observable transformation.',

    initialStateShouldBeTransformed() {
        let model = transform(state("A"), v => v.length)
        assertEquals(model.get(), 1)
    },

    initialStateShouldBeTransformedAndPassedToObserver() {
        let model = transform(state("AA"), v => v.length)
        let target = null
        model.observe(value => target = value)
        assertEquals(target, 2)
    },

    initialStateShouldNotBePassedToObserverOfChanges() {
        let model = transform(state("AAA"), v => v.length)
        let target = null
        model.observeChanges(value => target = value)
        assertEquals(target, null)
    },

    stateShouldChangeOnSettingTheValueOnOriginalModel() {
        let model = state("A")
        let transformedModel = transform(model, v => v.length)
        assertEquals(transformedModel.get(), 1)
        model.set("AAAA")
        assertEquals(transformedModel.get(), 4)
    },

    changeShouldBePassedToObserver() {
        let model = state("A")
        let transformedModel = transform(model, v => v.length)
        let target = null
        transformedModel.observe(value => target = value)
        model.set("AAAAA")
        assertEquals(target, 5)
    },

    changeShouldBePassedToObserverOfChanges() {
        let model = state("A")
        let transformedModel = transform(model, v => v.length)
        let target = null
        transformedModel.observeChanges(value => target = value)
        model.set("AAAAAA")
        assertEquals(target, 6)
    },

})
