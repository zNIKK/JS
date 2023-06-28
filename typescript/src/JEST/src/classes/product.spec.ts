import { Product } from './product';

const createSut = (name: string, price: number) => {
  return new Product(name, price);
}
describe('Product', () => {
  afterEach(() => jest.clearAllMocks()); // limpar os mocks

  it('should return undefined', () => {
    const sut = createSut('Camiseta', 49.9);
    expect(sut).toHaveProperty('name', 'Camiseta');
    expect(sut.price).toBeCloseTo(49.9);
  })

})