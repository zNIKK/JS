export class Empresa {
  public readonly nome: string; // public não necessário
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;
  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adcionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}
export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}
const empresa1 = new Empresa('Udemy', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Luiz', 'Otávio');
const colaborador2 = new Colaborador('Maria', 'Miranda');
const colaborador3 = new Colaborador('João', 'Vieira');

empresa1.adcionaColaborador(colaborador1);
empresa1.adcionaColaborador(colaborador2);
empresa1.adcionaColaborador(colaborador3);
empresa1.adcionaColaborador({
  nome: 'Luiz',
  sobrenome: 'Miranda',
});
// empresa1.nome = 'Facebook'; // NÃO DEIXA POIS ELE É READONLY

empresa1.mostrarColaboradores();
