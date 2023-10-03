import {suite, assertEquals, untilLoaded} from "../runner/test-runner.js";
import {getChannel} from "../../model/GetChannel.js";

suite({

    name: "GET Channel tests.",

    async testGetTrigger() {
        let link = getChannel("model/data/input.json")
        await untilLoaded(link)
        assertEquals(link.get().a, "x")
    }

})
