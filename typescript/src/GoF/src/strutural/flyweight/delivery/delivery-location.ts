import { DeliveryLocationData } from './delivery.types';

export class DeliveryLocation implements DeliveryLocation {
  constructor(private readonly intrinsicState: DeliveryLocationData) {}
  deliver(nome: string, number: string): void {
    console.log('Entrega para %s', nome);
    console.log('Em', this.intrinsicState.street, this.intrinsicState.city);
    console.log('Número:', number);
    console.log('###');
  }
}
