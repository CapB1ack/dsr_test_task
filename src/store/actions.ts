import {Dispatch} from 'redux';

export interface IAction {
  type: EArticlesActions;
  payload: any;
}

export enum EArticlesActions {
  START_CALCULATION = 'START_CALCULATION',
  SELECT_PRIME_NUMBER = 'SELECT_PRIME_NUMBER',
  FOUNDED_THOUSANDS_PRIME = 'FOUNDED_THOUSANDS_PRIME',
  HIDE_NOTIFICATION = 'HIDE_NOTIFICATION'
}

export interface IActions {
  /**
   * Sets start time and runs calculations.
   * @param {number} startTimestamp
   */
  startCalculations(startTimestamp: number): void;

  /**
   * Sets selected prime number;
   * @param {number} primeNumber
   */
  selectPrimeNumber(primeNumber: number): void;

  /**
   * Hide prime inside notifications;
   * @param {number} primeNumber
   */
  hideNotification(primeNumber: number): void;
}

export class Actions implements IActions {

  constructor(private dispatch: Dispatch) {}

  public startCalculations = (startTimestamp: number) => {
    this.dispatch({
      payload: startTimestamp,
      type: EArticlesActions.START_CALCULATION
    })
  };

  public selectPrimeNumber = (primeNumber: number) => {
    this.dispatch({
      payload: primeNumber,
      type: EArticlesActions.SELECT_PRIME_NUMBER
    })
  };

  public hideNotification = (primeNumber: number) => {
    this.dispatch({
      payload: primeNumber,
      type: EArticlesActions.HIDE_NOTIFICATION
    })
  };
}