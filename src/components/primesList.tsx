import * as React from 'react';
import {PrimeNumber} from 'src/components/primeNumber';
import {IPrimes} from 'src/store/model';

/**
 * Components props.
 *
 * {IPrimes} primes Hash of primes.
 * {number[]} primesOrder Order of founded primes.
 * {number | null} selectedPrime Selected prime.
 * {Function} onPrimeNumberSelect Callback for selecting prime.
 */
interface IProps {
  primes: IPrimes;
  primesOrder: number[];
  selectedPrime: number | null;
  onPrimeNumberSelect: (primeNumber: number) => void;
}
export const PrimesList = ({primesOrder, onPrimeNumberSelect, selectedPrime, primes}: IProps) => {
  const handlePrimeNumber = (primeNumber: number) => () => onPrimeNumberSelect(primeNumber);

  return (
    <div className="PrimesList">
      <h2>Primes</h2>
      <div className="PrimesList__scroll">
        {primesOrder.map(prime => <PrimeNumber
          key={prime}
          value={prime}
          onClick={handlePrimeNumber(prime)}
          selectedPrime={selectedPrime}
          offset={primes[prime].offset}
          calculationDuration={primes[prime].calculationDuration}
        />)}
      </div>
    </div>
  )
};