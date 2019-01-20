import * as React from 'react';
import {CustomButton} from 'src/components/customButton';
import {Timestamp} from 'src/store/model';

interface IProps {
  onStartCalculation: (startTimestamp: number) => void;
  sumOfFoundedPrimes: number;
  startTimestamp: Timestamp;
}

interface IState {
  runtimeDuration: Timestamp;
  isTrackerRunning: boolean;
  startTimestamp: Timestamp;
}
export class Tracker extends React.Component<IProps, IState> {

  public state = {
    isTrackerRunning: false,
    runtimeDuration: null,
    startTimestamp: null
  };

  public handleStartCalculation = () => {
    const startTimestamp = Date.now();

    this.props.onStartCalculation(startTimestamp);
    this.setState({isTrackerRunning: true, startTimestamp}, () => {
      setInterval(() => {
        /** interval encapsulated in tracker */
        this.setState({runtimeDuration: Date.now() - (this.state.startTimestamp as any)})
      }, 500)
    });
  };

  public render() {
    const {sumOfFoundedPrimes} = this.props;
    const {isTrackerRunning, runtimeDuration} = this.state;

    return (
      <section className="Tracker">
        <div className="Tracker__button">
          <CustomButton label="Start calculation" onClick={this.handleStartCalculation} disabled={isTrackerRunning} />
        </div>
        <div className="Tracker__info">
          <div>Calculation time: {runtimeDuration}</div>
          <div>Sum of founded primes: {sumOfFoundedPrimes}</div>
        </div>
      </section>
    )
  }
}
