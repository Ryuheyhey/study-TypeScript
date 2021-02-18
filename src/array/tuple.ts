export default function tupleSample() {
  // 一般的なタプル
  const respons: [number, string] = [200, 'OK']
  // respons = ["400", "error"]   //エラー
  // respons = [400, "error", "not signed in"] //エラー
  respons.push(400) //何故かイケる、なんで
  //respons.push(true) //エラー

  console.log('Array tuple sample 1:', respons)

  // 可変超引数を使ったタプル
  const girlfriends: [string, ...string[]] = ['Kana', 'Miku', 'Nana', 'Keiko']
  girlfriends.push('Misa')
  girlfriends[3] = 'Yui'

  console.log('Array tuple sample 2:', girlfriends)
}
