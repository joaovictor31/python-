// Retorne um número aleatório
// entre 1050 e 2000

const aleatorio1 = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050;


// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20,18, 9';

const arrayNumeros = numeros. split(',');
//Esse 3 pontos é como se passasemos cada item da lista de uma vez
const valorMaximo = Math.max(...arrayNumeros); 



// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
'R$ 230  ', 'r$  200'];

let soma = 0
listaPrecos.forEach(function(item){
    
    item = item.replace('R$','');
    item = item.replace('r$','')
    item = item.trim()
    item = parseFloat(item)
    item = Math.round(item)
    soma+= item;

})

console.log(soma);

