// Search for included options in the tariff
export default (option, additionallyOptions) => {
  const included = option.included
  const connectAdditionallyOptions = included.map(id => {
    const [find] = additionallyOptions.filter(item => item.id === id)
    return find.connect
  })
  const includedAdditionally = [included, ...connectAdditionallyOptions].flat()
  return includedAdditionally
}
