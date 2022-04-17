import { getShadowPropsFromStyle } from '../';

describe('getShadowPropsFromStyle function test', () => {
  const emptyProps = {
    shadowColor: undefined,
    shadowOffset: undefined,
    shadowOpacity: undefined,
    shadowRadius: undefined,
  };
  const pinkColorInDecemal = 4294951115;
  const blackColorInDecemal = 4278190080;

  test('empty styles return empty object', () => {
    const result = getShadowPropsFromStyle({});
    expect(result).toStrictEqual(emptyProps);
  });

  test('non shadow properties returns empty object', () => {
    const result = getShadowPropsFromStyle({
      width: 100,
      backgroundColor: 'blue',
    });
    expect(result).toStrictEqual(emptyProps);
  });

  test('shadow styles return shadow properties', () => {
    const result = getShadowPropsFromStyle({
      shadowColor: 'pink',
      shadowOffset: {
        width: -4,
        height: 4,
      },
      shadowOpacity: 1,
      shadowRadius: 4.65,
    });
    expect(result).toStrictEqual({
      shadowColor: pinkColorInDecemal,
      shadowOffset: {
        width: -4,
        height: 4,
      },
      shadowOpacity: 1,
      shadowRadius: 4.65,
    });
  });

  test('return black shadow property if not set but shadowOffset is presented', () => {
    const result = getShadowPropsFromStyle({
      shadowOffset: {
        width: -4,
        height: 4,
      },
    });
    expect(result).toStrictEqual({
      shadowColor: blackColorInDecemal,
      shadowOffset: {
        width: -4,
        height: 4,
      },
      shadowOpacity: undefined,
      shadowRadius: undefined,
    });
  });

  test('return black shadow property if not set but shadowOffset is presented', () => {
    const result = getShadowPropsFromStyle({
      shadowOpacity: 1,
    });
    expect(result).toStrictEqual({
      shadowColor: blackColorInDecemal,
      shadowOffset: undefined,
      shadowOpacity: 1,
      shadowRadius: undefined,
    });
  });

  test('return black shadow property if not set but shadowRadius is presented', () => {
    const result = getShadowPropsFromStyle({
      shadowRadius: 4,
    });
    expect(result).toStrictEqual({
      shadowColor: blackColorInDecemal,
      shadowOffset: undefined,
      shadowOpacity: undefined,
      shadowRadius: 4,
    });
  });
});
