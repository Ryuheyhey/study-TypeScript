export default function genericBasicSample() {
  // ジェネリック型を使わない場合
  const stringReduce = (array: string[], initialValue: string): string => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }

  console.log(
    'Generic basic sample 1:',
    stringReduce(
      ['僕の名前は', 'なんだっけな。', '思い出した。', 'なんだっけ？'],
      'そういえば、'
    )
  )

  const numberReduce = (array: number[], initialValue: number): number => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }

  console.log('Generic basic sample 2:', numberReduce([12, 14, 1300, 12], 0))

  type GenericReduce<T> = {
    (array: T[], initialValue: T): T
  }

  const genericStringReduce: GenericReduce<string> = (array, initialValue) => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }

  console.log(
    'Generic basic sample 3:',
    stringReduce(
      ['僕の名前は', 'なんだっけな。', '思い出した。', 'なんだっけ？'],
      'そういえば、'
    )
  )

  const genericNumberReduce: GenericReduce<number> = (array, initialValue) => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }

  console.log('Generic basic sample 4:', numberReduce([12, 14, 1300, 12], 0))

  // いろんなジェネリック型
  // 完全な呼び出しシグネチャ
  type GenericReduce2<T> = {
    (array: T[], initialValue: T): T
  }
  //完全な（範囲を分ける）
  type GenericReduce3 = {
    <T>(array: T[], initialValue: T): T
    <U>(array: U[], initialValue: U): U
  }

  //呼び出しシグネチャ（省略記法）
  type GenericReduce4<T> = (array: T[], initialValue: T) => T
  type GenericReduce5 = <T>(array: T[], initialValue: T) => T
}
