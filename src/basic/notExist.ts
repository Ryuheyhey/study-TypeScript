export default function notExsistSample() {
  const name = null
  // name = 'andoooo'

  if (!name) {
    console.log(typeof name, '名前はまだ' + name)
  } else {
    console.log('名前は' + name)
  }

  let age = 28
  age = 30
  // age = 28

  if (!age) {
    console.log(typeof age, '秘密です')
  } else {
    console.log(typeof age, age + '才です')
  }
}
