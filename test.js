function f() {
    return (function () {
      let counter = 0
      return function () {counter += 1; return counter}
    })()
}

const add = f()

console.log(add())
console.log(add())
console.log(add())
