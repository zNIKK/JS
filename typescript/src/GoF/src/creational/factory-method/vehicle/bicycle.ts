import { Vehicle } from './vehicle';

export class Bicycle implements Vehicle {
  constructor(private name: string) {}
  pickUp(custumerName: string): void {
    console.log(`${this.name} está buscando ${custumerName}`);
  }
  stop(): void {
    console.log(`${this.name} está parou`);
  }
}
