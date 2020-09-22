import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


import CustomizeCatView from './CustomizeCatView'
import CustomizeView from './CustomizeView'


var faultBlue = '#7DBCC9';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    paddingTop: '0px',
    paddingRight: 50,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '800px',
    backgroundColor: 'transparent',
    color: 'white',
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



export default function CustomizeGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={8} md={9}>
          <Paper className={classes.paper}>
            <CustomizeView />
            </Paper>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Paper className={classes.paper}>
            <CustomizeCatView />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}