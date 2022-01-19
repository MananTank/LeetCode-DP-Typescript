import { maxMoneyRobbed as recursiveProgram } from '../recursive'

function testProgram(program: (nums: number[]) => number) {
  expect(program([2, 7, 9, 3, 1])).toBe(12)
  expect(program([1, 2, 3, 1])).toBe(4)
}

test('works', () => {
  testProgram(recursiveProgram)
})
