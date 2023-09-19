export function suite(definition, reporter = domReporter()) {

    let errors = []
    reporter.suiteStart(definition)

    Object.entries(definition)
        .filter(([name, value]) => typeof value === 'function')
        .flatMap(([name, test]) => useData(name, test))
        .forEach(([name, test]) => {
            reporter.testStart(name, test)
            try {
                test()
                reporter.testPassed()
            } catch (error) {
                reporter.testFailed(error)
                errors.push(error)
            }
    })

    if(errors.length > 0) reporter.suiteFailed(errors)
    else reporter.suitePassed()

}

function useData(name, test) {
    if(test.data) {
        return (Array.isArray(test.data) ? test.data : test.data()).map((args, i) => [name + '.' + i, () => test(...args)])
    }
    return [[name, test]]
}

export function withData(test, data) {
    test.data = data
}

export function assertTrue(expression, errorMessage = "Expected evaluate to true, but was false.") {
    if(!expression) {
        assertEquals.reporter.assertionFailed(false, true)
        throw new Error(errorMessage)
    }
    assertEquals.reporter.assertionPassed(true, true)
}

export function assertEquals(actual, expected) {
    if(actual !== expected) {
        assertEquals.reporter.assertionFailed(actual, expected)
        throw new Error("Expected: <" + expected + ">, but was <" + actual + ">")
    }
    assertEquals.reporter.assertionPassed(actual, expected)
}

assertEquals.reporter = {
    assertionFailed() {},
    assertionPassed() {}
}

export function assertState(state, expectedValue) {
    return assertEquals(state.get(), expectedValue)
}

export function domReporter() {
    let reportTable = document.body.appendChild(document.createElement('table'))
    let reportHead = reportTable.appendChild(document.createElement('thead'))
    let reportItems = reportTable.appendChild(document.createElement('tbody'))
    let headRow = null
    let currentTest = null

    function element(type, content) {
        let cell = document.createElement(type)
        cell.appendChild(document.createTextNode(content))
        return cell
    }

    function nameCell(name) {
        return element('th', name)
    }

    function startCell() {
        return element('td', new Date().toISOString().substring(0, 23).replace("T", " "))
    }

    function detail(data) {
        return element('pre', data)
    }

    return {
        suiteStart(definition) {
            headRow = reportHead.appendChild(document.createElement('tr'))
            headRow.appendChild(nameCell(definition.name || 'DefaultSuite'))
            headRow.appendChild(startCell())
        },

        suitePassed() {
            headRow.appendChild(element('td', 'passed')).setAttribute('class', 'passed')
        },

        suiteFailed(errors) {
            headRow.appendChild(element('td', errors.length + ' tests failed')).setAttribute('class', 'failed')
        },

        testStart(name, func) {
            currentTest = reportItems.appendChild(document.createElement('tr'))
            currentTest.appendChild(nameCell(name)).appendChild(detail(func)).setAttribute('class', 'left')
            currentTest.appendChild(startCell())
        },

        testPassed() {
            currentTest.appendChild(element('td', 'passed')).setAttribute('class', 'passed')
        },

        testFailed(error) {
            let result = currentTest.appendChild(element('td', error.message))
            result.setAttribute('class', 'failed')
            result.appendChild(detail(error.stack)).setAttribute('class', 'right')
            console.error(error)
        }

    }

}

window.onerror = function (event, source, lineno, colno, error) {
    let errorPane = document.body.appendChild(document.createElement('div'))
    errorPane.setAttribute('class', 'unexpected-error')
    errorPane.appendChild(renderError(error))
}

function renderError(e) {
    let pane = document.createElement('div')
    pane.appendChild(document.createElement('h4')).appendChild(document.createTextNode(e.message))
    pane.appendChild(document.createElement('pre')).appendChild(document.createTextNode(e.stack))
    if(e.cause) pane.appendChild(renderError(e.cause))
    return pane
}
