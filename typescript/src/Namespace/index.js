/* eslint-disable @typescript-eslint/no-namespace */
/**
 * @type {{ PessoaDoNamespace?: any; nomeDoNamespace?: any; }}
 */
var MeuNamespace;
(function (MeuNamespace) {
  MeuNamespace.nomeDoNamespace = 'Luiz';
  var PessoaDoNamespace = /** @class */ (function () {
    function PessoaDoNamespace(nome) {
      this.nome = nome;
    }
    return PessoaDoNamespace;
  })();
  MeuNamespace.PessoaDoNamespace = PessoaDoNamespace;
  var pessoa = new PessoaDoNamespace('Luiz');
})(MeuNamespace || (MeuNamespace = {}));
var pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Luiz');
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="058.ts" />
console.log(MeuNamespace.nomeDoNamespace);
