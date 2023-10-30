let number: number = 1
let number2: number = 1

while (number <= 3) {
    console.log("numero: " + number)
    number++
}

do {
    console.log("numero: " + number2)
    number2++
} while (number2 <= 3)

let numbers2: number[] = [3, 5, 7, 2]

for (let i: number = 0; i < numbers2.length; i++) {
    numbers2[i] = numbers2[i] * 2
    console.log(numbers2[i])
}

// elemento
for (let numero of numbers2) {
    console.log(numero)
}

// indice
for (let numero in numbers2) {
    console.log(numero)
}