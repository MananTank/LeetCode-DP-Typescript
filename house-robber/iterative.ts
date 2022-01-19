export function maxMoneyRobbed(moneyInHouses: number[]) {
  // if there are no houses, no money can be robbed
  if (moneyInHouses.length === 0) return 0

  let m1 = moneyInHouses[0]
  if (moneyInHouses.length === 1) return m1

  let m2 = Math.max(moneyInHouses[0], moneyInHouses[1])
  if (moneyInHouses.length === 2) return m2

  for (let i = 2; i < moneyInHouses.length; i++) {
    const rob = moneyInHouses[i] + m1
    m1 = m2
    if (rob > m2) m2 = rob
  }

  return m2
}
