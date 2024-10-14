const add = require('./add')
const capitalise = require('./capitalise')
const reverse = require('./reverse')
const calculator = require('./calculator')
const caeserCipher = require('./caeser')
const analyzeArr = require('./analyzeArr')

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3)
})

test('capitalises first letter of string', () => {
  expect(capitalise('alriGht')).toBe('Alright')
})

test('deals with empty string', () => {
  expect(capitalise('')).toBe('')
})

test('deals with string of space', () => {
  expect(capitalise(' ')).toBe(' ')
})

test('reverses string', () => {
  expect(reverse('HeLlo')).toBe('olLeH')
})

test('deals with empty string', () => {
  expect(reverse('')).toBe('')
})

test('adds two numbers together', () => {
  expect(calculator.add(2, 3)).toBe(5)
})

test('subtracts two numbers', () => {
  expect(calculator.subtract(13, 7)).toBe(6)
})

test('multiply two numbers together', () => {
  expect(calculator.multiply(3, 7)).toBe(21)
})

test('divide two numbers', () => {
  expect(calculator.divide(12, 3)).toBe(4)
})

test('shift string by 3', () => {
  expect(caeserCipher('hello world', 3)).toBe('khoor zruog')
})

test('preserve punctuation', () => {
  expect(caeserCipher('hello, world!', 3)).toBe('khoor, zruog!')
})

test('preserve punctuation and letter case', () => {
  expect(caeserCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})

test('key should wrap around to start of alphabet', () => {
  expect(caeserCipher('xyz', 3)).toBe('abc')
})

