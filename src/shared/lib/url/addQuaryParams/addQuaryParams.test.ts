import { getQuaryParams } from './addQuaryParams'

describe('addQuaryParams.test', () => {
  test('test with one param', () => {
    const params = getQuaryParams({
      test: 'value',
    })
    expect(params).toBe('?test=value')
  })
  test('test with two params', () => {
    const params = getQuaryParams({
      test: 'value',
      second: 'newValue',
    })
    expect(params).toBe('?test=value&second=newValue')
  })
  test('test with undefined', () => {
    const params = getQuaryParams({
      test: 'value',
      second: undefined,
    })
    expect(params).toBe('?test=value')
  })
})
