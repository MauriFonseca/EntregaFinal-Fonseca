let usuario = prompt("Ingresar nombre");
alert("Bienvenid@ " + usuario);
function introduccion(){
    let continuar = confirm("A continuación se le van a pedir datos personales sobre ingresos y gastos mensuales, desea continuar?")
    if (!continuar) {
        alert (usuario + ", necesitamos su confirmacion para continuar")
        return false
    }else {
        alert ("Perfecto continuemos " + usuario)
        return true
    }    
}
if (!introduccion()) {
    throw new Error("El usuario ha detenido el proceso")
}
function obtenerIngreso(mensaje) {
    let ingreso
    do {
        ingreso = parseFloat(prompt(mensaje))
        if (isNaN(ingreso) || ingreso < 0) {
            alert("Ingresar datos en valores")
        }
    } while (isNaN(ingreso) || ingreso < 0)
    return ingreso
}
let fuenteIngresoUno = obtenerIngreso("Ingresar fuente de ingresos principal (en valores):")
console.log("Ingreso principal:", fuenteIngresoUno)
let fuenteIngresoDos = obtenerIngreso("Ingresar fuente de ingresos secundaria (en valores):")
console.log("Ingreso secundario:", fuenteIngresoDos)
const sumar = (ingreso1, ingreso2) => ingreso1 + ingreso2
let totalIngresos = sumar(fuenteIngresoUno, fuenteIngresoDos)
console.log("Total de ingresos:", totalIngresos)
alert("El total de tus ingresos es: " + totalIngresos)
function obtenerGasto(mensaje) {
    let gasto
    do {
        gasto = parseFloat(prompt(mensaje))
        if (isNaN(gasto) || gasto < 0) {
            alert("Ingresar datos en valores")
        }
    } while (isNaN(gasto) || gasto < 0)
    return gasto
}
const calcularAhorroMensual = (totalIngresos) => totalIngresos * 0.1
let ahorroMensual = calcularAhorroMensual(totalIngresos)
console.log("Ahorros mensuales:", ahorroMensual)
alert("Usted deberia fijar su meta de ahorro mensual en: " + ahorroMensual)
let detallesGastos = [
    obtenerGasto("Cuánto gastas en alquiler (en valores):"),
    obtenerGasto("Cuánto gastas en transporte (en valores):"),
    obtenerGasto("Monto de tarjeta de crédito principal (en valores):"),
    obtenerGasto("Monto de tarjeta de crédito secundaria (en valores):"),
    obtenerGasto("Cuánto gastas en seguros contratados (en valores):"),
    obtenerGasto("Cuánto gastas en luz y agua (en valores):"),
    obtenerGasto("Cuánto gastas en telefonía (en valores):"),
    obtenerGasto("Cuánto gastas en internet (en valores):"),
    obtenerGasto("Cuánto invertís en educación al mes (en valores):"),
]
detallesGastos.push(ahorroMensual)
const sumarGastos = (array) => array.reduce((acc, val) => acc + val, 0)
let totalGastos = sumarGastos (detallesGastos)
console.log("Total de gastos:", totalGastos)
alert("El total de tus gastos es: " + totalGastos)
const resultadoFinal = (ingresoTotal, gastoTotal) => ingresoTotal - gastoTotal
let libreDisponibilidad = resultadoFinal(totalIngresos, totalGastos)
console.log("Libre Disponibilidad:", libreDisponibilidad)
alert("Tu monto de libre disponibilidad es: " + libreDisponibilidad)