import {assertEquals, suite} from "../runner/test-runner.js";
import {updatesOnly} from "../../model/UpdatingModel.js";
import {state} from "../../model/StateModel.js";
import {increment} from "../../controller/commands.js";
import {stateProxy} from "../../model/PropertyModel.js";

suite({

    name: "Suppressed identical changes tests",

    updatingModelOnStateShouldNotReactOnSettingTheSameValueAsActual() {
        testImpl(state("A"))
    },

    updatingModelOnPropertyShouldNotReactOnSettingTheSameValueAsActual() {
        testImpl(stateProxy({x: "A"}).x)
    },

})


function testImpl(model) {
    let wrappedCounter = state(0)
    let wrapped  = updatesOnly(model).observeChanges(increment(wrappedCounter))
    assertEquals(wrappedCounter.get(), 0)
    wrapped.set("A")
    assertEquals(wrappedCounter.get(), 0)
    wrapped.set("B")
    assertEquals(wrappedCounter.get(), 1)

}
