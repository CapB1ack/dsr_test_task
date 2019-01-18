import {applyMiddleware, combineReducers, createStore, Store} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {IAppState} from 'src/store/model';

const xxxReducer = () => {
    return true;
};

export const rootReducer = combineReducers<IAppState>({
    xxx: xxxReducer
});

export function configureStore(initialState?: IAppState): Store<IAppState> {
    let middleware = applyMiddleware();

    if (process.env.NODE_ENV !== 'production') {
        middleware = composeWithDevTools(middleware);
    }

    return createStore(rootReducer as any, initialState as any, middleware) as Store<IAppState>;
}
