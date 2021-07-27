const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:

    // Teste que o retorno da função é um array.
    assert.strictEqual(Array.isArray(productDetails('a', 'b')), true, 'Não é um array.');
    // Referência teste de array: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(productDetails('a', 'b').length, 2, 'Tamanho do array diferente do esperado.');

    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof(productDetails('a', 'b')[0]), 'object', 'Não retornou o tipo objeto.');
    assert.deepStrictEqual(typeof(productDetails('a', 'b')[1]), 'object', 'Não retornou o tipo objeto.');

    // Teste que os dois objetos são diferentes entre si.
    let isDiff = productDetails('a', 'b')[0] !== productDetails('a', 'b')[1];
    assert.deepStrictEqual(isDiff, true, 'Os objetos são idênticos');

    // Teste que os dois productIds terminam com 123.
    assert.deepStrictEqual(productDetails('a', 'b')[0].details.productId.slice(-3), '123', 'producId não terminou com 123.');
    assert.deepStrictEqual(productDetails('a', 'b')[1].details.productId.slice(-3), '123', 'producId não terminou com 123.');
    // Referência do slice: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/slice
  });
});
