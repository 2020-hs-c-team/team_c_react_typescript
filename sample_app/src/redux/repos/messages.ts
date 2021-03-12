import produce from 'immer';

export const addMessage = (state: any, payload: any) => {
  const newState = produce(state, (draftState: any) => {
    draftState.value = '';
    draftState.text = payload;
  });

  return newState;
};

export const changeText = (state: any, payload: any) => {
  const newState = produce(state, (draftState: any) => {
    draftState.value = payload;
  });

  return newState;
};
