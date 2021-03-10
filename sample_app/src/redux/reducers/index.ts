import { createActionCreator, createReducer } from 'deox'
import { repos } from '../repos';
import { firebaseDb } from '../../firebase';

const messagesRef = firebaseDb.ref('messages');

//Actions
const defaultState = '';
const fetch = {
    submit: createActionCreator('FETCH_SUBMIT', resolve => (res: object) => resolve(res)),
    change: createActionCreator('FETCH_CHANGE', resolve => (res: object) => resolve(res))
}

//Reducer
const createRootReducer = () => createReducer(defaultState, handleAction => [
    handleAction(fetch.submit, (state, action) => {
        // repos.messages.addMessage(state, payload)
        return state;
    }),
    handleAction(fetch.change, (state, action) => {
        // repos.messages.addMessage(state, payload)
        return state;
    })
]);

export {
    createRootReducer
};
