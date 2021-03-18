import React from 'react';
import { Card, CardActions, CardContent, CardHeader, withStyles } from '@material-ui/core';
import { Button, Divider, FormControl, FormControlLabel, FormLabel, Grid, makeStyles, Radio, RadioGroup, Typography} from '@material-ui/core';
import '../../../../styles/TextInput.css';

function Management() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


    return (
      <React.Fragment>
        <Card　className="root">
          <CardHeader>
          </CardHeader>

          <CardContent>
            <Typography
              // className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="h4">
              管理画面
            </Typography>
            <Typography
              // className={classes.title}
              color="textSecondary"
              variant="h5">
              管理者:
            </Typography>
              <Button
                // onClick={() => props.onClick(props.value, props.image)}
                variant="contained"
                color="primary"
              >
                結果を表示
              </Button>
              <Button
                // onClick={() => props.onClick(props.value, props.image)}
                variant="contained"
                color="primary"
                >
                  次のクイズへ
              </Button>
          </CardContent>
          
          <CardActions>
          </CardActions>
        </Card>
      </React.Fragment>
    );
}

export default (Management);
