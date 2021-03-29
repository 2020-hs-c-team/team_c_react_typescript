import React from 'react';
import { Card, CardActions, CardContent, CardHeader, TextField, Typography, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton} from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import '../../../../styles/QuizDesc.css';

function AddPlayerBtn() {

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
              <Button startIcon={<PersonAddIcon/>} color="primary" onClick={handleClickOpen}>
                プレイヤーを追加
              </Button>
              <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                  名前入力画面
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                  　名前を入力してください
                  </DialogContentText>
                  <div className="dialogContents">
                    <div>
                      <TextField
                      placeholder="Name"
                      margin="normal"
                      variant="outlined"
                      className="question"
                      />
                    </div>
                  </div>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    NEXT
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

export default (AddPlayerBtn);