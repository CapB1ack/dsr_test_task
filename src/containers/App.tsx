import * as React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {PrimesList} from 'src/components/primesList';
import {PrimesNotifications} from 'src/components/primesNotifications';
import {Tracker} from 'src/components/tracker';
import {Actions, IActions} from 'src/store/actions';
import {IAppState} from 'src/store/model';

type TProps = IAppState & IDispatch;

class AppComponent extends React.Component<TProps> {

  public handleSelectPrime = (primeNumber: number) => {
    this.props.actions.selectPrimeNumber(primeNumber);
  };

  public render() {
    const {
      sumOfFoundedPrimes,
      startTimestamp,
      selectedPrime,
      primesOrder,
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
            startTimestamp={startTimestamp}
          />
        </div>
        <div className="App__body">
          <PrimesList
            primesOrder={primesOrder}
            onPrimeNumberSelect={this.handleSelectPrime}
            selectedPrime={selectedPrime}
          />
          <PrimesNotifications />
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
