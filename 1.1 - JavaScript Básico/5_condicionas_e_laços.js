// Condicionais e laços em JS

// As instruções JavaScript incluem condicionais e laços que usam a sintaxe
// das linguagens C, C++, Java e outras.
function abs(x) { // Uma função para calcular o valor absoluto
    if (x >= 0) { // A instrução if...
    return x; // executa este código, se a comparação for verdadeira.
    } // Este é o fim da cláusula if.
    else { // A cláusula opcional else executa seu código se
    return -x; // a comparação for falsa.
    } // Chaves são opcionais quando há 1 instrução por cláusula.
   } // Observe as instruções return aninhadas dentro de if/else.
 
//Fatorial 1
function factorial(n) { // Uma função para calcular fatoriais
        var product = 1; // Começa com o produto de 1
        while(n > 1) { // Repete as instruções que estão em {}, enquanto a expressão em () for verdadeira
        product *= n; // Atalho para product = product * n;
        n--; // Atalho para n = n – 1
        } // Fim do laço
        return product; // Retorna o produto
    }
factorial(4) // => 24: 1*4*3*2

//Fatorial 2
function factorial2(n) { // Outra versão, usando um laço diferente
    var i, product = 1; // Começa com 1
    for(i=2; i <= n; i++) // Incrementa i automaticamente, de 2 até n
    product *= i; // Faz isso a cada vez. {} não é necessário para laços de 1 linha
    return product; // Retorna o fatorial
   }
   factorial2(5) // => 120: 1*2*3*4*5
   