/**
 * @param moneyInHouses - money in houses
 * @returns maximum amount of money you can rob tonight without alerting the police.
 */
export function maxMoneyRobbed(moneyInHouses: number[]): number {
  const memo: number[] = []

  /**
   * @param i - index of the house
   * @returns - max money robbed from house 0 to i
   */
  function _maxMoneyRobbed(i: number) {
    // base case 1: if there is only 1 house, rob it
    if (i === 0) return moneyInHouses[0]

    // base case 2: if there are two houses, rob the one that has more money
    if (i === 1) return Math.max(moneyInHouses[0], moneyInHouses[1])

    // base case 3: if we have already calculated answer of this state, return answer
    if (i in memo) return memo[i]

    /**
     * max money we can get if we rob house i robbed =
     * money gotten from house i + max money gotten from upto house i-2
     */
    const moneyIfHouseIRobbed = moneyInHouses[i] + _maxMoneyRobbed(i - 2)

    /**
     * max money we can get if we don't rob house i =
     * max money we can get from the house i-1
     */
    const moneyIfHouseINotRobbed = _maxMoneyRobbed(i - 1)

    // pick the the that gives more money and save it in memo
    memo[i] = Math.max(moneyIfHouseIRobbed, moneyIfHouseINotRobbed)

    // return the answer
    return memo[i]
  }

  return _maxMoneyRobbed(moneyInHouses.length - 1)
}
