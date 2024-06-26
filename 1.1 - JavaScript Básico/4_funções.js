// Funções

// As funções são blocos de código JavaScript parametrizados que podemos chamar.
function plus1(x) { // Define uma função chamada "plus1", com o parâmetro "x"
    return x+1; // Retorna um valor uma unidade maior do que o que foi passado
} // As funções são incluídas entre chaves

plus1(y) // => 4: y é 3; portanto, essa chamada retorna 3+1
var square = function(x) { // As funções são valores e podem ser atribuídas a
 // variáveis
 return x*x; // Calcula o valor da função
}; // Um ponto e vírgula marca o fim da atribuição.
square(plus(y)) // => 16: chama duas funções em uma única expressão

// Quando funções recebem as propriedades de um objeto, as chamamos de "métodos". Todos os objetos de JavaScript têm métodos:
var a = []; // Cria um array vazio
a.push(1,2,3); // O método push() adiciona elementos em um array
a.reverse(); // Outro método: inverte a ordem dos elementos
// Também podemos definir nossos próprios métodos. A palavra-chave "this" se refere ao objeto no qual o método é definido: neste caso, o array de pontos anterior.
points.dist = function() { // Define um método para calcular a distância entre pontos
 var p1 = this[0]; // Primeiro elemento do array que chamamos
 var p2 = this[1]; // Segundo elemento do objeto "this"
 var a = p2.x-p1.x; // Diferença em coordenadas X
 var b = p2.y-p1.y; // Diferença em coordenadas Y
return Math.sqrt(a * a + // O teorema de Pitágoras 
b * b); // Math.sqrt() calcula a raiz quadrada
};
points.dist() // => 1,414: distância entre nossos 2 pontos
