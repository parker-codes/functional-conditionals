export function getValue<T>(value: T) {
  if (typeof value === 'function') return value();
  return value;
}

export function exists<T>(value: T) {
  return value !== null && value !== undefined;
}
