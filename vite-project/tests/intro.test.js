import { describe, test, it, expect } from "vitest";
import { max, fizzBuzz } from "../src/intro";

describe('max', () => {
  it('should return the first argument if it is greater', () => {
    expect(max(2,1)).toBe(2)
  })
  it('should return the second argument if it is greater', () => {
    expect(max(1,2)).toBe(2)
  })
  it('should return the first argument if arguments are equal', () => {
    expect(max(1,1)).toBe(1)
  })
})

describe('fizzBuzz', () => {
  it('should return "FizzBuzz" if arg is divided by 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  it('should return "Fizz" if n % 3 is equal to 0', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  it('should return "Buzz" if n % 5 is equal to 0', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  it('should return the input string if n is a string', () => {
    expect(fizzBuzz('dog')).toBe('dog');
  });
});
