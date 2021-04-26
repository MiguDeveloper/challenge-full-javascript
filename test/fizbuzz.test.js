const { it, expect } = require('@jest/globals');
const { fizzbuzz } = require('../challenge/fizzbuzz');

describe('FizzBuzz', () => {
  it('should print 0 if they recive 0', () => {
    const expected = 0;
    const result = fizzbuzz(0);
    expect(result).toBe(expected);
  });

  it('should print 1 if they recive 1', () => {
    const expected = 1;
    const result = fizzbuzz(1);
    expect(result).toBe(expected);
  });

  it('should print fizz if they receive 3', () => {
    const expected = 'fizz';
    const result = fizzbuzz(3);
    expect(result).toBe(expected);
  });

  it('should print buzz if they receive 5', () => {
    const expected = 'buzz';
    const result = fizzbuzz(5);
    expect(result).toBe(expected);
  });

  it('should print fizzbuzz if they receive 15', () => {
    const expected = 'fizzbuzz';
    const result = fizzbuzz(15);
    expect(result).toBe(expected);
  });

  it('should print fizz if they receive multiple of 3', () => {
    const expected = 'fizz';
    const result = fizzbuzz(6);
    expect(result).toBe(expected);
  });

  it('should print buzz if they recieve multiple of 5', () => {
    const expected = 'buzz';
    const result = fizzbuzz(10);
    expect(result).toBe(expected);
  });

  it('should print fizzbuss if they receive multiple de 5 y 3', () => {
    const expected = 'fizzbuzz';
    const result = fizzbuzz(45);
    expect(result).toBe(expected);
  });

  it('should print 0 if they receive string', () => {
    const expected = 0;
    const result = fizzbuzz('kkk');
    expect(result).toBe(expected);
  });

  it('test', () => {
    expect(true).toBeTruthy();
  });
});
