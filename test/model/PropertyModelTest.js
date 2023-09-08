import {state} from "../../model/StateModel.js";
import {suite, assertEquals} from "../runner/test-runner.js";
import {PropertyModel, stateProxy} from "../../model/PropertyModel.js";

suite({

    name: 'Tests of property model.',

    initialStateShouldBeTransformed() {
        let model = new PropertyModel(state({x: "r"}), "x")
        assertEquals(model.get(), "r")
    },

    initialStateShouldBeTransformedAndPassedToObserver() {
        let model = new PropertyModel(state({y: "s"}), "y")
        let target = null
        model.observe(value => target = value)
        assertEquals(target, "s")
    },

    initialStateShouldNotBePassedToObserverOfChanges() {
        let model = new PropertyModel(state({y: "t"}), "y")
        let target = null
        model.observeChanges(value => target = value)
        assertEquals(target, null)
    },

    stateShouldChangeOnSettingTheValueOnOriginalModel() {
        let model = state({z: "u"})
        let transformedModel = new PropertyModel(model, "z")
        assertEquals(transformedModel.get(), "u")
        model.set({z: "v"})
        assertEquals(transformedModel.get(), "v")
    },

    changeShouldBePassedToObserver() {
        let model = state({z: "w"})
        let transformedModel = new PropertyModel(model, "z")
        let target = null
        transformedModel.observe(value => target = value)
        model.set({z: "x"})
        assertEquals(target, "x")
    },

    changeShouldBePassedToObserverOfChanges() {
        let model = state({z: "w"})
        let transformedModel = new PropertyModel(model, "z")
        let target = null
        transformedModel.observeChanges(value => target = value)
        model.set({z: "y"})
        assertEquals(target, "y")
    },

    proxyShouldAutoCreatePropertyModel() {
        let model = stateProxy({a: 1})
        model.a.set(3)
        assertEquals(model.get().a, 3)
    }

})
