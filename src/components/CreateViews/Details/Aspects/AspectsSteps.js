import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden'
import { Link } from 'react-router-dom'
import { TextareaAutosize } from '@material-ui/core';

var faultBlue = '#7DBCC9';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 0,
    display: 'flex',
    justifyContent: 'space-between',
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: 'transparent',
    color: 'white',
  },
  save: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '20px',
    backgroundColor: 'black',
    color: 'white',
    border: '1px solid',
    borderColor: faultBlue,
    width: '85%',
  },
  stepDiv: {
    display: 'flex',
    height: '30px',
    justifyContent: 'flex-end',
},
  step: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
    alignItems: 'center',
    width: 150,
    backgroundColor: 'transparent'
  },
  stepLabel: {
    fontSize: 20,
    marginTop: 10,
    paddingRight: 5,
  },
  square: {
    //To make Square Shape
    position: 'relative',
    width: 35,
    height: 35,
    backgroundColor: '#14ff5f',
    transform: 'rotate(45deg)',
    backgroundColor: 'black',
    border: '1px solid',
    borderColor: faultBlue,
 },
 squareActive: {
  //To make Square Shape
  position: 'relative',
  width: 35,
  height: 35,
  backgroundColor: '#14ff5f',
  transform: 'rotate(45deg)',
  backgroundColor: faultBlue,
  border: '1px solid',
  borderColor: faultBlue,
},
  stepValue: {
      position: 'absolute',
      transform: 'rotate(-45deg)',
      top: '5%',
      left: '30%',
      fontSize: '25px',
  },
  stepWrapper: {
    display: 'flex',
  },
  line: {
    height: 20,
    width: 100,
  }
}));

export default function AspectsSteps() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.stepWrapper}>
        <div className={classes.step}>
          <div className={classes.square}>
            <div className={classes.stepValue}>1</div>
          </div>
          <div className={classes.stepLabel}>SETUP</div>
        </div>
        <div className={classes.line}></div>
      </div>
      <div className={classes.stepWrapper}>
        
        <div className={classes.step}>
          <div className={classes.squareActive}>
            <div className={classes.stepValue}>2</div>
          </div>
          <div className={classes.stepLabel}>DETAILS</div>
        </div>
        <div className={classes.line}></div>
      </div>
      <div className={classes.stepWrapper}>
        <div className={classes.step}>
          <div className={classes.square}>
            <div className={classes.stepValue}>3</div>
          </div>
          <div className={classes.stepLabel}>CUSTOMIZE</div>
        </div>
        <div className={classes.line}></div>
      </div>
      <div className={classes.stepWrapper}>
        <div className={classes.step}>
          <div className={classes.square}>
            <div className={classes.stepValue}>4</div>
          </div>
          <div className={classes.stepLabel}>REVIEW</div>
        </div>
        
      </div>
      
    </div>
  );
}