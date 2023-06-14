interface ImcOptions {
  weight: number;
  height: number;
}
export default class Imc {
  private _imcOption: ImcOptions[] = [];

  constructor(public details: string) {}
  addWeightAndHeight(WeightAndHeight: ImcOptions): void {
    this._imcOption.push(WeightAndHeight); // {weight: 123, height: 123 }
  }

  calculate(): void {
    console.log(this.details);
    const weight = this._imcOption[0].weight;
    const height = this._imcOption[0].height;
    const calc = weight / (height * height);
    console.log(calc.toFixed(2));
    this.obesity(calc);
  }

  obesity(calc: number): void {
    if (calc <= 18.5) {
      console.log('thinness');
    } else if (calc <= 24.9) {
      console.log('Normal');
    } else if (calc <= 29.9) {
      console.log('overweight');
    } else if (calc <= 39.9) {
      console.log('Obesity');
    } else if (calc >= 40) {
      console.log('Severe Obesity');
    }
  }
}

const imc = new Imc('Qual o seu IMC?');
imc.addWeightAndHeight({ weight: 33, height: 1.6 });
imc.calculate();

// Altura
// Peso

// MENOR QUE    18,5	         MAGREZA	          0
// ENTRE        18,5 E 24,9	   NORMAL	            0
// ENTRE        25,0 E 29,9	   SOBREPESO	        I
// ENTRE        30,0 E 39,9	   OBESIDADE	        II
// MAIOR QUE    40,0	         OBESIDADE GRAVE	  III
