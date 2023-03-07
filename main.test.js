const length = require('./stringLength.js');
const reverse = require('./reverseString.js');
const capitalization = require('./Capitalize.js');
const Calculator = require('./calculator.js');

// 1 - stringLength
describe('checking string lenght', () => {
  test('valid result', () => {
    expect(length('flower')).toBe(6);
  });
  test('in valid result', () => {
    expect(() => length('flower is red')).toThrow('error');
  });
});

// 2 - stringReversability
describe('checking string reversability', () => {
  test('Reverse flower string', () => {
    expect(reverse('flower')).toBe('rewolf');
  });
  test('Reverse garden string', () => {
    expect(reverse('garden')).toBe('nedrag');
  });
});

// 3- Calculator
describe('Performing Arthimatic operations', () => {
  describe('Addition', () => {
    test('4 + 6 = 10', () => {
      const calculator = new Calculator(4, 6);
      expect(calculator.add()).toBe(10);
    });
    test('7 + 6 = 13', () => {
      const calculator = new Calculator(7, 6);
      expect(calculator.add()).toBe(13);
    });
  });
  describe('Multiplication', () => {
    test('4 * 7 = 28', () => {
      const calculator = new Calculator(4, 7);
      expect(calculator.multiply()).toBe(28);
    });
    test('4 * 9 = 36', () => {
      const calculator = new Calculator(4, 9);
      expect(calculator.multiply()).toBe(36);
    });
  });
  describe('division', () => {
    test('20 / 5 = 4', () => {
      const calculator = new Calculator(20, 5);
      expect(calculator.devide()).toBe(4);
    });
    test('36 / 6 = 6', () => {
      const calculator = new Calculator(36, 6);
      expect(calculator.devide()).toBe(6);
    });
  });
  describe('subtraction', () => {
    test('20 - 5 = 15', () => {
      const calculator = new Calculator(20, 5);
      expect(calculator.subtract()).toBe(15);
    });
    test('36 - 6 = 30', () => {
      const calculator = new Calculator(36, 6);
      expect(calculator.subtract()).toBe(30);
    });
  });
});

// 4 - stringCapitaliation
describe('capitalization', () => {
  describe('string is capatilized', () => {
    test('capitalize the string', () => {
      expect(capitalization('rIver')).toBe('River');
    });
  });
  describe('rejected inputs', () => {
    test('Empty string', () => {
      expect(capitalization('')).toBe('empty string');
    });
    test('Not a string', () => {
      expect(() => capitalization(123)).toThrow('Not a string');
    });
  });
});
