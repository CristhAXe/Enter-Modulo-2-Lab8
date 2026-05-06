// ejercicio 1
// - Hacer fetch al endpoint
// https://dummyjson.com/docs/products
// - Convertir la respuesta a JSON
// - Mostrar en consola solo los títulos de los productos

fetch('https://dummyjson.com/products')
  .then(response => response.json())
  .then(data => {
    data.products.forEach(product => {
      console.log(product.title)
    })
  })



// ejercicio 2
// - Filtrar productos con precio mayor a 100
// - Mostrar en consola:
//   - título
//   - precio

fetch('https://dummyjson.com/products')
  .then(response => response.json())
  .then(data => {

    const filteredProducts = data.products.filter(product => {
      return product.price > 100
    })

    filteredProducts.forEach(product => {
      console.log(product.title)
      console.log(product.price)
    })

  })



// ejercicio 3
// - Calcular el precio promedio de todos los productos
// - Mostrar el resultado en consola

fetch('https://dummyjson.com/products')
  .then(response => response.json())
  .then(data => {

    const total = data.products.reduce((acc, product) => {
      return acc + product.price
    }, 0)

    const average = total / data.products.length

    console.log('Precio promedio:', average)

  })



// ejercicio 4
// - Crear un nuevo arreglo con:
//   - título
//   - precio final aplicando descuento (discountPercentage)

fetch('https://dummyjson.com/products')
  .then(response => response.json())
  .then(data => {

    const newArray = data.products.map(product => {

      const finalPrice =
        product.price -
        (product.price * product.discountPercentage / 100)

      return {
        title: product.title,
        finalPrice: finalPrice
      }

    })

    console.log(newArray)

  })



// ejercicio 5
// - Pedir al usuario un texto (prompt o input)
// - Filtrar productos cuyo título incluya ese texto
// - Mostrar resultados en consola

const text = prompt('Buscar producto:')

fetch('https://dummyjson.com/products')
  .then(response => response.json())
  .then(data => {

    const results = data.products.filter(product => {
      return product.title
        .toLowerCase()
        .includes(text.toLowerCase())
    })

    console.log(results)

  })



// ejercicio 6
// - Agrupar los productos por categoría
// - Resultado esperado:
// {
//   categoria1: [...],
//   categoria2: [...]
// }

fetch('https://dummyjson.com/products')
  .then(response => response.json())
  .then(data => {

    const groupedProducts = data.products.reduce((acc, product) => {

      if (!acc[product.category]) {
        acc[product.category] = []
      }

      acc[product.category].push(product)

      return acc

    }, {})

    console.log(groupedProducts)

  })



// ejercicio 7
// - Ordenar productos por precio (de mayor a menor)
// - Obtener solo los 5 más caros
// - Mostrar en consola

fetch('https://dummyjson.com/products')
  .then(response => response.json())
  .then(data => {

    const expensiveProducts = data.products
      .sort((a, b) => b.price - a.price)
      .slice(0, 5)

    console.log(expensiveProducts)

  })



// ejercicio 8
// - Simular un carrito:
//   - Seleccionar al menos 3 productos (por id o manualmente)
//   - Calcular el total a pagar

fetch('https://dummyjson.com/products')
  .then(response => response.json())
  .then(data => {

    const cart = [
      data.products[0],
      data.products[1],
      data.products[2]
    ]

    const total = cart.reduce((acc, product) => {
      return acc + product.price
    }, 0)

    console.log('Total a pagar:', total)

  })



// extra
// - Mostrar productos en HTML
// - Agregar:
//   - buscador en tiempo real
//   - filtro por categoría

const productsContainer = document.getElementById('productsContainer')
const searchInput = document.getElementById('searchInput')
const categorySelect = document.getElementById('categorySelect')

let allProducts = []

fetch('https://dummyjson.com/products')
  .then(response => response.json())
  .then(data => {

    allProducts = data.products

    showProducts(allProducts)

    const categories = [
      ...new Set(allProducts.map(product => product.category))
    ]

    categories.forEach(category => {

      const option = document.createElement('option')

      option.value = category
      option.textContent = category

      categorySelect.appendChild(option)

    })

  })

function showProducts(products) {

  productsContainer.innerHTML = ''

  products.forEach(product => {

    const div = document.createElement('div')

    div.innerHTML = `
      <h2>${product.title}</h2>
      <p>Precio: $${product.price}</p>
      <p>Categoría: ${product.category}</p>
      <hr>
    `

    productsContainer.appendChild(div)

  })

}

function filterProducts() {

  const searchText = searchInput.value.toLowerCase()
  const selectedCategory = categorySelect.value

  const filtered = allProducts.filter(product => {

    const matchTitle = product.title
      .toLowerCase()
      .includes(searchText)

    const matchCategory =
      selectedCategory === 'all' ||
      product.category === selectedCategory

    return matchTitle && matchCategory

  })

  showProducts(filtered)

}

searchInput.addEventListener('input', filterProducts)

categorySelect.addEventListener('change', filterProducts)
// crud

// C - Create
localStorage.setItem('edad', 30)

// R - Read
const edad = localStorage.getItem('edad') // 30

// U - Update
localStorage.setItem('edad', 40)

// D - Delete
localStorage.removeItem('edad')

const input = document.querySelector('#tarea')
const boton = document.querySelector('#boton')
const lista = document.querySelector('#lista')

let tareas = []

// cargar los datos de las tareas si es que existen
const tareasStorage = localStorage.getItem('tareas')

if (tareasStorage) {
    tareas = JSON.parse(tareasStorage)
    // volverlo a colocar como arreglo
    const arregloTareas = JSON.parse(tareasStorage)

    console.log('tareasStorage', typeof tareasStorage, tareasStorage)
    console.log('arregloTareas', typeof arregloTareas, arregloTareas)

    arregloTareas.forEach(t => {
        const div = document.createElement('div')
        div.textContent = t

        lista.appendChild(div)
    })
}

boton.addEventListener('click', () => {
    const valor = input.value

    // agregando la tarea al arreglo
    tareas.push(valor)

    // colocarlo en el localStorage
    localStorage.setItem('tareas', JSON.stringify(tareas))
    // JSON.stringify es necesario si quieres guardar
    // datos de tipo arreglo u objeto

    const div = document.createElement('div')
    div.textContent = valor

    lista.appendChild(div)
})


// Laboratorio
// Cada item debe tener un botón para eliminar
// Cuando se de click, se elimna ese item
// Se debe de actualizar el localStorage