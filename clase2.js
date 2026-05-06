// // const frutas = ['naranja', 'maracuya', 'piña', 'mandarina']

// // // para obtener la cantidad de elementos se usa:
// // const totalElementos = frutas.length // 4
// // // extrayendo algún item de la cajita
// // const maracuya = frutas[1]
// // // extrayendo siempre el último
// // const ultimaFruta = frutas[totalElementos - 1]

// // // MINI CRUD
// // // C - create
// // frutas.push("fresa") // al final
// // frutas.unshift("fresa") // al inicio

// // // R - Read
// // // para ir hacia delante
// // for (i = 0; i < frutas.length; i++) {
// //   console.log(frutas[i])
// // }

// // // para ir hacia atrás
// // for (i = frutas.length - 1; i >= 0; i--) {
// //   console.log(frutas[i])
// // }

// // frutas.forEach((fruta) => {
// //   console.log(fruta)
// // })

// // const portion = frutas.slice(1, 2) // [maracuya, piña]

// // // Update
// // // Delete
// // frutas.pop() // elimina el ultimo
// // frutas.shift() // elimina el 1er elemento

// // // numeros
// // const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// // // Read
// // numeros.filter(numero => numero > 5)
// // numeros.find(numero => numero > 5)

// // const productosConDescuento = numeros.map(numero => numero * 0.9)

// // let edad = 18, nombre = "pepe"

// // // ----------------
// // // si todos los elementos cumplen con la condición
// // const edades = [19, 21, 15, 31, 11, 25]
// // console.log(edades.every(edad => edad >= 12)) // true / false
// // // si al menos uno cumple con la condición
// // console.log(edades.some(edad => edad == 10)) // true / false
// // // verificar si nuestro arreglo contiene algo
// // console.log(edades.includes(10))
// // // como "volteamos" el arreglo
// // console.log(edades.reverse())
// // // juntar un arreglo en un string
// // const palabras = ["hola", "esta", "es", "una", "frase"]
// // const frase = palabras.join(' ')
// // // let cadena = ''

// // // palabras.forEach(palabra => {
// // //     cadena += palabra + " "
// // // })

// // // console.log(cadena.trim())
// // // convertir un string a un arreglo
// // // como separar un arreglo con un delimitador
// // console.log(frase.split(' ').map(palabra => palabra.toUpperCase()))

// // // splice
// // const palabras2 = ["hola", "esta", "privada"]
// // // palabras2.splice(2, 0, "es", "una", "fiesta")

// // const agregarElemento = (palabra) => {
// //   palabras2.push(palabra)
// // }

// // const eliminarUltimoElemento = (arreglo) => {
// //   arreglo.pop()
// //   arreglo.splice(arreglo.length - 1, 1)
// // }

// // const editar = (arreglo, posicion, palabra) => {
// //   arreglo.splice(posicion, 1, palabra)
// // }

// // agregarElemento("Donatto")
// // eliminarUltimoElemento(palabras2)

// // // ===============================
// // // Tanto lab4 como proyecto será resolver los 20 ejercicios.
// // // No olviden subir su laboratorio 3
// // // Tienen cada pregunta son su interpretación para resolver con código

// // // 1.
// // // Se tiene un listado de edades de distintos usuarios.
// // // Se requiere identificar cuáles de ellos ya pueden considerarse mayores de edad.
// // const edades1 = [12, 18, 25, 14, 30];

// // // 2.
// // // En un sistema numérico simple, se necesita obtener únicamente los valores pares
// // // para aplicarles un procesamiento adicional.
// // const numeros2 = [1, 2, 3, 4, 5, 6];

// // // 3.
// // // Una aplicación necesita identificar qué nombres superan cierta longitud
// // // para aplicarles un formato especial en la interfaz.
// // const nombres3 = ["Ana", "Luis", "Carlos", "Eva"];

// // // 4.
// // // Se requiere generar una nueva lista donde todos los valores sean duplicados,
// // // ya que representan cantidades que deben ajustarse automáticamente.
// // const numeros4 = [2, 4, 6, 8];

// // // 5.
// // // Dentro de un catálogo, se necesita ubicar un producto específico llamado "Mouse"
// // // para validar si existe en el sistema.
// // const productos5 = [
// //   { nombre: "Laptop" },
// //   { nombre: "Mouse" },
// //   { nombre: "Teclado" }
// // ];


