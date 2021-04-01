import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Card, CardActions, CardContent, CardHeader, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from '@material-ui/core';
import { Button, Typography} from '@material-ui/core';
import '../../../../styles/TextInput.css';
import '../../../../styles/QuizDesc.css';



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

  const [modalIsOpen, setIsOpen] = React.useState(false);

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
                onClick={handleClickOpen}
                variant="contained"
                color="primary"
                className={classes.btn}
              >
                次のクイズへ
              </Button>
            </div>


            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
              <DialogTitle id="form-dialog-title">
                出題画面
              </DialogTitle>

              <DialogContent>
                <DialogContentText>
                  問題を入力してください
                </DialogContentText>

                <div className="dialogContents">
                  <div>
                    <TextField
                      placeholder="問題内容"
                      margin="normal"
                      variant="outlined"
                      className="question"
                    />
                  </div>
                  <div>
                    <TextField
                      placeholder="回答1"
                      helperText="回答1"
                      margin="none"
                      variant="filled"
                      className="desc"
                    />
                  </div>
                  <div>
                    <TextField
                      placeholder="回答2"
                      helperText="回答2"
                      margin="none"
                      variant="filled"
                      className="desc"
                    />
                  </div>
                  <div>
                    <TextField
                      placeholder="回答3"
                      helperText="回答3"
                      margin="none"
                      variant="filled"
                      className="desc"
                    />
                  </div>
                  <div>
                    <TextField
                      placeholder="回答4"
                      helperText="回答4"
                      margin="none"
                      variant="filled"
                      className="desc"
                    />
                  </div>
                </div>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  出題
                </Button>
              </DialogActions>
            </Dialog>

          </CardContent>
          <CardActions>
          </CardActions>
        </Card>
      </React.Fragment>
    );
}

export default (Management);