import { combineReducers } from 'redux';
import { HELLO_WORLD } from '../../Landing/actions';

const INITIAL = {
  test: null,
};

function test(state = INITIAL, action) {
  switch (action.type) {
    case `${HELLO_WORLD}_PENDING`:
      return {
        state: false,
      };

    case `${HELLO_WORLD}_FULFILLED`:
      return {
        state: true,
      };

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  test,
});

export default rootReducer;
