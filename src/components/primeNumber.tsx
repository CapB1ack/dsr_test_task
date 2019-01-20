import * as React from 'react';

interface IProps {
  value: number;
  onClick: () => void;
  selectedPrime: number | null;
}
export const PrimeNumber = ({value, onClick, selectedPrime}: IProps) => {
  return (
    <div className="PrimeNumber" onClick={onClick}>
      <div className={`PrimeNumber__value ${selectedPrime === value ? 'PrimeNumber__active' : ''}`}>
        {value}
      </div>
    </div>
  )
};