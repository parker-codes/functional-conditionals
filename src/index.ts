import { Then, ElseIf, Else } from './constructs';
import { exists } from './utils';
import { ConditionalConstruct, Nullable, Answer } from './types';

// TODO: make this work for functions as A

export function _if<A>(
  condition: boolean,
  ...chains: ConditionalConstruct<A>[]
): Nullable<Answer<A>> {
  // if condition is true, run all chains that are of Then class until a value is reached
  if (condition) {
    // TODO: can be streamlined by using a regular loop or maybe .find() so that it doesn't go through all of them
    const thens = chains.filter(chain => chain instanceof Then);

    for (const then of thens) {
      const value = then.value();
      if (exists(value)) return value;
    }

    return null;
  }

  // because the condition is not true, check all chains that are of ElseIf class
  // return the first actual value, if any

  const elseIfs = chains.filter(chain => chain instanceof ElseIf);

  for (const elseIf of elseIfs) {
    // TODO: need to do the conditional check here or have a method that checks it
    // internally so I only run the first one that is true, if any
    const value = elseIf.value();
    if (exists(value)) return value;
  }

  // if none of the ElseIfs worked, the Else chains should run

  const elses = chains.filter(chain => chain instanceof Else);

  for (const _else of elses) {
    const value = _else.value();
    if (exists(value)) return value;
  }

  return null;
}

export function _then<A>(value: A): Then<A> {
  return new Then(value);
}

export function _elseIf<A>(condition: boolean, value: A): ElseIf<A> {
  return new ElseIf(condition, value);
}

export function _else<A>(value: A): Else<A> {
  return new Else(value);
}
