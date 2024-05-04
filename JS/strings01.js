// 01 - Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
];

let valor_taxa = 0;
let valor_recebimento = 0;

transacoes.forEach(function(item,index,array){
  let objeto = transacoes[index];
  if (objeto.descricao.includes('Taxa')){
    objeto.valor = objeto.valor.replace("R$","");
    valor_taxa += parseFloat(objeto.valor);
  } else {
    objeto.valor = objeto.valor.replace('R$',"")
    valor_recebimento += parseFloat(objeto.valor);
  }
  
})

//O + na frente de uma string que é só número transforma ela em número; 
console.log('O valor da Taxa foi de: ' + valor_taxa);
console.log('O valor de recebimento foi de: ' + valor_recebimento);

/* 
Resposta do professor 

let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes.forEach((item) => {
  const numeroLimpo = +item.valor.replace('R$ ', '');
  if (item.descricao.slice(0, 4) === 'Taxa') {
    taxaTotal += numeroLimpo;
  } else if(item.descricao.slice(0, 4) === 'Rece') {
    recebimentoTotal += numeroLimpo;
  
  }
})

console.log(taxaTotal)
console.log(recebimentoTotal)

*/

// 02 - Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const array_transportes = transportes.split(';');
console.log(array_transportes);

// 03 - Substitua todos os span's por a's
let html = `<ul>
  <li><span>Sobre</span></li>
  <li><span>Produtos</span></li>
  <li><span>Contato</span></li>
</ul>`;

//O método split vai retornar um array
html = html.split('span').join('a');
console.log(html);

// 04 -  Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase[frase.length - 1])
  
// 05 - Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
let count = 0;
transacoes2.forEach(item => {
    if(item.toLowerCase().includes('taxa')){
        count++;
    }
});
console.log('Total: ' + count);

//outra forma

const transacoes3 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let taxasTotal = 0;
transacoes2.forEach((item) => {
item = item. toLowerCase ();
item = item. trim();
item = item.slice(0,4);

if(item === 'taxa')
taxasTotal++

})

console.log(taxasTotal)

//minha resposta

const transacoes4 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
let cont = 0;
transacoes4.forEach(function(item){
    let novo = item.toLowerCase().trim();
    if (novo.includes('taxa')){
        cont += 1;
    }
})

console.log(`O valor total de taxas é ${cont}`);