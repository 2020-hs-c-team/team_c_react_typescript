// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import {createActions} from 'redux-actions';
import {firebaseDb} from '../../firebase';

const messagesRef = firebaseDb.ref('messages');

const {messages} = createActions({
  messages: {
    submit(value: any, image: any) {
      const payload = value;
      if (payload === '') {
        alert('メッセージを入力してください');
        return false;
      }

      messagesRef.push({
        image: image,
        text: payload,
      });

      return payload;
    },
    change(value: any) {
      const payload = value;
      return payload;
    },
  },
});

export {messages};

//inputの入力値はComponentで管理したほうがいい
