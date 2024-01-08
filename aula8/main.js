const person = {
    name: 'Ana',
    age: 45,
    profession: 'back-end developer',
    projects:{
        class01: 'Intro',
        class02: 'Loops',
        class03: 'Arrays', 
    } 
}




const json_string = JSON.stringify(person)
//o metodo stringify serve para converter o nosso obj person em uma string literal manipulada por json
const json_object = JSON.parse(json_string)

//quando temos uma string e queremos converte-la em um objeto, usamos o metodo parse em JSON.
console.log(json_object)
