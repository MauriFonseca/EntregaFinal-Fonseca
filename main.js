const ingresos = ["Fuente ingreso 1", "Fuente ingreso 2", "Suma ingresos"]
const gastos = ["Ahorro mensual", "Alquiler", "Transporte", "Tarjeta de crédito principal", "Tarjeta de crédito secundaria", "Seguros contratados", "Luz y agua", "Telefonía", "Internet", "Educación", "Suma Gastos"]
function crearListaPresupuesto(elementos, listaDesordenada, inputsArray1, inputsArray2, inputsSuma, esUnIngreso = true) {
  elementos.forEach((elemento, index) => {
    const presupuestoItem = document.createElement("li")
        presupuestoItem.innerText = elemento
        const contenedorInputs = document.createElement("div")
        for (let i = 0; i < 12; i++) {
          const inputTexto = document.createElement("input")
            inputTexto.type = "number"
            if (index === elementos.length - 1) {
                inputTexto.readOnly = true
                inputsSuma.push(inputTexto)
            } else {
                if (esUnIngreso) {
                if (index === 0) inputsArray1.push(inputTexto)
                if (index === 1) inputsArray2.push(inputTexto)
                } else {
                if (!inputsArray1[index]) inputsArray1[index] = []
                inputsArray1[index].push(inputTexto)
                }
      }
      contenedorInputs.appendChild(inputTexto)
      }
  presupuestoItem.appendChild(contenedorInputs)
  listaDesordenada.appendChild(presupuestoItem)
})
}
const listaDesordenadaIngresos = document.querySelector("#listaIngresos")
const listaDesordenadaGastos = document.querySelector("#listaGastos")
const listaDesordenadaBalance = document.querySelector("#listaBalance")

const inputsFuente1 = []
const inputsFuente2 = []
const inputsSumaIngresos = []
const inputsGastos = []
const inputsSumaGastos = []
const inputsBalance = []
  
crearListaPresupuesto(ingresos, listaDesordenadaIngresos, inputsFuente1, inputsFuente2, inputsSumaIngresos)
crearListaPresupuesto(gastos, listaDesordenadaGastos, inputsGastos, null, inputsSumaGastos, false)
//BCE
  function crearListaBalance() {
      const balanceItem = document.createElement("li")
      balanceItem.innerText = "Resultado bruto mensual"
      const contenedorBalance = document.createElement("div")
      for (let i = 0; i < 12; i++) {
          const inputBalance = document.createElement("input")
        inputBalance.type = "number"
        inputBalance.readOnly = true
          inputsBalance.push(inputBalance)
        contenedorBalance.appendChild(inputBalance)
      }
    balanceItem.appendChild(contenedorBalance)
    listaDesordenadaBalance.appendChild(balanceItem)
}
crearListaBalance()
//Suma de ingresos y suma de gastos y calculo de balance al final
function calcularSumaIngresos() {
    for (let i = 0; i < 12; i++) {
      const valorFuente1 = parseFloat(inputsFuente1[i].value) || 0
      const valorFuente2 = parseFloat(inputsFuente2[i].value) || 0
      const suma = valorFuente1 + valorFuente2
      inputsSumaIngresos[i].value = suma
  }
calcularBalance()
}
function calcularSumaGastos() {
    for (let i = 0; i < 12; i++) {
        let sumaGastos = 0
          inputsGastos.forEach((inputArray) => {
            const valorGasto = parseFloat(inputArray[i].value) || 0
            sumaGastos += valorGasto
        })
        inputsSumaGastos[i].value = sumaGastos
    }
  calcularBalance()
}
function calcularBalance() {
    for (let i = 0; i < 12; i++) {
      const sumaIngresos = parseFloat(inputsSumaIngresos[i].value) || 0
      const sumaGastos = parseFloat(inputsSumaGastos[i].value) || 0
      inputsBalance[i].value = sumaIngresos - sumaGastos
}
}
inputsFuente1.forEach((input) => input.addEventListener("input", calcularSumaIngresos))
inputsFuente2.forEach((input) => input.addEventListener("input", calcularSumaIngresos))
inputsGastos.forEach((inputArray) => {
  inputArray.forEach((input) => input.addEventListener("input", calcularSumaGastos))
})
//Prohibir numeros negativos
function bloquearNumerosNegativos(positivo) {
  positivo.addEventListener("keypress", function(digito) {
    if (digito.key === '-' || digito.key === 'e') {
        digito.preventDefault()
          Swal.fire({
            icon: "warning",
            title: "Cuidado",
            text: "Ingresar todos los numeros en positivo",
      })
      }
    })
}
inputsFuente1.forEach((positivo) => bloquearNumerosNegativos(positivo))
inputsFuente2.forEach((positivo) => bloquearNumerosNegativos(positivo))
inputsGastos.forEach((inputArray) => {
    inputArray.forEach((positivo) => bloquearNumerosNegativos(positivo))
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
      })
    }
}) 
//Eleccion del año
async function seleccionarAño() {
  const inputOptions = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        "2025": "2025",
        "2026": "2026",
        "2027": "2027",
      })
    }, 2500)
  })
  const { value: año } = await Swal.fire({
    title: "Bienvenido/a, seleccionemos un año para presupuestar",
    input: "radio",
    inputOptions,
    inputValidator: (value) => {
      if (!value) {
        return "Por favor elegir un año a presupuestar"
      }
    }
  })
  if (año) {
    localStorage.setItem('Año presupuesto', año)
    const añoSeleccionadoElement = document.getElementById("añoSeleccionado")
    añoSeleccionadoElement.textContent = `Año seleccionado: ${año}`
    añoSeleccionadoElement.style.backgroundColor = "#246a6cb5"
    document.getElementById("añoSeleccionado").textContent = `Año seleccionado: ${año}`
    Swal.fire({ html: `Comencemos con tu presupuesto para el año ${año}, por favor ingresa tu nombre completo en el espacio habilitado` })
  }
}
seleccionarAño()
//Api para traer cotizaciones cripto
function PreciosCripto() {
  const url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin&vs_currencies=usd'
  fetch(url)
      .then(response => {
          if (!response.ok) {
              Swal.fire({
                icon: "error",
                title: "Hubo un error",
                text: "Por favor recargar la pagina",
            })
          }
          return response.json()
      })
      .then(data => {
          const precios = `
              <p>El precio de Bitcoin son: USD ${data.bitcoin.usd}</p>
              <p>El precio de Ethereum son: USD ${data.ethereum.usd}</p>
              <p>El precio de Litecoin son: USD ${data.litecoin.usd}</p>
          `
          document.getElementById('precios').innerHTML = precios
      })
      .catch(error => {
          Swal.fire({
            icon: "error",
            title: "Ups...",
            text: "Recarar la pagina :)",
          })
          console.log('Error:', error)
          document.getElementById('precios').textContent = 'Error al cargar los precios'
      })
}
window.onload = PreciosCripto