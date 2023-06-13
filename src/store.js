import { createStore } from 'redux';
import rootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
const preloadedState = {
  state: {
    entities: {
      1: { id: 1, text: 'Deign ui', completed: true, color: 'red' },
      2: { id: 2, text: 'discover state', completed: false },
      3: { id: 3, text: 'discover actions', completed: false },
      4: { id: 4, text: 'implement reducer', completed: false, color: 'blue' },
      5: { id: 5, text: 'Complete patterns', completed: false, color: 'red' },
    },
  },
};
// const composedEnhancer = composeWithDevTools();
const enhancer = (createStore) => {
  return (rootReducer, preloadedState, enhancer) => {
    const store = createStore(rootReducer, preloadedState, enhancer);
    function logAction(action) {
      const result = store.dispatch(action);
      console.log(action);
      return result;
    }
    return { ...store, dispatch: logAction };
  };
};
const store = createStore(rootReducer, preloadedState, enhancer);

export default store;
