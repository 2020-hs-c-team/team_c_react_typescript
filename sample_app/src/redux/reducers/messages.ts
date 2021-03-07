// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import {handleActions} from 'redux-actions';
import {actions} from '../actions';
import {repos} from '../repos';
import {initialState} from '../store/initialState';

const messages = handleActions(
  {
    [`${actions.messages.submit}`](state: any, action: any) {
      return repos.messages.addMessage(state, action.payload);
    },
    [`${actions.messages.change}`](state: any, action: any) {
      return repos.messages.changeText(state, action.payload);
    },
  },
  initialState
);

export {messages};
