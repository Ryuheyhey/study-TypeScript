// アロー関数の場合
export const logMassage = (message: string): void => {
  console.log('Function basic sample 1', message)
}

// 名前付き関数の場合
export function logMassage2(message: string): void {
  console.log('Function basic sample 2', message)
}

// 関数式
export const logMassage3 = function (message: string): void {
  console.log('Function basic sample 3', message)
}

// アロー関数の省略法
export const logMassage4 = (message: string): void =>
  console.log('Function basic sample 4', message)

export const alwaysThrowError = (message: string): never => {
  throw new Error(message)
}

// 呼び出しシグネチャ
type LogMessage = (message: string) => void
export const logMassage5: LogMessage = (message) => {
  console.log('Function basic sample 5', message)
}

// 完全な呼び出しシグネチャ
type FullLogMessage = {
  (message: string): void
}
export const logMassage6: LogMessage = (message) => {
  console.log('Function basic sample 6', message)
}
