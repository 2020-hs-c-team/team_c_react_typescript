import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import '../../../../styles/TextInput.css';
class TextInput extends Component {
    render() {
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        return (<React.Fragment>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <form noValidate autoComplete="off">
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <TextField id="standard-text" label="メッセージを入力" className="text" margin="normal" onChange={e => (this.props as any).onChange(e.target.value)} value={(this.props as any).value}/>
        </form>
      </React.Fragment>);
    }
}
export default TextInput;
