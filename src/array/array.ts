export default function arraySumple() {
  // シンプルな配列の型定義
  const colors: string[] = ['red', 'blue']
  colors.push('yellow')
  colors.push('green')

  console.log('Array array sumple 1:', colors)

  // 上記のと同義
  const even: Array<number> = [2, 4, 6]
  even.push(8, 10, 12)

  console.log('Array array sumple 2:', even)

  const ids: (string | number)[] = ['ABC', 123]
  ids.push('DEF', 456)

  console.log('Array array sumple 3:', ids)

  // 配列の型推論
  const generateSomeArray = () => {
    const _someArray = [] //any[]
    _someArray.push(123) //number[]
    _someArray.push('ABC') //(number | string)[]
    _someArray.push(true) //(number | string | boolean)[]
    return _someArray
  }

  const someArray = generateSomeArray()
  someArray.push(456)
  someArray.push(true)

  console.log('Array array sumple 4:', someArray, typeof someArray)

  //イミュータブルな配列<書き換え不可能>
  const commands: readonly string[] = ['git add', 'git commit', 'git push']
  // commands.push("git fetch") //追加できない
  // commands[2] = "git pull" //書き換えもできない

  console.log('Array array sumple 5:', commands)
}
