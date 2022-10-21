let anyVar: any;
anyVar = true;
anyVar =null;
anyVar =1
anyVar = []

let isNew: boolean;
isNew = anyVar

let unknowVar: unknown;
unknowVar = true;
unknowVar = 12;
unknowVar = ""

//unknowVar.doSomething()
if(typeof unknowVar === "string") {
  unknowVar.toUpperCase()
}

if(typeof unknowVar === "boolean"){
  let isNew2: boolean = unknowVar;
}




const parse = (str: string): unknown => {
  return JSON.parse(str)
}

