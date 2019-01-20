import * as React from 'react';
import {PrimeNumber} from 'src/components/primeNumber';

interface IProps {
  primesOrder: number[];
  selectedPrime: number | null;
  onPrimeNumberSelect: (primeNumber: number) => void;
}
export const PrimesList = ({primesOrder, onPrimeNumberSelect, selectedPrime}: IProps) => {

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
        />)}
      </div>
    </div>
  )
};