// // // 6.
// // // Se tiene un conjunto de notas de alumnos y se necesita determinar
// // // cuáles cumplen con la condición mínima de aprobación (nota ≥ 13).
// // const notas6 = [10, 14, 12, 18, 13];

// // // 7.
// // // En un sistema académico, se requiere agregar un estado a cada alumno,
// // // indicando si aprobó o desaprobó según su nota.
// // const alumnos7 = [
// //   { nombre: "Luis", nota: 15 },
// //   { nombre: "Ana", nota: 10 }
// // ];

// // // 8.
// // // Se requiere obtener únicamente los productos cuyo precio sea accesible,
// // // definidos como aquellos menores a 100.
// // const productos8 = [
// //   { nombre: "Mouse", precio: 50 },
// //   { nombre: "Laptop", precio: 3000 }
// // ];

// // // 9.
// // // De una lista de usuarios, se necesita mostrar únicamente aquellos que
// // // se encuentran activos dentro del sistema.
// // const usuarios9 = [
// //   { nombre: "Luis", activo: true },
// //   { nombre: "Ana", activo: false }
// // ];

// // // 10.
// // // Se requiere calcular el total acumulado de una serie de valores numéricos,
// // // representando ingresos diarios.
// // // Restricción: usar reduce
// // const numeros10 = [10, 20, 30];


// // // 11.
// // // En un sistema de ventas, se necesita identificar los pedidos que cumplen
// // // dos condiciones: que hayan sido entregados y que superen un monto mínimo de 100.
// // // El objetivo es obtener los nombres de los clientes que cumplen ambas condiciones.
// // const pedidos11 = [
// //   { cliente: "Luis", total: 120, entregado: true },
// //   { cliente: "Ana", total: 80, entregado: true }
// // ];

// // // 12.
// // // Cada usuario tiene un historial de compras.
// // // Se requiere calcular cuánto ha gastado cada uno en total.
// // const usuarios12 = [
// //   { nombre: "Luis", compras: [10, 20] },
// //   { nombre: "Ana", compras: [50, 50] }
// // ];

// // // 13.
// // // Se necesita determinar cuál es el valor más alto dentro de un conjunto,
// // // ya que representa el mejor resultado obtenido.
// // const numeros13 = [5, 10, 2, 20];

// // // 14.
// // // Un sistema presenta datos duplicados y se requiere limpiar la información,
// // // devolviendo un arreglo sin valores repetidos.
// // // Restricción: no usar Set
// // const numeros14 = [1, 2, 2, 3, 4, 4];

// // // 15.
// // // Se requiere contar cuántos alumnos han aprobado,
// // // considerando como aprobados a quienes tienen nota ≥ 13.
// // // Restricción: no usar length directamente después de filter
// // const notas15 = [10, 14, 16, 8, 13];


// // // 16.
// // // En una plataforma, se necesita obtener los nombres de los usuarios
// // // que son mayores de edad y además mostrarlos en mayúsculas
// // // para destacarlos visualmente.
// // const usuarios16 = [
// //   { nombre: "Luis", edad: 17 },
// //   { nombre: "Ana", edad: 20 }
// // ];

// // // 17.
// // // Se tiene un catálogo de productos y se necesita identificar
// // // cuál de ellos tiene el precio más alto para destacarlo como producto premium.
// // const productos17 = [
// //   { nombre: "Mouse", precio: 50 },
// //   { nombre: "Laptop", precio: 3000 },
// //   { nombre: "Monitor", precio: 800 }
// // ];

// // // 18.
// // // Dado un conjunto de números, se requiere organizarlos en dos grupos:
// // // pares e impares, para analizarlos por separado.
// // const numeros18 = [1, 2, 3, 4, 5, 6];

// // // 19.
// // // En un sistema de acceso, solo pueden ingresar usuarios que cumplan
// // // dos condiciones: ser mayores de edad y contar con una suscripción activa.
// // // Se requiere identificar quiénes cumplen con ambas reglas.
// // const usuarios19 = [
// //   { nombre: "Luis", edad: 20, suscripcion: true },
// //   { nombre: "Ana", edad: 16, suscripcion: true }
// // ];

