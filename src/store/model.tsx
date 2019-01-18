export interface IAppState {
    xxx: boolean;
    startTimestamp: number | null;
    sumOfFoundedPrimes: number;

    primesOrder: Map<number, IPrimeModel>; // TODO: MAP collection;
    selectedPrime: number;
}


export interface IPrimeModel {
    calculationDuration: number;
    value: number;
}
