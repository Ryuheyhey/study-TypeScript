export default function typeAliasSample() {
  // 型エイリアス
  type Country = {
    capital: string
    language: string
    name: string
  }

  const japan: Country = {
    capital: 'Tokyo',
    language: 'Japanese',
    name: 'Japan',
  }

  const china: Country = {
    capital: 'Beijing',
    language: 'Chinese',
    name: 'China',
  }

  console.log('Object alias sample 1:', japan)
  console.log('Object alias sample 2:', china)
  console.log('Object alias sample 2:', typeof china)

  // 合併型(union)と交差型
  type Knight = {
    hp: number
    sp: number
    wepons: string
    swordSkill: string
  }

  type Wizard = {
    hp: number
    mp: number
    wepons: string
    magicSkill: string
  }

  // 合併型...KnightまたはWizardの型
  type Adventure = Knight | Wizard

  // 交差型...KnightかつWizardの型
  type Paladin = Knight & Wizard

  const adventure1: Adventure = {
    hp: 100,
    sp: 100,
    wepons: '兵士の剣',
    swordSkill: '回転切り',
  }

  const adventure2: Adventure = {
    hp: 100,
    mp: 100,
    wepons: '杖',
    magicSkill: 'ディンの炎',
  }

  console.log('Object alias sample 3:', adventure1)
  console.log('Object alias sample 4:', adventure2)

  const paladin: Paladin = {
    hp: 300,
    sp: 100,
    mp: 100,
    wepons: 'マスターソード',
    swordSkill: '回転切り',
    magicSkill: 'フロルの風',
  }

  // つまり。。。
  type PowerForce = {
    owner: string
    power: number
    skill: string
  }
  type WisdomForce = {
    owner: string
    wise: number
    skill: string
  }
  type BraveForce = {
    owner: string
    brave: number
    skill: string
  }

  type Legend = PowerForce | WisdomForce | BraveForce
  type TriForce = PowerForce & WisdomForce & BraveForce

  const ganon: Legend = {
    owner: 'ガノンドロフ',
    power: 500,
    skill: 'ディンの炎',
  }
  const zelda: Legend = {
    owner: 'ゼルダ',
    wise: 500,
    skill: 'フロルの風',
  }
  const link: Legend = {
    owner: 'リンク',
    brave: 500,
    skill: 'ネールの愛',
  }

  const triforce: TriForce = {
    owner: 'リンク',
    power: 500,
    wise: 500,
    brave: 500,
    skill: '全ての力',
  }

  console.log('ゼルダの伝説：', ganon, zelda, link)
  console.log('ゼルダの伝説：', triforce)
}
