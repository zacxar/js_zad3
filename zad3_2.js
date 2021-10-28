//Zadanie 2
console.log("ZADANIE 2\n---------\n")

function makeRange(l, r) {
    if (isNaN(l) || isNaN(r)) {
        throw "Przekazano błędny parametr: " + l + ", " + r
    }
    else {
        l = parseInt(l)
        r = parseInt(r)

        let ar = []

        if (l <= r) {
            for (let i = l; i <= r; i++)
                ar.push(i)
        }
        else {
            for (let i = l; i >= r; i--)
                ar.push(i)
        }

        return (function() {
            let i = 0
            return function() {
                if (i < ar.length)
                    return ar[i++]
                else
                    return NaN
            }
        })()
    }
}

var range1 = makeRange(10, 5)
console.log(range1())
console.log(range1())
console.log(range1())
console.log(range1())
console.log(range1())
console.log(range1())
console.log(range1())
console.log(range1())

console.log("\n\n");
var range2 = makeRange(-4, 8)
console.log(range2())
console.log(range2())
console.log(range2())
console.log(range2())
console.log(range2())
console.log(range2())
console.log(range2())
console.log(range2())
console.log(range2())
console.log(range2())
console.log(range2())
console.log(range2())
console.log(range2())
console.log(range2())
