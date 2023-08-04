describe('Primitive Values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBeGreaterThan(9) // maior que 9
    // expect(number).toBeGreaterThanOrEqual(9)
    // expect(number).toBeLessThan(9)

    expect(number).toBeCloseTo(10.001) // esteja perto de 10
    expect(number).toBeCloseTo(9.996) // esteja perto de 10

    expect(number).not.toBeNull();

    expect(number).toHaveProperty('toString') // checar se existe a propriedate "toString" dentro de number
  })
  
  it('should split test', () => {
    const number = 10;
    expect(number).toBe(10);
    // expect(number).toEqual(11);

    expect(number).not.toBeFalsy()
    // expect(number).toBeTruthy()
  })
})

describe('Primitive Values', () => {
  it('should test jest assertions with objects', () => {
    const person = {name: 'Luiz', age: 30 };
    const anotherPerson = { ...person };
    // toBe = ele não é o outro objeto literalmente
    // expect(person).toBe(anotherPerson); // vai dar erro
    // toEqual = ele é igual o outro objeto
    expect(person).toEqual(anotherPerson);
    expect(person).toHaveProperty('age', 30); // no objeto existe a propriedade age e ela tem o valor de 30

    expect(person.name).toBe('Luiz');
  })
})