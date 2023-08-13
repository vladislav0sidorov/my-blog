import { classNames } from './ClassNames'

describe('classNames', () => {
  test('test', () => {
    expect(classNames('someClass')).toBe('someClass')
  })
  test('with additional class', () => {
    const expercted = 'someClass class1 class2'
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expercted)
  })
  test('with mods', () => {
    const expercted = 'someClass class1 class2 hovered scrolleble'
    expect(classNames('someClass', { hovered: true, scrolleble: true }, ['class1', 'class2'])).toBe(expercted)
  })
  test('with mods false', () => {
    const expercted = 'someClass class1 class2 hovered'
    expect(classNames('someClass', { hovered: true, scrolleble: false }, ['class1', 'class2'])).toBe(expercted)
  })
  test('with mods undefined', () => {
    const expercted = 'someClass class1 class2 hovered'
    expect(classNames('someClass', { hovered: true, scrolleble: undefined }, ['class1', 'class2'])).toBe(expercted)
  })
})
