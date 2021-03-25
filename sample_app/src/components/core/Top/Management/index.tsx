import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Card, CardActions, CardContent, CardHeader } from '@material-ui/core';
import { Button, Typography} from '@material-ui/core';
import '../../../../styles/TextInput.css';

const useStyles = makeStyles(theme => ({
  btn: {
    marginBottom: "10px"
  },
}));

function Management() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

    return (
      <React.Fragment>
        <Card>
          <CardHeader>
          </CardHeader>
          <CardContent>
            <Typography
              // className={classes.title}
              color="textSecondary"
              variant="h4"
              align="left"
              gutterBottom>
              管理画面
            </Typography>
            <Typography
              // className={classes.title}
              color="textSecondary"
              variant="h6"
              gutterBottom>
              管理者:
            </Typography>
            <Button
              // onClick={() => props.onClick(props.value, props.image)}
              variant="contained"
              color="primary"
              className={classes.btn}
            >
              結果を表示
            </Button>
            <div>
              <Button
                // onClick={() => props.onClick(props.value, props.image)}
                variant="contained"
                color="primary"
                className={classes.btn}
              >
                次のクイズへ
              </Button>
            </div>
          </CardContent>          
          <CardActions>
          </CardActions>
        </Card>
      </React.Fragment>
    );
}

export default (Management);
