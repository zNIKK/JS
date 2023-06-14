const objeto1: Record<string, string | number> = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};

console.log(objeto1);
type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

// Required = transforma tudo que era opcional para requerido
type PessoaRequired = Required<PessoaProtocol>;
// Partial = transforma tudo que era requerido para opcional
type PessoaPartial = Partial<PessoaRequired>;
// Readonly = transforma tudo em readonly
type PessoaReadonly = Readonly<PessoaRequired>;
// Pick = pegar coisas propriedades expecificas
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

const objeto2: PessoaProtocol = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};

// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>; // computa todos os tipos que estão em ABC que não estão em CDE
type TipoExtract = Extract<ABC, CDE>; // computa todos os tipos que estão em ABC que também estão em CDE

// -------------

type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'asjqkdjqw2143jm1id1j28',
  nome: 'Luiz',
  idade: 30,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log('API:');
console.log(accountApi);

// module mode
export default 1;
