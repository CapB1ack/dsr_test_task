import * as React from 'react';
import {CustomButton} from 'src/components/customButton';
import {Timestamp} from 'src/store/model';
import {getTimeDistance} from 'src/utils/timeUtils';

/**
 * Components props.
 *
 * {Function} onStartCalculation Start calc callback.
 * {number} sumOfFoundedPrimes Sum of all primes.
 */
interface IProps {
  onStartCalculation: (startTimestamp: number) => void;
  sumOfFoundedPrimes: number;
}

/**
 * Tracker state.
 *
 * {string} runtimeDuration Application runtime.
 * {boolean} isTrackerRunning Indicate app is running.
 * {Timestamp} startTimestamp Timestamp of starting calculations.
 *
 */
interface IState {
  runtimeDuration: string;
  isTrackerRunning: boolean;
  startTimestamp: Timestamp;
}

export class Tracker extends React.Component<IProps, IState> {

  public state = {
    isTrackerRunning: false,
    runtimeDuration: '00:00:00.000',
    startTimestamp: 0
  };

  /**
   * Handel start calculations. Timer inside components to keep re-render only here.
   */
  public handleStartCalculation = () => {
    const startTimestamp = Date.now();

    this.props.onStartCalculation(startTimestamp);
    this.setState({isTrackerRunning: true, startTimestamp}, () => {
      setInterval(() => {
        /** interval encapsulated in tracker */
        this.setState({runtimeDuration: getTimeDistance(this.state.startTimestamp)})
      }, 100)
    });
  };

  public render() {
    const {sumOfFoundedPrimes} = this.props;
    const {isTrackerRunning, runtimeDuration} = this.state;

    return (
      <section className="Tracker">
        <div className="Tracker__button">
          <CustomButton
            label="Start calculation"
            onClick={this.handleStartCalculation}
            disabled={isTrackerRunning}
          />
        </div>
        <div className="Tracker__info">
          <div>Calculation time: {runtimeDuration}</div>
          <div>Sum of founded primes: {sumOfFoundedPrimes}</div>
        </div>
      </section>
    )
  }
}
