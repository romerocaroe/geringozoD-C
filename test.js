const geringozo = require('./index.js')
const assert = require('assert')

describe('geringozo challenge', () => {

    /**
     * TEST 1
     */
    it('Test-1: "hola" should return "hopolapa"', () => {

        let result = geringozo("hola")
        let expected = "hopolapa"

        assert.strictEqual(result,expected)
    })

    /**
     * TEST 2
     */
    it('Test-2:"¿como estas?" should return "¿copomopo epestapas?"', () => {
        let result = geringozo("¿como estas?")
        let expected =  "¿copomopo epestapas?"

        assert.strictEqual(result,expected)
    })

    /**
     * TEST 3
     */
    it('Test-3:"estoy bien ¿y vos?" should return "epestopoy bipiepen ¿y vopos?"', () => {
        let result = geringozo("estoy bien ¿y vos?")
        let expected = "epestopoy bipiepen ¿y vopos?"

        assert.strictEqual(result,expected)
    })

    /**
     * TEST 4
     */
    it('Test-4: "a todo ritmo" should return "apa topodopo ripitmopo"', () => {
        let result = geringozo("a todo ritmo")
        let expected = "apa topodopo ripitmopo"

        assert.strictEqual(result,expected)
    })

    /**
     * TEST 5
     */
    it('Test-5: "quiero queso" should return "quipieperopo quepesopo"', () => {
        let result = geringozo("quiero queso")
        let expected = "quipieperopo quepesopo"

        assert.strictEqual(result,expected)
    })

})
