import React from 'react';
import { Card, CardActions, CardContent, CardHeader, TextField, Typography, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core';
import '../../../../styles/QuizDesc.css';

function QuizDescription() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return (
      <React.Fragment>
        <Card className="root">
          <CardHeader>
          </CardHeader>
          <CardContent>
            <div>
              <Button color="primary" onClick={handleClickOpen}>
                クリック
              </Button>
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
            </div>
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>
      </React.Fragment>
    );
}

export default (QuizDescription);
