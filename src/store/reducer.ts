import {handleActions} from 'redux-actions';
import {store} from 'src';
import {EArticlesActions, IAction} from 'src/store/actions';
import {IAppState} from 'src/store/model';
import {WebWorkerFactory} from 'src/worker';
import primesWorker from 'src/worker/primesWorker';

const worker: any = new WebWorkerFactory(primesWorker);
worker.addEventListener('message', (event: any) => {
  store.dispatch({
    payload: event.data,
    type: EArticlesActions.FOUNDED_PRIME
  })
});

const initialState: IAppState = {
  primes: {},
  primesOrder: [],
  selectedPrime: null,
  startTimestamp: null,
  sumOfFoundedPrimes: 0
};

export const rootReducer = handleActions<IAppState>({
  [EArticlesActions.START_CALCULATION]: (state: IAppState, action: IAction) => {
    worker.postMessage(EArticlesActions.START_CALCULATION);
    return ({
      ...state,
      startTimestamp: action.payload
    });
  },
  [EArticlesActions.FOUNDED_PRIME]: (state: IAppState, action: IAction) => {
    const newPrime: number = action.payload;
    return {
      ...state,
      primes: {
        ...state.primes,
        [newPrime]: {
          calculationDuration: Date.now() - (state.startTimestamp as number),
          isHidden: false,
          value: newPrime
        }
      },
      primesOrder: [...state.primesOrder, newPrime],
      sumOfFoundedPrimes: state.sumOfFoundedPrimes + newPrime
    };
  },
  [EArticlesActions.SELECT_PRIME_NUMBER]: (state: IAppState, action: IAction) => {
    return ({
      ...state,
      selectedPrime: action.payload
    });
  },

}, initialState);