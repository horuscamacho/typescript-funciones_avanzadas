/*Son Arrays fuertemente tipados */

const prices:(number | string)[] = [1,2,3,4,5,6, "Hola"]
prices.push(1)
prices.push("dos")

let user: [string, number, boolean];
// user = ['horuscamacho', 36]
// user = ["11", 22]

// user = []
user = ["horus", 12, true]
const [username, age] = user
console.log(username)
console.log(age)
