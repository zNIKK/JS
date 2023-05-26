const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

// objetoA.chaveA = 'Nova Chave'; readonly
objetoA.chaveB = 'Outro Valor';
objetoA.chaveD = 'Nova Chave';
