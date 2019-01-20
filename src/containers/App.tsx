import * as React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {PrimesList} from 'src/components/primesList';
import {PrimesNotificationsList} from 'src/components/primesNotificationsList';
import {Tracker} from 'src/components/tracker';
import {Actions, IActions} from 'src/store/actions';
import {IAppState} from 'src/store/model';

type TProps = IAppState & IDispatch;

class AppComponent extends React.Component<TProps> {

  /**
   * Handle prime select.
   * @param {number} primeNumber
   */
  public handleSelectPrime = (primeNumber: number) => {
    this.props.actions.selectPrimeNumber(primeNumber);
  };

  /**
   * handle notification hide.
   * @param {number} primeNumber
   */
  public handleHideNotification = (primeNumber: number) => {
    this.props.actions.hideNotification(primeNumber);
  };

  public render() {
    const {
      sumOfFoundedPrimes,
      selectedPrime,
      primesOrder,
      primes,
      actions: {
        startCalculations
      }
    } = this.props;

    return (
      <main className="App">
        <div className="App__tracker">
          <Tracker
            onStartCalculation={startCalculations}
            sumOfFoundedPrimes={sumOfFoundedPrimes}
          />
        </div>
        <div className="App__body">
          <PrimesList
            primesOrder={primesOrder}
            onPrimeNumberSelect={this.handleSelectPrime}
            selectedPrime={selectedPrime}
            primes={primes}
          />
          <PrimesNotificationsList
            onHideNotification={this.handleHideNotification}
            primesOrder={primesOrder}
            primes={primes}
          />
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state: IAppState): IAppState => state;

interface IDispatch {
  actions: IActions
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: new Actions(dispatch)
});

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
