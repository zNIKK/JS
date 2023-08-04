export abstract class Discount {
  protected discount = 0;

  calculate(value: number): number {
    return value - value * this.discount
  };
}

export class FiftyPercentDiscount extends Discount {
  protected readonly discount = 0.5;
}

export class TenPercentDiscount extends Discount {
  protected readonly discount = 0.1;
}


export class NoDiscount extends Discount {
  // calculate(value: number): number {
  //   return 10000000000000000000000
  // };
  // muda o comportamento
   
  // está quebrando o principio de Liskov
}

// ESTRATEGY - GoF