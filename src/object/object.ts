export default function objectSumple() {
  // オブジェクトリテラル記法での型定義
  let country: {
    language: string
    name: string
  } = {
    language: 'Japanese',
    name: 'Ryuheyhey',
  }

  console.log('Object object sample 1:', country)
  console.log('Object object sample 2 :', typeof country.name)

  country = {
    language: 'English',
    name: 'USA',
  }

  console.log('Object object sample 3:', country)

  // オプショナルとreadonly
  const Ryuheyhey: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 19,
    lastName: 'Yamada',
    firstName: 'Tarou',
  }

  Ryuheyhey.gender = '漢'
  Ryuheyhey.lastName = 'KAMADO'
  // Ryuheyhey.firstName = "TANZIRO"

  console.log('Object object sample 4', Ryuheyhey)

  // インデックスシグネチャ
  const capitals: {
    [countryName: string]: string
  } = {
    Japan: 'Tokyo',
    Korea: 'Seoul',
  }

  capitals.China = 'Beijing'
  capitals.Canada = 'Ottawa'

  console.log('Object object sample 5', capitals)
}
