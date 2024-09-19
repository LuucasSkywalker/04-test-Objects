const ferrari = {
    modelo: 'F40',
    veloMax: 345
}
console.log(ferrari.__proto__ === Object.prototype)

/*Quando você cria um objeto literal em JavaScript (como carro ou proprietario), 
ele herda de Object.prototype por padrão, já que é a base de todos os objetos comuns.
Criar um objeto literal em JavaScript significa criar um objeto diretamente, usando 
uma sintaxe simples de pares chave-valor entre { } (chaves). Essa é a maneira mais 
comum e simples de criar um objeto.
*/ 

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
      nome: 'Raul',
      idade: 56,
      endereco: {
        logradouro: 'Rua ABC',
        numero: 123
      }
      }
    }
    console.log(carro.proprietario.__proto__ === Object.prototype)