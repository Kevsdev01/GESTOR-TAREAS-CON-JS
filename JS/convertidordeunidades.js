
// FUNCIONES DE CONVERSIÓN


function convertirMetrosAPies(metros) {
    return metros * 3.28084;
}

function convertirCelsiusAFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function convertirKilometrosAMillas(kilometros) {
    return kilometros * 0.621371;
}

function convertirLitrosAGalones(litros) {
    return litros * 0.264172;
}

function convertirKilogramosALibras(kilogramos) {
    return kilogramos * 2.20462;
}

function convertirHorasAMinutos(horas) {
    return horas * 60;
}

function convertirDiasASemanas(dias) {
    return dias / 7;
}


// FUNCIONES PARA MOSTRAR


function mostrarPies() {
    let metros = Number(document.getElementById("metros").value);

    let pies = convertirMetrosAPies(metros);

    document.getElementById("resultado").textContent =
        `Resultado: ${pies.toFixed(2)} pies`;
}

function mostrarFahrenheit() {
    let celsius = Number(document.getElementById("celsius").value);

    let fahrenheit = convertirCelsiusAFahrenheit(celsius);

    document.getElementById("resultado2").textContent =
        `Resultado: ${fahrenheit.toFixed(2)} °F`;
}

function mostrarMillas() {
    let kilometros = Number(document.getElementById("kilometros").value);

    let millas = convertirKilometrosAMillas(kilometros);

    document.getElementById("resultado3").textContent =
        `Resultado: ${millas.toFixed(2)} millas`;
}

function mostrarGalones() {
    let litros = Number(document.getElementById("litros").value);

    let galones = convertirLitrosAGalones(litros);

    document.getElementById("resultado4").textContent =
        `Resultado: ${galones.toFixed(2)} galones`;
}

function mostrarLibras() {
    let kilogramos = Number(document.getElementById("kilogramos").value);

    let libras = convertirKilogramosALibras(kilogramos);

    document.getElementById("resultado5").textContent =
        `Resultado: ${libras.toFixed(2)} libras`;
}

function mostrarMinutos() {
    let horas = Number(document.getElementById("horas").value);

    let minutos = convertirHorasAMinutos(horas);

    document.getElementById("resultado6").textContent =
        `Resultado: ${minutos.toFixed(2)} minutos`;
}

function mostrarSemanas() {
    let dias = Number(document.getElementById("dias").value);

    let semanas = convertirDiasASemanas(dias);

    document.getElementById("resultado7").textContent =
        `Resultado: ${semanas.toFixed(2)} semanas`;
}