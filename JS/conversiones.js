// 1. Declara tus datos personales 
const nombre = "Kevin"; 
const apellido = "Ortiz"; 
const edad = 18; 
const ciudad = "Cúcuta"; 
const programa = "Analisis y Desarrollo de Software";
const ficha = "3406234";
const jornada = "Diurna";
const semestre = "Primero";
let estudiante = true; 


// 2. Imprime una tarjeta personal en consola 
console.log("=== TARJETA PERSONAL ==="); 
console.log(`Nombre: ${nombre} ${apellido}`); 
console.log(`Edad: ${edad} años`); 
console.log(`Ciudad: ${ciudad}`); 
console.log(`Programa: ${programa}`); 
console.log(`Ficha: ${ficha}`); 
console.log(`Jornada: ${jornada}`); 
console.log(`Semestre: ${semestre}`); 
console.log(`¿Es estudiante?: ${estudiante}`); 

// 3. Calcula el año de nacimiento aproximado 
const anioActual = 2026; 
const anioNacimiento = anioActual - edad; 
console.log(`Año aproximado de nacimiento: ${anioNacimiento}`); 