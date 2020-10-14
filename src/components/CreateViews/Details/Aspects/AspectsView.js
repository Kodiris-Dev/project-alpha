import React from 'react';
import {
  withStyles,
  makeStyles,
} from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom'


import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


import Button from '@material-ui/core/Button';


import AspectsSteps from './AspectsSteps'

import Set from './components/Set'
import AddSet from './components/AddSet'

var faultBlue = '#7DBCC9';
const useStyles = makeStyles((theme) => ({
  square: {
    //To make Square Shape
    width: 115,
    height: 115,
    backgroundColor: '#14ff5f',
    backgroundColor: 'black',
    border: '1px solid',
    borderColor: 'grey',
},
    gridRoot: {
        flexGrow: 1,
      },
    heroPaper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '110px',
        cursor: 'pointer',
        width: 110,
      },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },

footer: {
  position: 'absolute',
  bottom: 0,
  width: '57.5%',
  marginBottom: 30,
},
setWrapper: {
  width: '100%',
}
}));

function changeOpacity() {
  console.log("Opacity Function Ran Successfully")
}

function AspectsView() {
  const classes = useStyles();
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };


  return (
      <div style={{position: 'relative'}} style={{height: '100%'}} >
            <AspectsSteps />
            <div style={{
              display: 'flex', 
              justifyContent: 'space-between', 
              marginLeft: 30, 
              marginRight: 30, 
              marginTop: 20}}>
              <Link to="/create/details">
                  <Button variant="contained" color='primary' 
                    style={{
                      width: 120,
                      border: '1px solid',
                      borderColor: faultBlue,
                      backgroundColor: faultBlue,
                      }}>
                      INTRO
                  </Button>
              </Link>
              <Link to="/create/details/aspects">
                  <Button variant="contained" color="primary" 
                  style={{
                    width: 120,
                    border: '1px solid',
                    borderColor: faultBlue,
                    }}>
                      ASPECTS
                  </Button>
              </Link>
              <Link to="/create/details/items">
                  <Button variant="contained" color="primary" style={{width: 120}}>
                      ITEMS
                  </Button>
              </Link>
              <Link to="/create/details/abilities">
                  <Button variant="contained" color="primary" style={{width: 120}}>
                      ABILITIES
                  </Button>
              </Link>
              <Link to="/create/details/compatibility">
                  <Button variant="contained" color="primary" style={{width: 120}}>
                      COMPATIBILITY
                  </Button>
              </Link>
            </div>
            <div style={{
              display: 'flex', 
              justifyContent: 'space-between', 
              marginLeft: 30, 
              marginRight: 30, 
              marginTop: 20
            }}>
              <div className={classes.setWrapper}>
                <AddSet />
              </div>
            </div>
            <div className={classes.footer}>
              <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '30px'}}>
              <div>
                  <Link to="/create/details">
                    <Button variant="contained" color="primary" style={{width: 100}}>
                        BACK
                    </Button>
                  </Link>
                </div>   
                <div>
                  <Link to="/create/details/items">
                    <Button variant="contained" color="primary" style={{width: 100}}>
                        NEXT
                    </Button>
                  </Link>
                </div>   
              </div>
            </div>   
      </div>       
  );
}

export default AspectsView
