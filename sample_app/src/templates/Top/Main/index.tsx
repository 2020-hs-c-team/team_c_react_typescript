import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import { Top } from '../../../components/core';
import { firebaseDb } from '../../../firebase';
const messagesRef = firebaseDb.ref('messages');
type State = any;

class Main extends Component<{}, State> {
  public players: any[] = new Array();
  constructor(props: any) {
    super(props);
  }

  componentWillMount() {
    messagesRef.on('child_added', snapshot => {
      const m = snapshot.val();
      this.players.push({
        image: m.image
        , text: m.text
      });
      this.setState({ // ここを削除すると機能しないので残す
          // message:  m
      });
    });
  }
  render() {
    return (<div className="a__top-main">
      <Top.ButtonAppBar />
      <div className="b__top-main">
        <Grid container spacing={3} alignItems="center" justify="center">
          <Grid item xs={4}>
            {this.players.map((player) => ( 
              <Top.PlayersList image={player['image']} text={player['text']} />
            ))}
          </Grid>
          <Grid item xs={4}>
            <Top.TextInput
            // onChange={(this.props as any).actions.messages.change}
            // context={(this.props as any).messages.value}
            />
          </Grid>
          <Grid item xs={4}>
            <Top.Template />
          </Grid>
          <Grid item xs={4}>
            <Top.Management />
          </Grid>
        </Grid>
        {/* {(this.props as any).messages.msgs.map((m: any, i: any) => (<Top.AlignItemsList key={i} msgs={m} />))} */}
        {/* <Top.SendButton onClick={(this.props as any).actions.messages.submit} value={(this.props as any).messages.value} image={(this.props as any).messages.image} /> */}
      </div>
    </div>);
  }
}
export default Main;
