import {suite, assertEquals} from "../runner/test-runner.js";
import {getChannel} from "../../model/GetChannel.js";

suite({

    name: "GET Channel tests.",

    testGetTrigger() {
        let link = getChannel("data/input.json").trigger()
        assertEquals(link.get().a, "x")
    }

})
