// import { createActionCreator } from 'deox';
import { firebaseDb } from '../../firebase';

const messagesRef = firebaseDb.ref('messages');

// const { messages } = createActionCreator({
//   messages: {
//     submit(value: string, image: any) {
//       const payload = value;
//       if (payload === '') {
//         alert('メッセージを入力してください');
//         return false;
//       }

//       messagesRef.push({
//         image: image,
//         text: payload,
//       });

//       return payload;
//     },
//     change(value: string) {
//       const payload = value;
//       return payload;
//     },
//   },
// });

export {
  // messages
};

//inputの入力値はComponentで管理したほうがいい
