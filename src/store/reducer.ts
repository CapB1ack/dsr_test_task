import {handleActions} from 'redux-actions';
import {store} from 'src';
import {EArticlesActions, IAction} from 'src/store/actions';
import {IAppState} from 'src/store/model';
import {OffsetGenerator} from 'src/utils/offsetGenerator';
import {getTimeDistance} from 'src/utils/timeUtils';
import {WebWorkerFactory} from 'src/worker';
import primesWorker from 'src/worker/primesWorker';

const worker: any = new WebWorkerFactory(primesWorker);
worker.addEventListener('message', (event: any) => {
  store.dispatch({
    payload: event.data.payload,
    type: event.data.type
  })
});

const gen: IterableIterator<number> = OffsetGenerator();

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
  [EArticlesActions.FOUNDED_THOUSANDS_PRIME]: (state: IAppState, action: IAction) => {
    const newPrime: number = action.payload.newPrime;
    return {
      ...state,
      primes: {
        ...state.primes,
        [newPrime]: {
          calculationDuration: getTimeDistance(state.startTimestamp as number),
          isHidden: false,
          offset: gen.next().value,
          value: newPrime
        }
      },
      primesOrder: [...state.primesOrder, newPrime],
      sumOfFoundedPrimes: action.payload.primesSum
    };
  },
  [EArticlesActions.SELECT_PRIME_NUMBER]: (state: IAppState, action: IAction) => ({
    ...state,
    selectedPrime: action.payload
  }),
  [EArticlesActions.HIDE_NOTIFICATION]: (state: IAppState, action: IAction) => {
    const primeNumber = action.payload;
    const oldPrime = state.primes[primeNumber];
    return {
      ...state,
      primes: {
        ...state.primes,
        [primeNumber]: {
          ...oldPrime,
          isHidden: true
        }
      }
    };
  },
}, initialState);