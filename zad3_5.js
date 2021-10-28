//Zadanie 5
console.log("ZADANIE 5\n---------\n")

function createArray(size) {
        let ar = new Array(size).fill(0)

        ar = ar.map(v => parseInt(Math.random() * 10 + 1))

        let even = ar.reduce((e, v) => v % 2 === 0 ? e + 1: e, 0)
        let prod = ar.reduce((p, v) => p * v, 1)

        console.log(even + " " + prod);
        console.log(ar);
}

createArray(5)
