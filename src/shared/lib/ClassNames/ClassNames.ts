export type Mods = Record<string, boolean | string | undefined>
//* cls - class name
export function classNames(cls: string, mods: Mods = {}, additionals: Array<string | undefined> = []): string {
  return [
    cls,
    ...additionals.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([cls]) => cls),
  ].join(' ')
}
