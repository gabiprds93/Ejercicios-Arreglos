var assert = require("assert");
var arr = [20, 21, 16, 88, 77, 6];
var fecha = new Date();
var anio = fecha.getFullYear();
var resultado = [];
function paresMayores18(num)
{
    if(num > 18)
    {
        if(num % 2 == 0)
            resultado.push(anio - num);
    }
}
arr.forEach(paresMayores18);
describe("Pruebas ejercicio 7", function(){
    it("Año de nacimiento de 20 que es par mayor de 18 debe dar 1997", function(){
        assert.equal(1997, resultado[0]);
    });
});