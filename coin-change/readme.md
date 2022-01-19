# 322. Coin Change

<https://leetcode.com/problems/coin-change/>

You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

**Return the fewest number of coins that you need to make up that amount**. If that amount of money cannot be made up by any combination of the coins, return `-1`.

You may assume that you have an infinite number of each kind of coin.

### Example 1

```
Input: coins = [1,2,5], amount = 11
Output: 3 (5 + 5 + 1)
```

### Example 2

```
Input: coins = [2], amount = 3
Output: -1
```

### Example 3

```
Input: coins = [1], amount = 0
Output: 0
```

### Constraints

```
1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104
```

<br/>

## Solution

### Base Case

If the total amount is 0, no coins are needed

### State Transition Equation

If the amount is non-zero, we can pick any coin as the first one, so we will pick all possible coins as the first one and for the remaining amount we do the same thing

```
minCoins(target) =
  - 0 if target is 0
  - 1 + min(minCoins(target - coin) foreach coins)
```
