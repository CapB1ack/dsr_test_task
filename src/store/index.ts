import {applyMiddleware, createStore, Store} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {IAppState} from 'src/store/model';
import {rootReducer} from 'src/store/reducer';

export function configureStore(): Store<IAppState> {
  let middleware = applyMiddleware();

  if (process.env.NODE_ENV !== 'production') {
    middleware = composeWithDevTools(middleware);
  }

  return createStore(rootReducer as any, void 0, middleware) as Store<IAppState>;
}
