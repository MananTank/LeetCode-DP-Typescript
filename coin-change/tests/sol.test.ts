import { coinChange as iterative } from '../iterative'
import { coinChange as recursive } from '../recursive'

type Program = (coins: number[], target: number) => number

function testProgram(program: Program) {
  expect(program([1, 2, 5], 11)).toBe(3)
  expect(program([2], 3)).toBe(-1)
  expect(program([1], 0)).toBe(0)
}

test('works', () => {
  testProgram(recursive)
  testProgram(iterative)
})
