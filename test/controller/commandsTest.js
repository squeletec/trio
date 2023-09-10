import {suite, assertEquals} from "../runner/test-runner.js";
import {state} from "../../model/StateModel.js"
import {increment} from "../../controller/commands.js"

suite({

    name: "Controller tests",

    incrementCommand() {
        let counter = state(0)
        let command = increment(counter)
        assertEquals(counter.get(), 0)
        command()
        assertEquals(counter.get(), 1)
    }

})
