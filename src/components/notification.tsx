import * as React from 'react';

/**
 * Components props.
 *
 * {Function} onClick Notification click handler.
 * {number} value Value of prime number inside notofication.
 * {string} calculationDuration  Duration from start calc till prime number was found.
 * {boolean} isHidden Marks notification as hidden.
 */
interface IProps {
  onClick: () => void;
  value: number;
  calculationDuration: string;
  isHidden: boolean;
}

export const Notification = ({onClick, value, calculationDuration, isHidden}: IProps) => {
  return !isHidden ? (
    <div onClick={onClick} className="Notification">
      Prime {value} was found after {calculationDuration}
    </div>
  ) : null;
};