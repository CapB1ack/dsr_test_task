import {Dispatch} from 'redux';

export interface IAction {
  type: EArticlesActions;
  payload: any;
}

export enum EArticlesActions {
  START_CALCULATION = 'START_CALCULATION',
  SELECT_PRIME_NUMBER = 'SELECT_PRIME_NUMBER',
  FOUNDED_PRIME = 'FOUNDED_PRIME'
}

export interface IActions {
  /**
   * Sets start time and runs calculations.
   */
  startCalculations(startTimestamp: number): void;

  selectPrimeNumber(primeNumber: number): void;
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
  }
}