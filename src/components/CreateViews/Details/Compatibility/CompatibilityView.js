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


import CompatibilitySteps from './CompatibilitySteps'
import HeroDragDrop from './HeroDragDrop/HeroDragDrop';



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
    position: 'relative',
    paddingTop: 50,
    marginBottom: 10,
  },
setWrapper: {
  width: '100%',
},

}));
  function CompatibilityView() {
    const classes = useStyles()
  return (
      <div style={{position: 'relative'}} style={{height: '100%'}} >
            <CompatibilitySteps />
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
                    backgroundColor: faultBlue,
                    }}>
                      ASPECTS
                  </Button>
              </Link>
              <Link to="/create/details/items">
                  <Button variant="contained" color="primary" style={{width: 120}}
                  style={{
                    width: 120,
                    border: '1px solid',
                    borderColor: faultBlue,
                    backgroundColor: faultBlue,
                    }}>
                      ITEMS
                  </Button>
              </Link>
              <Link to="/create/details/abilities">
                  <Button variant="contained" color="primary" style={{width: 120}}
                  style={{
                    width: 120,
                    border: '1px solid',
                    borderColor: faultBlue,
                    backgroundColor: faultBlue,
                    }}>
                      ABILITIES
                  </Button>
              </Link>
              <Link to="/create/details/compatibility">
                  <Button variant="contained" color="primary" style={{width: 120}}
                                    style={{
                                      width: 120,
                                      border: '1px solid',
                                      borderColor: faultBlue,
                                      }}>
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
              <div style={{width: '100%'}}>
                  <HeroDragDrop />
              </div>
            </div>
            <div className={classes.footer}>
              <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '30px'}}>
              <div>
                  <Link to="/create/details/abilities">
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

export default CompatibilityView
