Olá, estou em processo de aprendizagem no momento, pegam leve kk

os que estiver com "//" foi para operação não funcionar e atrapalhar outra operação, estou fazendo no console do html, não fiz na extensão do js.

                                OPERAÇÕES

// 1 - Number 
console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -245);

// 2 - Operações Aritmética 
console.log(2 + 4);
console.log(18 - 25);
console.log(84 * 25);
console.log(45 / 20);

console.log(5 + 2 * 5 / 2);

// 3 - Special numbers
console.log(typeof Infinity);

console.log(typeof -Infinity);

console.log(12 * "asd");

console.log(typeof NaN);

// 4 - Strings 
console.log("Olá");

// 5 - Símbolos especiais em string
console.log("Testando quebra de \n linha");

console.log("Espaçamento \t de tab");

// 6 - Concatenação
console.log("Oi," + " tudo" + " bem? ");

// 7 - Template Strings
console.log(`A soma de 2 + 2 é: ${2 + 2}`);

console.log(`Podemos executar qualquer coisa aqui ${console.log("teste")}`);

// 8 - Booleans 
console.log(true);

console.log(5 < 10);

console.log(10 < 5);

console.log(typeof false);

// 9 - Comparações
console.log(15 <= 10);

console.log(20 < 20);

console.log(10 == 10);

console.log(70 >= 70);

console.log(99 != 99);

console.log(85 === 45);  
// sinais...
// <= maior ou menor e igual
// >= maior ou menor e igual
// == igual
// != diferente
// === idêntico

// 10 - idêntico
console.log(9 == 9);

console.log(9 == "9");

console.log(9 !== "9");

// 11 - Operações lógicos
console.log(true && true); 

console.log(true && false);

console.log(10 > 5 && 2 < 1);

console.log(10 > 5 || "Vitor" == 1);
// sinais...
// && = só é verdade quando for true e true
// || = só é verdade quando tiver um true

// 12 - empty values
console.log(typeof null, typeof undefined);

console.log(null == undefined);

console.log(null === undefined);

console.log(null == false);

console.log(undefined == false);

// 13 - mudança de tipos
console.log(5 * null);

console.log("texte" * "opa");



console.log("10" + 1);

console.log("10" - 1);
// não fazer cálculos assim, é necessário converter

                          FUNÇÕES

// // 1 - Criando uma função
// function minhaFuncao() {
//     console.log("Testando");
// }

// minhaFuncao();

// const minhaFuncaoEmVariavel = function() {
//     console.log("Função em variável")
// }

// minhaFuncaoEmVariavel();

// function funcaoComParametro(txt) {
//     console.log(`imprimindo: ${txt}`);
// }

// funcaoComParametro("Imprimindo alguma coisa");

// funcaoComParametro("outra função");

// // 2 - return

// const a = 10
// const b = 20
// const c = 30
// const d = 40

// function soma(n1, n2) {
//     return n1 + n2;
// }

// const resultado = soma(a, b);

// console.log(resultado);

// console.log(soma(c, d));

// // 3 - escopo da função 
// let y = 10

// function testandoEscopo() {
//     let y = 20;
//     console.log(`Y dentro da função é: ${y}`);
// }

// testandoEscopo();

// y = 15;

// console.log(`Y fora da função é: ${y}`);

// testandoEscopo();

// // 4 - escopo alinhado

// let m = 10;

// function escopoAlinhado() {
//     let m = 20;

//     if(true) {
//         let m = 30;

//         if(true) {
//             let m = 40;

//             console.log(m);
//         }

//         console.log(m);
//     }

//     console.log(m);
// }

// escopoAlinhado();

// console.log(m);

// // 5 - arrow function

// const testeArrow = () => {
//     console.log("Está é uma arrow function")
// }

// testeArrow();

// const parOuImpar = (n) => {
//     if(n % 2 === 0) {
//         console.log("Par")
//         return;
//     }

//     console.log("Impar");
// }

// parOuImpar(5);
// parOuImpar(10);

// // 6 - mais sobre arrow functions

// const raizQuadrada = (x) => {
//     return x * x
// }

// console.log(raizQuadrada(4));

// const raizQuadrada2 = (x) => x * x;

// console.log(raizQuadrada2(7));

// console.log(raizQuadrada2(10));

// // 7 - parametros opcional

// const multiplication = function(m, n) {
//     if(n === undefined) {
//         return m * 2
//     }else {
//         return m * n;
//     }
// }

// console.log(multiplication(5));

// console.log(multiplication(2, 4));

// const greeting = (name) => {
//     if(!name) {
//         console.log("Olá")
//         return
//     }

//     console.log(`Olá ${name}!`)
// }

// greeting();

// greeting("Vitor");

// 8 - valor default 

const customGreeting = (name, greet = "Olá") => {
    return `${greet}, ${name}!`
}

console.log(customGreeting("Vitor"));

console.log(customGreeting("João", "Bom dia"));

const repeatText = (text, repeat = 2) => {
    
    for (let i = 0; i < repeat; i++) {
        console.log(text);
    }

};

repeatText("Testando");
repeatText("Agora repete 10 vezes",10);

// 9 - closure

function someFunction() {
    let txt = "Alguma coisa"

    function display() {
        console.log(txt)
    }

    display()
}

someFunction();

// 10 - mais sobre closure

const multiplicationClosure = (n) => {
    return (m) => {
        return n * n;
    };
};

const c1 = multiplicationClosure(8);

const c2 = multiplicationClosure(15);

console.log(c1);

console.log(c2);

console.log(c1(8));

console.log(c2(18));

// 11 - recursion

const untilTen = (n, m) => {
    if(n < 10) {
        console.log("A função parou de executar!")
    } else {
        const x = n - m

        console.log(x)

        untilTen(x, m)
    }
}

