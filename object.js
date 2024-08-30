
/*
Um par de chaves {} representa um objeto,
o que e um objeto 'UM CONJUNTO DE CHAVES,PARES E VALORES' 
que tem pares EXEMPLO ( (nome: 'blusa') o nome do produto e o valor que e a blusa) .
podendo conter varios objetos dentro de si proprio  */

let produt = {}
produt.blusa = "cor preta";
produt.preco = 56.50
console.log(produt) /* de forma literal adicionando valores
fora das chaves do object usa o ( . ) para adicionar valor*/

const car = {
    fabricar: 'carro',
     adicionar: 'chassi',
      adicionar2: 'lataria',
       adiconar3: 'motor',
        adicionar4: 'eletrica',
         adiconar5: 'rodas',

};

console.log(car.adicionar2)


const papelaria = {   //adicionando valores do objeto dentro do objeto usando ( : )
    papeis:['chamex', 'sufiti','papel cartao','papel mateiga','papel ceda'], //array dentro de um objeto
    papeisembrulho: ['cartao', 'papel de presente, '],
    tiposDeCaneta: { //adicionando outro objeto dentro de um ja existente 
        caneta: 'preta',
        caneta2: 'azul',
        caneta3: 'verde',
        caneta4: 'vermelha',
                   }
        
};
console.log(papelaria.papeisembrulho[1]) // selecionando valor dentro do array no objeto
console.log(papelaria.tiposDeCaneta.caneta4)

class pessoa{}
console.log(typeof pessoa)
const pessoa100 = new pessoa()

console.log(typeof pessoa100)
//console.log(papelaria.papeis[2])
//console.log(papelaria.tiposDeCaneta.caneta4)


const product = {}  //object empty
product.name = 'Monitor', 
product.value = '2100,00',

console.log(product);

//array separado por virgula .

const name  = {}
name.pessoa1 = 'Lucas',
name.pessoa2 = 'Larissa';
console.log(name);

//IMPORTANTE, usa sempre VIRGULA dentro de objetos

const smartphone = {

      
      nameproduct1: 'Iphone',
      value: ' 4500.00',
      releasedateof: 'November',
      
        
      nameproduct2: 'samsung',
      value2: '3900.00',
      releasedaof: 'October',
       
      releasedateiphone: {

         starting: 17,

          releasedatesamsung: {
       
            starting: 25,

          }
     }  
    
}

console.log(smartphone);

/************************************************** */

let pessoa = {

  name: 'Lucas',
  age: 29,
  city: 'Caldas Novas'
};
const name1 = pessoa.name
const age1 = pessoa.age
console.log(name1,age1);

/**************************************************** */

// função bind e this Objeto. Função dentro de objeto
const person = {
  hello: 'good morning',
  speak(){
      return this.hello  //referênciando THIS a person
  }
};
console.log(person1.speak());    //retorna "good morning"

//ou usar assim
const person1 = {
  hello: 'good morning',
  speak(){
    return console.log(this.hello);
  }
};
person1.speak();         //também retorna "good morning"