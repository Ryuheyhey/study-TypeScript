type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type Dan = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
type Player = 'first' | 'second'

// コマの位置を表すクラス
class Position {
  constructor(private suji: Suji, private dan: Dan) {}

  // パラメーターに渡された位置と現在の位置を比較するメソッド
  distanceFrom(player: Player, position: Position) {
    if (player === 'first') {
      return {
        suji: Math.abs(position.suji - this.suji),
        dan: Math.abs(Number(position.dan) - Number(this.dan)),
      }
    } else {
      return {
        suji: Math.abs(position.suji - this.suji),
        dan: -Math.abs(Number(position.dan) - Number(this.dan)),
      }
    }
  }
}

// コマを表すクラス(抽象化されたclassはサブクラスを作るためのもの)
abstract class Piece {
  protected position: Position

  // インスタンスを生成したときに、初期化する値
  constructor(private readonly player: Player, suji: Suji, dan: Dan) {
    this.position = new Position(suji, dan)
  }

  // コマの移動用のメソッド
  moveTo(position: Position) {
    this.position = position
  }

  // 移動できるかどうかのメソッド(コマによるのでサブクラスを作る)
  abstract canMoveTo(position: Position, player: Player): boolean
}

class Osho extends Piece {
  canMoveTo(position: Position, player: Player): boolean {
    const distance = this.position.distanceFrom(player, position)
    return distance.suji < 2 && distance.dan < 2
  }
}

class Game {
  private pieces = Game.makePieces()
  private static makePieces() {
    return [
      // インスタンス()内は初期値を設定している
      new Osho('first', 5, '1'),
      new Osho('second', 5, '9'),
    ]
  }
}

new Game()
