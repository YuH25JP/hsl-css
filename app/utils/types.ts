export interface Hsl {
  h: number,
  s: number,
  l: number,
}

export type ColorNameHsl = {
  colorName: string,
  hsl: Hsl,
}

export type ColorSet = {
  selector: string,
  colors: ColorNameHsl[],
}
