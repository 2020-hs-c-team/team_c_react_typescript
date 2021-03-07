import React, {Component} from 'react';
import {Top} from '../../../components/core';

import {firebaseDb} from '../../../firebase';
const messagesRef = firebaseDb.ref('messages');

class Main extends Component {
  componentWillMount() {
    messagesRef.on('child_added', snapshot => {
      const m = snapshot.val();
      let msgs = this.props.messages.msgs;

      msgs.push({
        image: m.image,
        text: m.text,
      });
      this.setState({
        msgs: msgs,
      });
    });
  }

  render() {
    console.log(this.props.messages);

    return (
      <div className="a__top-main">
        <div className="b__top-main">
          <Top.ButtonAppBar />
          <div className="b__message-main">
            {this.props.messages.msgs.map((m, i) => (
              <Top.AlignItemsList key={i} msgs={m} />
            ))}

            <div className="textArea">
              <Top.TextInput
                onChange={this.props.actions.messages.change}
                value={this.props.messages.value}
              />
              <Top.SendButton
                onClick={this.props.actions.messages.submit}
                value={this.props.messages.value}
                image={this.props.messages.image}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
