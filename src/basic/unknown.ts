export default function unknownSample() {
  const maybeNumber: unknown = 10

  console.log('unknown sample 1', typeof maybeNumber, maybeNumber)

  const isFoo = typeof maybeNumber === 'number'
  console.log('unknown sample 2', typeof isFoo, isFoo)

  if (typeof maybeNumber === 'number') {
    const sum = maybeNumber + 10
    console.log('unknown sample 3' + sum)
  }
}
