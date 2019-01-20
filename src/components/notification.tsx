import * as React from 'react';

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