// // // 20.
// // // Se tiene un sistema de usuarios con historial de compras.
// // // Se requiere identificar únicamente a aquellos usuarios activos cuyo total
// // // de compras supere los 100.
// // // El resultado debe devolver un nuevo arreglo con objetos que incluyan
// // // el nombre del usuario y el total gastado.
// // // Restricción: usar filter + map + reduce
// // const usuarios20 = [
// //   { nombre: "Luis", activo: true, compras: [50, 60] },
// //   { nombre: "Ana", activo: true, compras: [20, 30] },
// //   { nombre: "Carlos", activo: false, compras: [100] }
// // ];

// const input = document.querySelector('#tarea')
// const boton = document.querySelector('#boton')
// const lista = document.getElementById('lista')

// const tareas = []

// boton.addEventListener('click', () => {
//   const valorInput = input.value
//   tareas.push(valorInput)

//   lista.innerHTML = ''

//   tareas.forEach(str => {
//     const li = document.createElement('li')
//     li.style.color = 'red'
//     li.style.borderRadius = '20px'
//     li.style.backgroundColor = 'blue'
//     li.textContent = str

//     lista.appendChild(li)
//   })

//   input.value = ''
// })

// // -------------------------------

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
  }

  saludar() {
    console.log("Hola, soy " + this.nombre)
  }
  cumpleEdad() {
    this.edad++
  }
}

// ---------------------------------


class Alumno {
  constructor(nombre, tareas) {
    this.nombre = nombre
    this.tareas = tareas
  }

  entregarLaboratorio() {
    this.tareas++
  }

  pedirPunto() {
    console.log("Profe, soy " + this.nombre + ", subame un puntito")
  }

  laboratoriosEntregado() {
    console.log(this.tareas)
  }
}

// -----------------------
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre
    this.precio = precio
  }
}


class Carrito {
  constructor() {
    this.productos = []
  }

  agregarProducto(producto) {
    this.productos.push(producto)
  }

  productos() {
    console.log(this.productos)
  }

  total() {
    let total = 0
    productos.forEach((obj) => {
      total += obj.precio
    })
    console.log(total)
  }
}

// ---------------
// class Player {
//   constructor(nombre, dano) {
//     this.nombre = nombre
//     this.dano = dano
//   }
// }


// class Match {
//   constructor(...players) {
//     this.players = players
//   }

//   verJugadores() {
//     console.log(this.players)
//   }

//   ganador() {
//     let danoMayor = 0 // 200
//     let ganador = {}

//     this.players.forEach((jugador) => {
//       if (jugador.dano > dano) { // j2 = 200
//         danoMayor = jugador.dano
//         ganador = jugador
//       }
//     })

//     console.log(ganador)
//   }

// }


// const jugador1 = new Player("jugador1", 350)
// const jugador2 = new Player("jugador2", 900)
// const jugador3 = new Player("jugador3", 400)
// const jugador4 = new Player("jugador4", 1000)

// const partida = new Match(new Player("jugador1", 350))

// partida.ganador()

// ----------------
// ===============================
// Endpoint: https://dummyjson.com/products
// ===============================




// -----------------

// const peticion = fetch("pizzeria/hawaiana")

// la pizzera a nosotros nos dice: Te lo vamos a mandar, pero entre un momento
// Esto es una promesa, /te prometo que llegaré

// consultando a la pizzeria
fetch("https://dummyjson.com/products").then(respuesta => {
  return respuesta.json()
}).then(productos => {
  console.log(productos)
}).catch(error => {// en caso de que algo haya salido mal
  console.log("Hubo un error")
})

// 2da forma
const Mensaje = async () => {
  try {
    const consulta = await fetch('https://dummyjson.com/recipes')
    const datos = await consulta.json()
    console.log(datos)
    let receta = {}
    datos.recipes.forEach((Obj) => {
      receta.nombre = Obj.name
      receta.CantidadIngredientes = Obj.ingredients.length
      receta.Ingredientes = Obj.ingredients
      receta.CantidadInstrucciones = Obj.instructions.length
      receta.Instrucciones = Obj.instructions
      console.log(receta)
    })
  } catch {
    console.log("error")
  }
}

Mensaje()