var assert = require("assert");
var num = 9;
var arr = [4, 4, 5, 12];
function celsiusToFahrenheit(celsius)
{
    return (9/5 * celsius) + 32;
}
var resultado = arr.map(celsiusToFahrenheit);
describe("Pruebas ejercicio 5", function(){
    it("4°Celsius a Fahrenheit debe dar 39.2", function(){
        assert.equal(39.2, resultado[0]);
    });
});