//Zadanie 4
console.log("ZADANIE 4\n---------\n")

function scaleArray(ar) {
    ar.forEach(function(v) {
        if (isNaN(v))
            throw "Jeden z elementów przekazanej tablicy nie jest liczbą: " + v
    })

    let min = ar[0], max = ar[0]
    let result = []
    result = ar

    result = result.filter((el, i) => {
        if (i % 2 === 0) {
            if (ar[i] < min)
                min = ar[i]
            else if (ar[i] > max)
                max = ar[i]
        }

        return i % 2 === 0
    })

    console.log(result)

    result = result.map(function(v) {
        if (v == min)
            return 0
        else if (v == max)
            return 1
        else
            return v / max
    })

    console.log(result);
}

scaleArray([1, 2, 3, 4, 6, 7, 2, 12, 44, 5, 120, 4])
