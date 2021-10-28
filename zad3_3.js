//Zadanie 3
console.log("ZADANIE 3\n---------\n")

function countChars(str) {
    let dic = {}
    str = str.split('')

    str.forEach(function(v) {
        if (v in dic)
            dic[v]++
        else
            dic[v] = 1
    })

    return dic
}

let dic = countChars("Jakub Zachariasz")
console.log(dic)
