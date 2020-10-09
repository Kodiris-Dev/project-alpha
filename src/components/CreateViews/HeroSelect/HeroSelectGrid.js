import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import HeroSelectView from './HeroSelectView'






var faultBlue = '#7DBCC9';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 40,
    paddingBottom: 0,
  },
  paper: {
    padding: theme.spacing(3),
    paddingTop: '0px',
    paddingRight: 50,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: 'transparent',
    color: 'white',
    height: '100%',
  },
  title: {
    border: '1px solid red',
    textAlign: 'left',
    fontSize: '28px',
  },
  textRoot: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    '&.Mui-focused fieldset': {
      borderColor: 'green',
      },
    },
  },
  fieldWrapper: {
    border: "1px red solid",
    textAlign: "left",
  },
}));



export default function CreateGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0} >
        <Grid item xs={12} style={{height: '100%'}}>
          <Paper className={classes.paper}>
              <HeroSelectView />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}