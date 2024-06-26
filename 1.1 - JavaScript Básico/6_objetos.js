// Objetos

// Define uma função construtora para inicializar um novo objeto Point
function Point(x,y) { // Por convenção, as construtoras começam com letras
    // maiúsculas
    this.x = x; // A palavra-chave this é o novo objeto que está sendo
    // inicializado
    this.y = y; // Armazena os argumentos da função como propriedades do
    // objeto
   } // Nenhum return é necessário
   // Usa uma função construtora com a palavra-chave "new" para criar instâncias
   var p = new Point(1, 1); // O ponto geométrico (1,1)
   // Define métodos para objetos Point atribuindo-os ao objeto prototype associado à função construtora.
   Point.prototype.r = function() {
       return Math.sqrt( // Retorna a raiz quadrada de x2 + y2
    this.x * this.x + // Este é o objeto Point no qual o método...
    this.y * this.y //...é chamado.
    );
   };
   // Agora o objeto Point b (e todos os futuros objetos Point) herda o método r()
p.r() // => 1,414...
   