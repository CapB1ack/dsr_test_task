import * as React from 'react';

interface IProps {
  label: string;
  onClick:() => void;
  disabled: boolean;
}

export const CustomButton = ({label, onClick, disabled}: IProps) => {

  return (
    <button className="CustomButton" onClick={onClick} disabled={disabled}>
      {label}
    </button>
  )
};