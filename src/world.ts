export default class World {
  // 型定義
  massage: string

  constructor(massage: string) {
    this.massage = massage
  }

  public sayHellow(elem: HTMLElement | null) {
    if (elem) {
      elem.innerText = this.massage
    }
  }
}
