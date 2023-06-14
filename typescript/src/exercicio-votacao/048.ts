// DECLARA OPÇÕES DE VOTAÇÃO
interface VotationOption {
  numberOfVotes: number;
  option: string;
}
// (BACK END)
export default class Votation {
  // Declara como um array de opções
  private _votationOptions: VotationOption[] = [];
  // No constructor eu tenho details que são a frase
  constructor(public details: string) {}
  // Essa função é usada para colocar opções no array 'votationOption' Exemplo: addVotationOption({option: Python, numberOfVotes: 0})
  addVotationOption(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption);
  }

  // Essa função é usada para votar no indice que eu selecionar. Exemplo: vote(0)
  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfVotes += 1;
  }

  // get para usar o '_votationOptions' que está privado
  get votationOptions(): VotationOption[] {
    return this._votationOptions;
  }
}
// (FRONT END)
// App usado para implementar as opções da 'Votation' e organizar
export class VotationApp {
  // array da Votation
  private votations: Votation[] = [];

  // acrescenta a class 'Votation'
  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  // Mostra as Votações que estão dentro da array
  showVotations(): void {
    // mostra a frase
    for (const votation of this.votations) {
      console.log(votation.details);
      // mostra as opções
      for (const votationOption of votation.votationOptions) {
        console.log(votationOption.option, votationOption.numberOfVotes);
      }
      console.log('###');
    }
  }
}

const votation1 = new Votation('Qual sua linguagem de programação favorita?');
votation1.addVotationOption({ option: 'Python', numberOfVotes: 0 });
votation1.addVotationOption({ option: 'Javascript', numberOfVotes: 0 });
votation1.addVotationOption({ option: 'Typescript', numberOfVotes: 0 });

votation1.vote(0);
votation1.vote(2);
votation1.vote(2);
votation1.vote(1);
votation1.vote(0);
votation1.vote(2);

const votation2 = new Votation('Qual sua cor favorita?');
votation2.addVotationOption({ option: 'Vermelho', numberOfVotes: 0 });
votation2.addVotationOption({ option: 'Verde', numberOfVotes: 0 });
votation2.addVotationOption({ option: 'Azul', numberOfVotes: 0 });
votation2.addVotationOption({ option: 'Roxo', numberOfVotes: 0 });
votation2.addVotationOption({ option: 'Marrom', numberOfVotes: 0 });

votation2.vote(1);
votation2.vote(1);
votation2.vote(0);
votation2.vote(0);
votation2.vote(4);
votation2.vote(2);

const votationApp = new VotationApp();
votationApp.addVotation(votation1);
votationApp.addVotation(votation2);

votationApp.showVotations();
