import * as React from 'react';

/**
 * CustomButton props.
 *
 * {string} label Text inside button.
 * {Function} onClick Click handler.
 * {boolean} disabled Disable button.
 */
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