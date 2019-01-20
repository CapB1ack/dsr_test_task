/**
 * State of application.
 *
 * {IAppState} startTimestamp Calculations start time.
 * {number} sumOfFoundedPrimes Sum of all primes.
 * {number | null} selectedPrime Selected prime number.
 * {number[]} primesOrder Primes numbers order.
 * {IPrimes} primes Hash of primes.
 */
export interface IAppState {
  startTimestamp: Timestamp;
  sumOfFoundedPrimes: number;
  selectedPrime: number | null;
  primesOrder: number[];
  primes: IPrimes;
}

/**
 * Primes number model.
 *
 * {string} calculationDuration Timestamp from calculations start to computation of prime.
 * {number} value Value of prime.
 * {boolean} isHidden Is prime hidden in notifications.
 * {number} offset Absolute offset of a number inside layout.
 */
export interface IPrimeModel {
  calculationDuration: string;
  value: number;
  isHidden: boolean;
  offset: number;
}

/**
 * Hash of primes numbers;
 */
export interface IPrimes {
  [key: number]: IPrimeModel
}

export type Timestamp = number | null;