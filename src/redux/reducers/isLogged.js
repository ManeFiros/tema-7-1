import {initialState} from '../reducers'
import {ACTIONS_ISLOGGED} from '../actions'

const isLogged = (state = initialState.isLogged, action) => {
    switch(action.type) {
      case ACTIONS_ISLOGGED.IN: state=true; return state;
      case ACTIONS_ISLOGGED.OUT: 
      default: state=false; return state;
    }
}

export default isLogged;