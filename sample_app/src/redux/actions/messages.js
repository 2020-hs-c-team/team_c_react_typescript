import {createActions} from 'redux-actions';
import {firebaseDb} from '../../firebase';

const messagesRef = firebaseDb.ref('messages');

const {messages} = createActions({
  messages: {
    submit(value, image) {
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
    change(value) {
      const payload = value;
      return payload;
    },
  },
});

export {messages};

//inputの入力値はComponentで管理したほうがいい
