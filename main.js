let usuario = prompt("Ingresar nombre");
alert("Bienvenid@ " + usuario);
const ingresos = ["fuenteIngresoUno", "fuenteIngresoDos"]
const gastos = ["calcularAhorroMensual", "gastoAlquiler", "gastoTransporte", "gastoTarjetaUno", "gastoTarjetaDos", "segurosContratados", "luzAgua", "gastoTelefonia", "gastoInternet", "gastoCursos"]
function introduccion(){
    let continuar = confirm("A continuación se le van a pedir datos personales sobre ingresos y gastos mensuales, desea continuar?")
        if (!continuar) {
            alert (usuario + " necesitamos su confirmacion para continuar")
        }else {
            let fuenteIngresoUno = parseFloat(prompt ("Ingresar fuente de ingresos principal (en valores)"))
            console.log ("Ingreso principal:", fuenteIngresoUno)
            let fuenteIngresoDos = parseFloat(prompt ("Ingresar fuente de ingresos secundaria (en valores)"))
            console.log ("Ingreso secundario:", fuenteIngresoDos)
            const sumar = (ingreso1, ingreso2) => ingreso1 + ingreso2
            let totalIngresos = sumar(fuenteIngresoUno, fuenteIngresoDos)
            console.log("Total de ingresos:", totalIngresos)
            alert("El total de tus ingresos es: " + totalIngresos)
            const calcularAhorroMensual = (totalIngresos) => totalIngresos * 0.1
            let ahorroMensual = calcularAhorroMensual(totalIngresos)
            console.log("Ahorros mensuales:", ahorroMensual)
            let gastoAlquiler = parseFloat(prompt ("Cuanto gastas en alquiler, incluyendo gastos comunes (en valores)"))
            console.log ("Gasto alquiler:", gastoAlquiler)
            let gastoTransporte = parseFloat(prompt ("Cuanto gastas en transporte (en valores)"))
            console.log ("Gasto transporte:", gastoTransporte)
            let gastoTarjetaUno = parseFloat(prompt ("Ingresar monto de tarjeta de credito principal (en valores)"))
            console.log ("Gasto tarjeta de credito principal:", gastoTarjetaUno)
            let gastoTarjetaDos = parseFloat(prompt ("Ingresar monto de tarjeta de credito secundaria (en valores)"))
            console.log ("Gasto tarjeta de credito secundaria:", gastoTarjetaDos)
            let segurosContratados = parseFloat(prompt ("Tenes seguros contratados? (en valores)"))
            console.log ("Seguros contratados:", segurosContratados)
            let luzAgua = parseFloat(prompt ("Cuanto gastas en luz y agua (en valores)"))
            console.log ("Gasto en luz y agua:", luzAgua)
            let gastoTelefonia = parseFloat(prompt ("Cuanto gastas en telefonia (en valores)"))
            console.log ("Gasto telefonia:", gastoTelefonia)
            let gastoInternet = parseFloat(prompt ("Cuanto gastas en internet al mes (en valores)"))
            console.log ("Gasto internet:", gastoInternet)
            let gastoCursos = parseFloat(prompt ("Cuanto invertis en educacion al mes? (en valores)"))
            console.log ("Gastos en educacion:", gastoCursos)
            const restar = (gasto1, gasto2, gasto3, gasto4, gasto5, gasto6, gasto7, gasto8, gasto9, gasto10) => gasto1 + gasto2 + gasto3 + gasto4 + gasto5 + gasto6 + gasto7 + gasto8 + gasto9 + gasto10
            let totalGastos = restar(ahorroMensual, gastoAlquiler, gastoTransporte, gastoTarjetaUno, gastoTarjetaDos, segurosContratados, luzAgua, gastoTelefonia, gastoInternet, gastoCursos)
            console.log("Total de Gastos:", totalGastos)
            alert("El total de tus gastos es: " + totalGastos)
            const resultadoFinal = (ingresototal, gastototal) => ingresototal - gastototal
            let libreDisponibilidad = resultadoFinal(totalIngresos, totalGastos)
            console.log("Libre Disponibilidad:", libreDisponibilidad)
        }
}
introduccion()
