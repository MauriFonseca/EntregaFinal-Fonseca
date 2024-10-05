//INGRESOS
const ingresos = ["Fuente ingreso 1", "Fuente ingreso 2", "Suma ingresos"]
const listaDesordenada = document.querySelector("#listaIngresos")
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
const listaDesordenadaDos = document.querySelector("#listaGastos")
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
  gastoPresupuesto.appendChild(contenedorInputsDos)
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
    })
  inputsSumaDos[i].value = sumaDos
  }
}
inputsGastos.forEach((inputArray) => {
    inputArray.forEach((input) => {
    input.addEventListener("input", calcularSumaDos)
  })
})
//Identificacion del usuario 
const inputTextField = document.getElementById("identificacionUsuario")
const boton = document.getElementById('inicio')
inputTextField.addEventListener("change", function() {
    const valor = inputTextField.value
    if (valor.trim() !== "") {
        boton.style.backgroundColor = "#13e813"
        localStorage.setItem('Nombre del usuario', valor)
    }
})
boton.addEventListener("click", function() {
    const valor = inputTextField.value
    const inputNumbers = document.querySelectorAll('input[type="number"]')
    const hayNumeroRellenado = Array.from(inputNumbers).some(input => input.value.trim() !== "")
    if (valor.trim() !== "" || hayNumeroRellenado) {
        inputNumbers.forEach(function(input) {
            input.style.backgroundColor = "#ffffff"
        })
    } else {
      Swal.fire({
        icon: "error",
        title: "Nos falto un pasito",
        text: "Completar campo identificacion :)",
      });
    }
})
//Eleccion del año
async function seleccionarAño() {
  const inputOptions = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        "2025": "2025",
        "2026": "2026",
        "2027": "2027",
      })
    }, 2000)
  })
  const { value: año } = await Swal.fire({
    title: "Bienvenido/a seleccionemos un año para presupuestar",
    input: "radio",
    inputOptions,
    inputValidator: (value) => {
      if (!value) {
        return "Por favor elegir un año a presupuestar"
      }
    }
  })
  if (año) {
    Swal.fire({ html: `Comencemos con tu presupuesto para el año ${año}` })
  }
}
seleccionarAño()
