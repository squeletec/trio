import {suite, assertEquals} from "../runner/test-runner.js";
import {fromJson, fromText} from "../../model/Channel.js";

suite({

    name: "Channel tests.",

    fromJsonTest() {
        assertEquals(fromJson({responseText: '{"a":1}'}).get().a, 1)
    },

    fromTextTest() {
        assertEquals(fromText({responseText: 'AAA'}).get(), "AAA")
    }

})