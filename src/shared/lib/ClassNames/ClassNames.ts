type Mods = Record<string, boolean | string>;
//* cls - class name
export function ClassNames(cls: string, mods?: Mods, additionals?: string[]): string {
  return [
    cls,
    ...additionals.filter(Boolean),
    Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([cls]) => cls),
  ].join(' ');
}
