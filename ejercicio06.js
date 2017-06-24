var assert = require("assert");
var arr = [1, 2, 3, 4];
function multiplicar(num1, num2)
{
    return num1 * num2;
}
var resultado = arr.reduce(multiplicar);
describe("Pruebas ejercicio 6", function(){
    it("multiplicar 1 * 2 * 3 * 4 debe dar 24", function(){
        assert.equal(24, resultado);
    });
});