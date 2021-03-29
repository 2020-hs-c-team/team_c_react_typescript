import React from 'react';
import { Card, CardActions, CardContent, CardHeader, TextField, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import '../../../../styles/QuizDesc.css';
import { firebaseDb } from '../../../../firebase';
const messagesRef = firebaseDb.ref('messages');

function AddPlayerBtn() {

  var nameInput: String;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addUser = () => {
    messagesRef.push({
      image: "",
      text: nameInput,
    });
  }

  const inputName = (name: String) => {
    nameInput = name;
  }

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
              <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" disableBackdropClick>
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
                      onChange={e => {
                        inputName(e.target.value)
                      }}
                      />
                    </div>
                  </div>
                </DialogContent>
                <DialogActions>
                  <Button onClick={e => {
                    handleClose()
                    addUser()
                  }} color="primary">
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