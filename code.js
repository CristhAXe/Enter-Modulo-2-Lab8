const sumar = (num1, num2) => {
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Uno de los parametros no es un numero");
    }
    else {
        console.log(num1 + num2);
    }
}
// verificar que lo que uno suma son numeros
sumar('hola', 123)

function dividir(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Deben ser numeros.")
        return;
    } else if (num2 === 0) {
        console.log("No se puede dividir en cero.")
        return;
    } else {
        console.log(num1 / num2);
    }
}

dividir(4, 2) // 2
dividir(4, "2") // No se puede
dividir("4", 2) // No se puede
dividir(4, 0) // No se puede dividir entre 0
dividir(-4, 2) // -2
dividir(4, -2) // -2

// ----------------
verificarAprobados([10, 13, 18, 20, 15, 9, 11])
verificarAprobados([10, 13, 18, 11, 12, 10, 14])
// 11

const calificaciones = [10, 12, 18, 20, 13, 15, 16, 9, 5, 13];
let aprobados = 0

const verificarAprobados = (arreglo) => {
    let contador = 0

    arreglo.forEach(calificacion => {
        if (!isNaN(calificacion)) {
            if (calificacion >= 11) {
                contador++
            }
        }
    })

    return contador
}