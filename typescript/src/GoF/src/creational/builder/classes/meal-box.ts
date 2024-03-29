import { MealCompositeProtocol } from '../interface/meal-composite-protocol';

export class MealBox implements MealCompositeProtocol {
  name: string;
  private readonly _children: MealCompositeProtocol[] = [];

  getPrice(): number {
    return this._children.reduce((sum, meal) => sum + meal.getPrice(), 0);
  }

  add(...meal: MealCompositeProtocol[]): void {
    meal.forEach((item) => this._children.push(item));
  }
}
