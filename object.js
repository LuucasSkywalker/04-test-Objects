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

const person = {

  name: 'Lucas',
  age: 29,
  city: 'Caldas Novas'
};
const name1 = person.name
const age1 = person.age
console.log(name1,age1);

/**************************************************** */

// função bind e this Objeto. Função dentro de objeto
const person = {
  hello: 'good morning',
  speak(){
      return this.hello  //referênciando THIS a person
  }
};
console.log(person.speak());    //retorna "good morning"

//ou usar assim
const person1 = {
  hello: 'good morning',
  speak(){
    return console.log(this.hello);
  }
};
person1.speak();         //também retorna "good morning"