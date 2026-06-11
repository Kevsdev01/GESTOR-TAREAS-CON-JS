//Funciones
    
function calcularIMC() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value) / 100;

    var imc = peso / (altura * altura);

    document.getElementById("resultado").innerHTML =
        "Resultado: " + imc.toFixed(2);

    var categoria;

    if (imc < 18.5) {
        categoria = "Bajo peso";
    } else if (imc < 25) {
        categoria = "Peso normal";
    } else if (imc < 30) {
        categoria = "Sobrepeso";
    } else {
        categoria = "Obesidad";
    }

    document.getElementById("categoria").innerHTML =
        "Categoría: " + categoria;
}