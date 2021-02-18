export default function primitiveSample() {
  const name = '虎はっく'
  console.log('primitive sample 1', typeof name, name)

  const age = 28
  console.log('primitive sample 2', typeof age, age)

  const isSingle = true
  console.log('primitive sample 3', typeof isSingle, isSingle)

  const isOver: boolean = age >= 40
  console.log('primitive sample 4', typeof isOver, isOver)
}
