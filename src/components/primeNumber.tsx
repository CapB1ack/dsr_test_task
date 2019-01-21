import * as React from 'react';

/**
 * Components props.
 *
 * {number} offset Offset of prime number element inside layout. Used as absolute position.
 * {number} value  Value of prime number;
 * {string} calculationDuration  Duration from start calc till prime number was found.
 * {Function} onClick PrimeNumber click handler
 * {number | null} selectedPrime Selected prime number.
 */
interface IProps {
  offset: number;
  value: number;
  calculationDuration: string;
  onClick: () => void;
  selectedPrime: number | null;
}

export const PrimeNumber = ({value, onClick, selectedPrime, offset, calculationDuration}: IProps) => {
  const isActive = selectedPrime === value;
  return (
    <div className={`PrimeNumber ${isActive ? 'active' : ''}`} onClick={onClick}>
      <div className="PrimeNumber__value">
        {value}
      </div>
      {isActive && (
        <>
          <div className="PrimeNumber__arrow">&#8681;</div>
          <div className="PrimeNumber__info" style={{'left': `-${offset * 100}%`}}>
            <div className="PrimeNumber__info--prime">
              <div className="caption">Prime</div>
              <div className="value">{value}</div>
            </div>
            <div className="PrimeNumber__info--time">
              <div className="caption">Calculation time</div>
              <div className="value">{calculationDuration}</div>
            </div>
          </div>
        </>
      )}
    </div>
  )
};