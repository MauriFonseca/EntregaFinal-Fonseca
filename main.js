//INGRESOS
const ingresos = ["Fuente ingreso 1", "Fuente ingreso 2", "Suma ingresos"]
const listaDesordenada = document.querySelector("ul")
const elementoIngresos = []
const inputsFuente1 = []
const inputsFuente2 = []
const inputsSuma = []
ingresos.forEach ((ingreso, index) => {
    const ingresoPresupuesto = document.createElement ("li")
    ingresoPresupuesto.innerText = ingreso
    const contenedorInputs = document.createElement("div")
    for (let i = 0; i < 12; i++) {
        const inputTexto = document.createElement("input")
        inputTexto.type = "number"
        if (index === 0) {
            inputsFuente1.push(inputTexto);
          } else if (index === 1) {
            inputsFuente2.push(inputTexto);
          } else if (index === 2) {
            inputTexto.readOnly = true
            inputsSuma.push(inputTexto)
          }
    contenedorInputs.appendChild(inputTexto)
    }
    ingresoPresupuesto.appendChild(contenedorInputs)
    elementoIngresos.push(ingresoPresupuesto) 
})
elementoIngresos.forEach((el) => {
    listaDesordenada.appendChild(el)
})
function calcularSuma() {
    for (let i = 0; i < 12; i++) {
      const valorFuente1 = parseFloat(inputsFuente1[i].value) || 0
      const valorFuente2 = parseFloat(inputsFuente2[i].value) || 0
      const suma = valorFuente1 + valorFuente2
      inputsSuma[i].value = suma
    }
  }
  inputsFuente1.forEach((input) => {
    input.addEventListener("input", calcularSuma)
  })
  inputsFuente2.forEach((input) => {
    input.addEventListener("input", calcularSuma)
  })

//GASTOS
  const gastos = ["Ahorro mensual", "Alquiler", "Transporte", "Tarjeta de crédito principal", "Tarjeta de crédito secundaria", "Seguros contratados", "Luz y agua", "Telefonía", "Internet", "Educación", "Suma Gastos"]
  const listaDesordenadaDos = document.querySelector("ul")
  const elementoGastos = []
  const inputsGastos = []
  const inputsSumaDos = []
  gastos.forEach ((gasto, index) => {
      const gastoPresupuesto = document.createElement ("li")
      gastoPresupuesto.innerText = gasto
      const contenedorInputsDos = document.createElement("div")
      for (let i = 0; i < 12; i++) {
          const inputTexto = document.createElement("input")
          inputTexto.type = "number"
          if (index === gastos.length - 1) {
            inputTexto.readOnly = true
            inputsSumaDos.push(inputTexto)
            } else {
            if (!inputsGastos[index]) {
                inputsGastos[index] = []
                }
            inputsGastos[index].push(inputTexto) 
            }   
        contenedorInputsDos.appendChild(inputTexto)
      }
      gastoPresupuesto.appendChild(contenedorInputsDos);
      elementoGastos.push(gastoPresupuesto) 
  })
  elementoGastos.forEach((el) => {
    listaDesordenadaDos.appendChild(el)
  })
  function calcularSumaDos() {
    for (let i = 0; i < 12; i++) {
      let sumaDos = 0
      inputsGastos.forEach((inputArray) => {
        const valorGasto = parseFloat(inputArray[i].value) || 0
        sumaDos += valorGasto
      });
      inputsSumaDos[i].value = sumaDos
    }
  }
inputsGastos.forEach((inputArray) => {
    inputArray.forEach((input) => {
      input.addEventListener("input", calcularSumaDos)
    })
  })
const inputTextField = document.getElementById ("identificacionUsuario")
const boton = document.getElementById('inicio');
inputTextField.addEventListener("change", function(){
    boton.style.backgroundColor = "#13e813";
})
listaDesordenadaTres.append(...elementoMeses)






















/* const listaMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"]
const listaDesordenadaTres = document.querySelector("tr")
const elementoMeses = []
listaMeses.forEach (listaMeses => {
    const mesesPresupuesto = document.createElement ("th")
    mesesPresupuesto.innerText = listaMeses, elementoMeses.push (mesesPresupuesto)
}) */
//EL nombre se deberia guardar en local storage


{/* 


const calcularAhorroMensual = (totalIngresos) => totalIngresos * 0.1
let ahorroMensual = calcularAhorroMensual(totalIngresos)
console.log("Ahorros mensuales:", ahorroMensual)
alert("Usted deberia fijar su meta de ahorro mensual en: " + ahorroMensual) 


const resultadoFinal = (ingresoTotal, gastoTotal) => ingresoTotal - gastoTotal
let libreDisponibilidad = resultadoFinal(totalIngresos, totalGastos)
console.log("Libre Disponibilidad:", libreDisponibilidad)
alert("Tu monto de libre disponibilidad es: " + libreDisponibilidad)
 */}