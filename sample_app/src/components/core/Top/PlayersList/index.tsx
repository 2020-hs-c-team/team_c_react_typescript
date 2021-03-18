import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import { Star } from '@material-ui/icons'
import { Favorite } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

function RenderIcon(props: any) {
  console.log("auth:" + props.auth)
  if(props.auth == 'test') { // TODO：プレイヤーの回答権を判定
    return <Star color="secondary" />;
  } else {
    return <Favorite />;
  }
}

function PlayersList(props: any) {
  console.log(props.image);
  console.log(props.text);
  const classes = useStyles();
  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemText primary={props.text} />
        <RenderIcon
          auth={props.text} // TODO：プレイヤーの回答有無を取得
        />
      </ListItem>
      <Divider component="li" />
    </List>
  );
}


export default PlayersList;
