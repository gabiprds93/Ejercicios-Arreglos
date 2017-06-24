var assert = require("assert");
var arr = [2, 5, 7, 2, 3, 8, 10];
function mapear(num)
{
    return num * 2 + 1;
}
var resultado = arr.map(mapear);
describe("Pruebas ejercicio 4", function(){
    it("2 * 2 + 1 debe dar 5", function(){
        assert.equal(5, resultado[0]);
    });
});