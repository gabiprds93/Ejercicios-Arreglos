var assert = require("assert");

function ejercicio2(arr, patron)
{
    function validar(numCel)
    {
        var numCel = numCel.toString();
        if(numCel.slice(0,3) == patron || numCel.slice(-3) == patron)
            return true;
        return false;
    }
    var resultado = arr.filter(validar);  
    return resultado;
}

describe("Pruebas ejercicio 2", function(){
    it("Pruebas con [784123123, 355676784, 3423543554] y 784", function(){
        assert.deepEqual([784123123, 355676784], ejercicio2([784123123, 355676784, 3423543554], 784));
    });
    it("Pruebas con [784123123, 55676784] y 784", function(){
        assert.deepEqual([784123123, 55676784], ejercicio2([784123123, 55676784, 3423543554], 784));
    });
});