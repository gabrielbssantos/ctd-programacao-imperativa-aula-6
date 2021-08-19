// Calculadora - Nível I

/*
1. Crie um arquivo calculadora.js que terá as diferentes operações para realizar.
2. Crie uma função adicionar, que deverá receber dois parâmetros e retornar a soma deles.
3. Crie uma função de subtração, que deverá receber dois parâmetros e retornar a subtração do primeiro menos o segundo.
4. Crie uma função de multiplicação, que deverá receber dois parâmetros e retornar o resultado de sua multiplicação.
5. Crie uma função de divisão, que receberá dois parâmetros e retornará o resultado da divisão do primeiro sobre o segundo.
*/


// Soma
function adicionar(num1, num2) {
    let result = num1 + num2;
    return result;
};


// Subtração
function subtrair(num1, num2) {
    let result = num1 - num2;
    return result;
};


// Multiplicação
function multiplicar(num1, num2) {
    let result = num1 * num2;
    return result;
};

// Divisão
function dividir(num1, num2) {
    let result = num1 / num2;
    return result;
};



// Calculadora - Nível II

/*
1. No seu arquivo calculadora.js,  a partir das 4 funções feitas anteriormente, crie um console.log no qual você irá colocar uma string para indicar que abaixo dela você começará a testar as funções, por exemplo:
console.log ("-------------- Teste de Operações / Calculadora --------------")
2. Execute a função que soma e a função que subtrai, passando quaisquer dois números como argumentos. Mostrar resultados no console.
3. Execute a função que multiplica, passando quaisquer dois números como argumentos. Mostre o resultado no console.
4. Execute a função que faz divisão, passando quaisquer dois números como argumentos. Mostre o resultado no console.
5. Execute a função que faz divisão, passando agora o número zero como um dos dois argumentos. Mostre o resultado no console.
*/

function testaOperacoes(num1, num2, num3) {

    let result = `
    -------------- Teste de Operações / Calculadora --------------\n
    1. ${num1} + ${num2} é igual a: ${adicionar(num1, num2)} \n
    2. ${num1} - ${num2} é igual a: ${subtrair(num1, num2)} \n
    3. ${num1} * ${num2} é igual a: ${multiplicar(num1, num2)} \n
    4. ${num1} / ${num2} é igual a: ${dividir(num1, num2)} \n
    5. ${num1} elevado ao quadrado é igual a: ${quadradoDoNumero(num1)} \n
    6. A média de ${num1}, ${num2} e ${num3} é igual a: ${mediaDeTresNumeros(num1, num2, num3)} \n
    7. ${num2}% de ${num1} é igual a: ${calculaPorcentagem(num1, num2)} \n
    8. ${num1} representa ${geradorDePorcentagem(num1, num2)}% de ${num2} \n
    `
    console.log(result);
};

testaOperacoes(10, 10, 10);



// Calculadora - Nível III - Funções Extras

/*
1. Crie uma função chamada quadradoDoNumero, que recebe um número como parâmetro e deve retornar esse número multiplicado por ele mesmo, ou seja, ao quadrado.
Importante: quadradoDoNumero() deve usar a função multiplicação() para calcular o quadrado do parâmetro inserido em power().
2. Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números, que serão inseridos por parâmetro.
Importante: Em mediaDeTresNumeros() você precisará usar algumas funções criadas anteriormente em nossa calculadora.
3. Crie a função calculaPorcentagem, que receberá dois parâmetros: o número total e a porcentagem que deseja calcular, e que deverá retornar x% de totalPorcentagem.
Exemplo: calculaPorcentagem(300, 15)  (deve retornar 45, pois é 15% de 300). 
Importante: calculaPorcentagem() você precisará usar algumas funções criadas anteriormente em nossa calculadora.
4. Crie uma função geradorDePorcentagem que leva dois parâmetros, e que deverá retornar a porcentagem do primeiro em relação ao segundo parâmetro.
Exemplo: geradorDePorcentagem (2, 200) (deve retornar 1 já que 2 é 1% de 200)
*/

function quadradoDoNumero(num1) {
    result = multiplicar(num1, num1);
    return result;
};

function mediaDeTresNumeros(num1, num2, num3) {
    sum = adicionar(adicionar(num1, num2), num3);
    result = dividir(sum, 3);
    return result;
};

function calculaPorcentagem(num1, num2) {
    result = dividir(multiplicar(num2, num1), 100);
    return result;
};

function geradorDePorcentagem(num1, num2) {
    result = multiplicar(dividir(num1, num2), 100);
    return result;
};