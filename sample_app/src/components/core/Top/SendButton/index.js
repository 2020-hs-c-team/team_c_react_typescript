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

function SendButton(props) {
  const classes = useStyles();
  return (
    <Button
      onClick={() => props.onClick(props.value, props.image)}
      variant="contained"
      color="primary"
      className={classes.button}>
      <Icon>send</Icon>
    </Button>
  );
}

export default SendButton;
