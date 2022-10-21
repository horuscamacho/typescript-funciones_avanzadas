/*El never type se utiliza para funciones que nunca van a terminar, por ejemplo un ciclo infinito*/

const withoutEnd = () => {
  while (true) {
    console.log("Nunca parar de aprender")
  }
}

/*Automaticamente dice never, una vez que inicie nunca termine*/

const fail = (message: string) => {
  throw new Error(message)
}

const example = (input: unknown) => {
  if(typeof input === "string"){
    return "es un string"
  } else if(Array.isArray(input)){
    return "Es array"
  }
  return fail("No hizo match")
}

console.log(example("Hola"))
console.log(example([1,1,1,1,1]))
console.log(example(1212)) //detiene
console.log(example('Hola después del fail'))
