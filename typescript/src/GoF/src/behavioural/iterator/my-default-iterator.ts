import { MyDataStructure } from './my-data-structure';
import { MyIteratorProtocol } from './my-iteretor-protocol';

export class MyDefaultIterator implements MyIteratorProtocol<string> {
  constructor(private readonly dataStructure: MyDataStructure) {}

  reset(): void {
    throw new Error('Method not implemented.');
  }
  next(): IteratorResult<string> {
    return { value: '', done: true };
  }
}
