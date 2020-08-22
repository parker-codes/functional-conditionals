import { getValue } from './utils';
import { Answer, Nullable } from './types';

export class Then<T> {
  private _value: T;

  constructor(value: T) {
    this._value = value;
  }

  value(): Answer<T> {
    return getValue(this._value);
  }
}

export class ElseIf<T> {
  private _condition: boolean;
  private _value: T;

  constructor(condition: boolean, value: T) {
    this._condition = condition;
    this._value = value;
  }

  value(): Nullable<Answer<T>> {
    if (!this._condition) return null;
    return getValue(this._value);
  }
}

export class Else<T> {
  private _value: T;

  constructor(value: T) {
    this._value = value;
  }

  value(): Answer<T> {
    return getValue(this._value);
  }
}
