/**
 * Generate offset for prime numbers from 0 to 3.
 * @returns {IterableIterator<number>}
 * @constructor
 */
export function* OffsetGenerator (): IterableIterator<number> {
  let offset = 0;
  while (true) {
    yield offset++;
    if (offset === 4) {
      offset = 0
    }
  }
}