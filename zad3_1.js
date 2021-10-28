//Zadanie 1
console.log("ZADANIE 1\n---------\n")

function joinMultiple(op, ...rest) { //not finished
    let arlen

    if (Array.isArray(rest[0]))
        arlen = rest[0].length
    else
        throw "Podany argument nie jest tablicą: " + rest[0]

    for (let i = 1; i < rest.length; i++) {
        if (!Array.isArray(rest[i]))
            throw "Podany argument nie jest tablicą: " + rest[i]
        else if (rest[i].length != arlen)
            throw "Długości tablic nie są takie same!"
    }

    let result = new Array(arlen).fill(0)

    for (let i = 0; i < arlen; i++) {
        result[i] = operacja(rest[1], rest[2], rest[3], ...)
    }
}


function join(op, ar1, ar2) {
    let result = []

    if (ar1.length != ar2.length) {
        throw "Tablice nie mają takiej samej długości!"
    }

    for (let i = 0; i < ar1.length; i++)
        result.push(op(ar1[i], ar2[i]))

    return result
}

let a = [1, 2, 3]
let b = [2, 3, 4]

console.log("Pierwsza tablica:")
console.table(a)

console.log("\nDruga tablica:")
console.table(b)

console.log("\nTablice połączone w tablicę współrzędnych");
let c = join((x, y) => { return { x:x, y:y } }, a, b)
console.table(c)

joinMultiple((x, y) => {return x + y}, a, b)
