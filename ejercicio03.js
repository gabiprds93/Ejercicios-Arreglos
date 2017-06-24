var assert = require("assert");
var validos = 7;
var arr = [7, 21, 44, 80, 77, 35];
var resultado = [];
function multiplos(num)
{
    if(num % validos == 0)
        resultado.push(num);
}
arr.forEach(multiplos);
describe("Pruebas ejercicio 3", function(){
    it("7 es multiplo de 7 debe dar 7", function(){
        assert.equal(7, resultado[0]);
    });
});