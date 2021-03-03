import React, {Component} from 'react';

import TextField from '@material-ui/core/TextField';
import '../../../../styles/TextInput.css';

class TextInput extends Component {
  render() {
    return (
      <React.Fragment>
        <form noValidate autoComplete="off">
          <TextField
            id="standard-text"
            label="メッセージを入力"
            className="text"
            margin="normal"
            onChange={e => this.props.onChange(e.target.value)}
            value={this.props.value}
          />
        </form>
      </React.Fragment>
    );
  }
}

export default TextInput;
