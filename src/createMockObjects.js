import {File} from "./File.js"
import {XMLHttpRequestMock} from "./XMLHttpRequestMock.js"


/**
 * Setup mock objects for unit tests
 * @param type   local|remote
 */
function createMockObjects() {

    // This function might be called multiple times from independent tests, only create the mock objects once.
    if(typeof global.File === "undefined") {
        global.File = File;
        global.XMLHttpRequest = XMLHttpRequestMock;
        global.navigator = {
            userAgent: "Node",
            vendor: "Node"
        }
    }
}

export {createMockObjects};

