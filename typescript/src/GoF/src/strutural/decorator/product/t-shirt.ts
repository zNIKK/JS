import { ProductProtocol } from './product-interface';

export class TShirt implements ProductProtocol {
  private name = 'Camiseta';
  private price = 49.9;

  getPrice(): number {
    return this.price;
  }

  getName(): string {
    return this.name;
  }
}
