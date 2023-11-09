export type IThemeType = 'primary' | 'info' | 'success' | 'error' | 'warning' | 'noble' | 'normal'

export type IRecord = {
  id: string | number
  text: string
}
export type INavNode = IRecord & {
  icon?: string
  action?: string
  children?: Array<INavNode>
}