untilTen(100, 7)

function factorial(x) {
    if(x === 0) {
        return 1;
    } else {
        return x * factorial(x - 1)
    }
}

const num = 6;

const result = factorial(num);

console.log(`O fatorial do número ${num} é ${result}`);

                          ESTRUTURAS

// 1 - Variáveis
// let nome = "Vitor";

// console.log(nome);

// nome = "Vitor Vinicius";

// console.log(nome);

// const idade = 23;

// console.log(idade);

// // teste string e number 
// console.log(typeof 23);

// console.log(typeof "Vitor");

// // 2 - mais sobre variáveis
// let a = 20,
//     b = 30,
//     c = 50;

// console.log(a, b, c);

// const nomecompleto = "Vitor Vinicius";

// const nomeCompleto = "João Pereira";

// // teste de variáveis, mas mudando apenas no maiúsculo
// console.log(nomecompleto);
// console.log(nomeCompleto);

// // teste de caracters permitido
// let _teste = "ok";
// let $teste = "ok";

// console.log(_teste, $teste);

// // perguntar e responder // 3 - prompt
// // const age = prompt("Digite a sua idade:");

// // console.log(`Você tem ${age} anos.`);
// // // ` serve para transmitir resposta

// // 4 - alert
// // serve para alertar ualgo no começo da página alert("Testando");

// // const x = 80

// // alert(`O número é ${x}`);

// // 5 - Math
// console.log(Math.max(8, 3, 4));

// console.log(Math.floor (5.18));

// console.log(Math.ceil(5.1));
// // 1º escolhe o maior valor
// // 2º arredonda para o número inteiro antes do ponto
// // 3º arredonda o número por padrão antes do ponto

// // 6 - console
// console.log("teste!");

// console.error("erro!");

// console.warn("Aviso!");

// 7 - if
// const m = 20;

// if(m > 5) {
//   console.log("M é maior que 5!");
// }

// const user = "Japa";

// if(user === "Japa") {
//     console.log("Olá, Japa!");
// }

// if(user ==="Maria") {
//     console.log("Olá Maria!");
// }

// console.log(user === "Japa", user === "Maria");

// // 8 - else
// const loggedin = false

// if(loggedin) {
//     console.log("Está autenticado!");
// } else{
//     console.log("Não está autenticado!");
// }

// const a = 30
// const b = 50

// if(a > 5 && b > 20) {
//     console.log("Os números são mais altos!");
// } else{
//     console.log("Os números são menor!");
// }

// //  9 - else if
// if(1 > 2) {
//     console.log("Teste");
// } else if(2 > 3) {
//     console.log("Teste 2");
// } else if(5 > 1) {
//     console.log("Agora sim!");
// }

// const userName = "Vitor"
// const userAge = 23

// if(userName === "Jó") {
//     console.log("Bem vindo Jó!");
// } else if(userName === "Vitor" && userAge === 23) {
//     console.log("Olá Vitor, você tem 23 anos!")
// } else {
//     console.log("Nenhuma condição aceita!");
// }

// let lado_A = prompt("Digite o tamanho do lado_A");
// let lado_B = prompt("Digite o tamanho do lado_B");
// let lado_C = prompt("Digite o tamanho do lado_C");

// if(lado_A === lado_B && lado_B === lado_C && lado_C === lado_A) {
//     console.log("É um triângulo equilátero");
// } else if(lado_A === lado_B && lado_B !== lado_C && lado_A !== lado_C) {
//     console.log("É um triângulo isósceles");
// } else if(lado_A !== lado_B && lado_A !== lado_C && lado_B !== lado_C) {
//     console.log("É um triângulo escaleno");
// }
// 10 - while (repetição)

// let p = 0

// while(p < 5) {
//     console.log(`Repetindo ${p}`)
//     p = p + 1;
// }

// loop infinito
// let x = 10

// while(x > 5) {
//     console.log(`Imprimindo ${x}`)
// }

// 11 - do while (repetição)
// let o = 10

// do {
//     console.log(`Valor de o: ${o}`);
//     o--
// } while(o > 1);

// 12 - for (repetição)
// for(let t = 0; t < 10; t++) {
//     console.log("Repetindo algo...");
// }

// let r = 30

// for(r; r > 0; r = r - 1) {
//     console.log(`O r está diminuindo: ${r}`);
// }

// // 13 - identação (espaçamento)
// for(let u = 0; u < 10; u++) {
//   if(u * 2 > 10) {
//       console.log(`Maior que 10; ${u}`)
//   } else {
//     if(u / 2 === 0) {
//        console.log("deu 0")
//     }
//   }
// }

// 14 - break - (parar um loop)
// for(let g = 20; g > 10; g--) {
//     console.log(`O valor de g é: ${g}`);

//     if(g === 18) {
//         console.log("O g é 12!");
//         break;
//     }
// }

// 15 - continue
// for(let s = 0; s < 10; s = s +1) {
//     // operador resto = %
//     if(s % 2 === 0) {
//         console.log("Número ímpar!");
//         continue;
//     }
       
//     console.log(s);
// }

// 16 - switch
// const job = "Jogador de Futebol"

// switch(job) {
//     case "Jornalista":
//         console.log("Você é um jornalista!");
//         break
//     case "Advogado":
//         console.log("Você é um advogado");
//         break
//     case "Narrador":
//         console.log("Você é um narrador");
//         break
//     default:
//         console.log("Profissão não encontrada");
// }

// switch "errado" (não pode esquecer do break)
// const l = 100;

// switch (l) {
//     case 200:
//         console.log("L é 200!");
//     case 100:
//         console.log("L é 100!");
//     case 10:
//         console.log("L é 10!");
//     default:
//         console.log("L não foi encontrado!");
// }
  

  

