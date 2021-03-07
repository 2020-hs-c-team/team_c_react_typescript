import React from 'react';

import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
}));

function SendButton(props: any) {
  const classes = useStyles();
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Button
      onClick={() => props.onClick(props.value, props.image)}
      variant="contained"
      color="primary"
      className={classes.button}>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Icon>send</Icon>
    </Button>
  );
}

export default SendButton;
