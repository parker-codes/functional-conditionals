# Functional Conditionals

A library for writing if / else if / else in a functional way.

---

## Usage

```ts
const age = 12;
const isOldEnough = age >= 18;

const phrase = _if(
  isOldEnough,
  _then('Welcome to the club!'),
  _else('Scram, kid!')
);

expect(phrase).toBe('Scram, kid!');
```

This will cause a type error because all arms need to match types:

```ts
const name = _if(userExists, _then(user.name), _else(25));
```

---

This project was bootstrapped with [TSDX](https://github.com/jaredpalmer/tsdx).
