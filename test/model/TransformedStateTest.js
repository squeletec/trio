import {assertEquals, suite} from "../runner/test-runner.js";
import {TransformedState} from "../../model/TransformedState.js";

suite({

    name: "Transformed state tests",

    stateShouldBeTransformedUsingProvidedFunction() {
        let model = new TransformedState(v => v * 2, 3)
        assertEquals(model.get(), 6)
    },

    newValueShouldBeTransformedUsingProvidedFunction() {
        let model = new TransformedState(v => v * 2, 3)
        model.set(5)
        assertEquals(model.get(), 10)
    }

})