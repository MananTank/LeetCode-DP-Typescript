/**
 * @param coins - array of coin values
 * @param targetAmount - amount we want to reach using the coins
 * @returns - minimum number of coins required to reach targetAmount
 * Time: O(coins.length * targetAmount)
 * Space: O(targetAmount)
 */
export function coinChange(coins: number[], targetAmount: number) {
  /**
   * memo[i] is the minimum number of coins needed to get a i amount
   */
  const minCoins = new Array(targetAmount + 1).fill(Infinity)

  // 0 coins needed to get total of 0
  minCoins[0] = 0

  for (let c = 0; c < coins.length; c++) {
    for (let amount = 1; amount < targetAmount + 1; amount++) {
      if (amount >= coins[c]) {
        const ignore = minCoins[amount]
        const pick = minCoins[amount - coins[c]] + 1
        minCoins[amount] = pick < ignore ? pick : ignore
      }
    }
  }

  return minCoins[targetAmount] === Infinity ? -1 : minCoins[targetAmount]
}
