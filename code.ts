import { performance } from 'perf_hooks'
import { coinChange } from './coin-change/recursive'

const start = performance.now()

console.log(coinChange([1, 2, 5], 11))

const end = performance.now()

console.log('\n\nTime:', end - start, 'ms\n\n')
