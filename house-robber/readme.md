# 198. House Robber 🤑

https://leetcode.com/problems/house-robber/

You are a professional robber planning to **rob houses along a street**. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that **adjacent houses have security systems connected** and it will automatically **contact the police if two adjacent houses were broken into** on the same night.

Given an integer array nums representing the amount of money of each house, **return the maximum amount of money you can rob tonight without alerting the police**.


## Example 1

```
Input: nums = [1,2,3,1]
Output: 4 (1 + 3)
```

## Example 2

```
Input: nums = [2,7,9,3,1]
Output: 12
```

### Constraints

```
1 <= nums.length <= 100
0 <= nums[i] <= 400
```

<br/>

# Solution 💶

### Base Cases

* If there is only 1 house, we should rob that house
* If there are two houses, we can only rob one house - so we should rob the house with the most money


### State Transition Equation

if there are n houses, and let's say that you have already done the optimal robbing and you are on the house `n`. let's backtrack to see where you must have came from.


when you are on house `n`, you can either rob it or not rob it

* if you rob house `n`, the previous robbing must happen at house `n-2`
* if you don't rob house `n`, the previous robbing must happen at house `n-1`


```
option 1 ( if house n is robbed )

max money from robbing n houses =
  money gotten from house n
  +
  max money gotten from robbing n-1 houses
```

```
option 2 ( if house n is not robbed )

max money from robbing n houses =
  money gotten from house n-1
```

we calculate both the possibilities and then pick one that yields more money

```
max money from robbing n houses =
  max (option1, option2)
```

<br/>

# Code 👩‍💻

[Recursive Solution](/house-robber/recursive.ts)

[Iterative Solution](/house-robber/iterative.ts)