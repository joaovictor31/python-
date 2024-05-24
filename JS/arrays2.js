const cursos = document.querySelectorAll('.curso');
//Aqui o resultado está em node list e tenho que passar para array
const arraycursos = Array.from(cursos);

// 01 - Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const objetosCurso = arraycursos.map((curso) => {
   const titulo = curso.querySelector('h1').innerText
   const descricao = curso.querySelector('p').innerText
   const aulas = curso.querySelector('.aulas').innerText
   const horas = curso.querySelector('.horas').innerText
   //como eu quero que retorne um objeto eu já coloco ele aqui dentro. 
   return {
      titulo: titulo, //se eu colocasse só (titulo), também daria certo porque aqui a chave e o valor tem o mesmo nome. 
      descrição: descricao,
      aulas: aulas,
      horas:horas
   }
})

console.log(objetosCurso);
console.log(typeof(objetosCurso));

// 02 - Retorne uma lista com os
// números maiores que 100

const numeros = [3, 44, 333, 23, 122, 322, 33];
const maioresQue100 = numeros.filter((item => {
   return item > 100
}))

console.log(maioresQue100); 

// 03 - Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const verifica = instrumentos.some((item) => item === 'Baixo');
console.log('Tem baixo? ', verifica);

//04 - Retorne o valor total das compras

const compras = [
   {
     item: 'Banana',
     preco: 'R$ 4,99'
   },
   {
     item: 'Ovo',
     preco: 'R$ 2,99'
   },
   {
     item: 'Carne',
     preco: 'R$ 25,49'
   },
   {
     item: 'Refrigerante',
     preco: 'R$ 5,35'
   },
   {
     item: 'Quejo',
     preco: 'R$ 10,60'
   }
 ]

 const total = compras.reduce((acumulador, atual) => {
  let formatarPreco = Number(atual.preco.replace('R$ ', '').replace(',', '.'))
  return formatarPreco + acumulador
}, 0)

console.log(total)