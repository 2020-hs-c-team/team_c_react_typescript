import React, { Component } from 'react';
import { Top } from '../../../components/core';
import { firebaseDb } from '../../../firebase';
const messagesRef = firebaseDb.ref('messages');
type State = any;
class Main extends Component<{}, State> {
    componentWillMount() {
        messagesRef.on('child_added', snapshot => {
            const m = snapshot.val();
            let msgs = (this.props as any).messages.msgs;
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
        console.log((this.props as any).messages);
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        return (<div className="a__top-main">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div className="b__top-main">
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Top.ButtonAppBar />
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <div className="b__message-main">
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            {(this.props as any).messages.msgs.map((m: any, i: any) => (<Top.AlignItemsList key={i} msgs={m}/>))}

            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <div className="textArea">
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <Top.TextInput onChange={(this.props as any).actions.messages.change} value={(this.props as any).messages.value}/>
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <Top.SendButton onClick={(this.props as any).actions.messages.submit} value={(this.props as any).messages.value} image={(this.props as any).messages.image}/>
            </div>
          </div>
        </div>
      </div>);
    }
}
export default Main;
