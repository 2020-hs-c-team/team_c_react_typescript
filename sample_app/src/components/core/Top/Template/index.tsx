import React, { Component } from 'react';
import { Card, CardActions, CardContent, CardHeader, withStyles } from '@material-ui/core';
import '../../../../styles/TextInput.css';

const classes = {
  root: {
    minWidth: 275,
  },
};

class QuizView extends Component {
  componentDidMount() {
    //初期化処理
  }

  componentWillUnmount() {
    //画面破棄処理
  }

  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
          </CardHeader>
          <CardContent>
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>
      </React.Fragment>
    );
  }
}
export default withStyles(classes)(QuizView);
