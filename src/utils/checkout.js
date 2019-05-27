export default items => {
  const fixedSum = items.reduce((sum, item) => {
    if (item.fixed) return sum + item.amount
    return sum
  }, 0)

  const total = items.reduce((sum, item) => {
    if (!item.fixed) return sum + item.amount
    return sum
  }, 0)

  return [
    { name: 'Плата за подключение', amount: fixedSum },
    { name: 'Ежемесячный платеж', amount: total },
    { name: 'Ежегодный платеж', amount: total * 12 },
  ]
}
