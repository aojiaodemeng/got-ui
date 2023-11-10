// const win = window as any
const ph: Record<string, any> = {}
export default {
  set(k: string, value: any) {
    ph[k] = value
  },
  get(k: string) {
    return ph[k]
  }
}
