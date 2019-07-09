import { combineReducers } from 'redux';
import actionCreators from 'actions.js';

const initialState = {
    
  };

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ACTION_SAMPLE':
        return {
            ...state,
            //app state changes
          };
    default:
      return state;
  }
};

export default combineReducers({
	main: mainReducer,
});