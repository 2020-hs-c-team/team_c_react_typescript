import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import { Top } from '../../../components/core';
import { firebaseDb } from '../../../firebase';
const messagesRef = firebaseDb.ref('messages');
type State = any;
class Main extends Component<{}, State> {
  componentWillMount() {
    messagesRef.on('child_added', snapshot => {
      const m = snapshot.val();
      // let msgs = (this.props as any).messages.msgs;
      // msgs.push({
      //   image: m.image,
      //   text: m.text,
      // });
      // this.setState({
      //   msgs: msgs,
      // });
    });
  }
  render() {
    console.log((this.props as any).messages);
    return (<div className="a__top-main">
      <Top.ButtonAppBar />
      <div className="b__top-main">
        <Grid container spacing={3} alignItems="center" justify="center">
          <Grid item xs={4}>
            <Top.TextInput
            // onChange={(this.props as any).actions.messages.change}
            // context={(this.props as any).messages.value}
            />
          </Grid>
          <Grid item xs={4}>
          </Grid>
        </Grid>
        {/* {(this.props as any).messages.msgs.map((m: any, i: any) => (<Top.AlignItemsList key={i} msgs={m} />))} */}
        {/* <Top.SendButton onClick={(this.props as any).actions.messages.submit} value={(this.props as any).messages.value} image={(this.props as any).messages.image} /> */}
      </div>
    </div>);
  }
}
export default Main;
