import { _if, _then, _else } from '../src';

describe('can do basic behavior', () => {
  it('runs a basic conditional function', () => {
    let shouldHaveValue = null;

    _if(
      true, // forces it to be true
      _then(() => {
        shouldHaveValue = 'some-value';
      })
    );

    expect(shouldHaveValue).toBe('some-value');
  });

  it('if statement returns a value', () => {
    const age = 12;
    const isOldEnough = age >= 18;

    const phrase = _if(
      isOldEnough,
      _then('Welcome to the club!'),
      _else('Scram, kid!')
    );

    expect(phrase).toBe('Scram, kid!');
  });

  // TODO: get types working so that this one works
  // it('returns a value with function also', () => {
  //   const age = 12;
  //   const isOldEnough = age >= 18;

  //   const phrase = _if(
  //     isOldEnough,
  //     _then('Welcome to the club!'),
  //     _else(() => 'Scram, kid!')
  //   );
  // });
});
