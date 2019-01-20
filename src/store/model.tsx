export interface IAppState {
  startTimestamp: Timestamp;
  sumOfFoundedPrimes: number;
  selectedPrime: number | null;
  primesOrder: number[];
  primes: IPrimes;
}

export interface IPrimeModel {
  calculationDuration: number;
  value: number;
  isHidden: boolean;
}

export interface IPrimes {
  [key: number]: IPrimeModel
}

export type Timestamp = number | null;