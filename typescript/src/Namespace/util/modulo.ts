import _ from 'lodash';

_.mul = function (array: number[]): number {
  return array.reduce((total, actual) => total * actual, 1);
};
// O metodo que multiplica todos os elementos da array
export default _;
