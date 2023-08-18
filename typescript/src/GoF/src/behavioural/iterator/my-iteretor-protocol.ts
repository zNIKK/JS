export interface MyIteratorProtocol<T> extends Iterator<T> {
  reset(): void;

  next(): IteratorResult<T>;
}
