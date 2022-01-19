/**
 *
 * @param coins - array of coin values
 * @param targetAmount - amount we want to reach using the coins
 * @returns - minimum number of coins required to reach targetAmount
 * Time: O(coins.length * targetAmount)
 * Space: O(targetAmount)
 */
export function coinChange(coins: number[], targetAmount: number) {
  // min coins needed to create n amount is saved at minCoins[n]
  const minCoins: number[] = []

  const ans = _coinChange(targetAmount)
  return ans === Infinity ? -1 : ans

  function _coinChange(amount: number) {
    // zero coins are required to create 0 amount
    if (amount === 0) return 0
    if (amount in minCoins) return minCoins[amount]

    let minCoinsNeeded = Infinity

    // try creating amount with each coin
    // pick the minimum out of all
    for (let i = 0; i < coins.length; i++) {
      if (coins[i] <= amount) {
        const coinsNeeded = 1 + _coinChange(amount - coins[i])
        if (coinsNeeded < minCoinsNeeded) {
          minCoinsNeeded = coinsNeeded
        }
      }
    }

    // save to memo
    minCoins[amount] = minCoinsNeeded

    return minCoinsNeeded
  }
}
