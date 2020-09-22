import React from 'react';
import {
  withStyles,
  makeStyles,
} from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

var faultBlue = '#7DBCC9';


const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: faultBlue,
    },
    '& label': {
        color: 'grey',
      },
    '& .MuiInput-underline:after': {
      borderBottomColor: faultBlue,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'grey',
      },
      '&:hover fieldset': {
        borderColor: faultBlue,
      },
      '&.Mui-focused fieldset': {
        borderColor: faultBlue,
      },
    },
  },
})(TextField);


const useStyles = makeStyles((theme) => ({
  square: {
    //To make Square Shape
    width: 140,
    height: 140,
    backgroundColor: '#14ff5f',
    backgroundColor: 'black',
    border: '1px solid',
    borderColor: 'grey',
},
    gridRoot: {
        flexGrow: 1,
      },
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '110px',
        cursor: 'pointer',
      },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  title: {
    margin: theme.spacing(1),
    width: '100%',
  },
  input: {
    color: "white",
  },
  header: {
      margin: 0,
  },
  catBorder: {
    border: '1px grey solid',
    backgroundColor: 'black',
    width: '50%',
},
catGroup: {
    backgroundColor: faultBlue,
    width: '100%',
    margin: 8,
    marginLeft: 0,

},
catName: {
    color: 'white',
},

 selectHero: {
     margin: 'auto',
     marginLeft: 20,
     fontSize: 18,
 },
 heroSelectLeft: {
     width: '100%',
     height: 390,
     overflowY: 'auto',
     overflowX: 'hidden',
     border: '1px purple solid',
 },
 heroSelectRight: {
    width: '100%',
    border: '1px pink solid',
    height: '100%',
},
heroSelectContainer: {
    width: "50%"
},
img: {
    width: '100%',
    height: '110px',
},
heroLabel: {
    position: 'absolute',
    color: 'white',
    backgroundColor: 'grey',
    width: '100%',
    bottom: 0,
},
heroWrapper: {
    position: 'relative',
},
activeHero: {
  border: '1px solid',
  borderColor: faultBlue
},
}));




function CustomizeView() {
  const classes = useStyles();

  return (
      <div style={{height: '100%'}}>
            <div>Customize Page</div>
            <div className="footer" style={{border: '1px purple solid'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '30px'}}>
                <div>
                  <Link to="/create/details">
                    <Button variant="contained" color="primary" href="/create/details">
                        BACK
                    </Button>
                    </Link>
                </div>
                <div>
                  <Link to="/create/review">
                    <Button variant="contained" color="primary">
                        NEXT
                    </Button>
                    </Link>
                </div>   
              </div>
            </div>    
            </div>
      
  );
}

export default CustomizeView
