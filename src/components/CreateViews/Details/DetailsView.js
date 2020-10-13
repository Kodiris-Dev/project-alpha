import React from 'react';
import {
  withStyles,
  makeStyles,
} from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom'


import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import printHeroName from '../printHeroName'
import Button from '@material-ui/core/Button';


import DetailsSteps from './DetailsSteps'

import JungleImg from '../../../assets/presskit/hero-portraits/default-boris.jpg'
import SoloImg from '../../../assets/presskit/hero-portraits/default-greystone.jpg'
import SupportImg from '../../../assets/presskit/hero-portraits/default-muriel.jpg'
import CarryImg from '../../../assets/presskit/hero-portraits/default-twinblast.jpg'
import MidImg from '../../../assets/presskit/hero-portraits/default-gideon.jpg'

var faultBlue = '#7DBCC9';
var jungleRole = 'https://uploads-ssl.webflow.com/5e4eab335c128658e8a2b36e/5f17379da612cd829ff419bb_Role_Jungle.svg'
var soloRole = 'https://uploads-ssl.webflow.com/5e4eab335c128658e8a2b36e/5f17378dd4afa78eac23ca35_Role_Solo.svg'
var supportRole = 'https://uploads-ssl.webflow.com/5e4eab335c128658e8a2b36e/5f1737aa4f111107a79de041_RoleSup.svg'
var carryRole = 'https://uploads-ssl.webflow.com/5e4eab335c128658e8a2b36e/5f1737b74012346a95d8acfd_Role_ADC.svg'
var midRole = 'https://uploads-ssl.webflow.com/5e4eab335c128658e8a2b36e/5f1737b0e17d455dcc574ab3_Role_Mid.svg'

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
roleWrapper: {
  height: 275,
  width: '18%',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '70% 100%',
  backgroundSize: 'cover',
  alignItems: 'center',
},
role: {
  position: 'absolute',
  bottom: 20,
  margin: 'auto',
},
roleImg: {
  width: 140,
  height: 140,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
},
filterWrapper: {
  backdropFilter: 'opacity(40%)',
  width: '100%',
  height: '100%',
  display: 'flex',
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',

  "&:hover": {
    backdropFilter: 'opacity(100%)',
  },
},
introField: {
  color: 'white', 
},
cssLabel: {
  color: faultBlue,
},
notchedOutline: {
  borderWidth: '1px',
  borderColor: faultBlue,
  height: 250,
},
fieldWrapper: {
  width: '100%',
}
}));

function changeOpacity() {
  console.log("Opacity Function Ran Successfully")
}

function DetailsView() {
  const classes = useStyles();
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
      <div style={{position: 'relative'}} style={{height: '100%'}} >
            <DetailsSteps />
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
                      }}>
                      INTRO
                  </Button>
              </Link>
              <Link to="/create/details/aspects">
                  <Button variant="contained" color="primary" style={{width: 120}}>
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
            <div style={{marginTop: 20, textAlign: 'left', marginLeft: 30}}>Select one role:</div>
            <div style={{
              display: 'flex', 
              justifyContent: 'space-between', 
              marginLeft: 30, 
              marginRight: 30, 
              marginTop: 20
            }}>
              
              <div className={classes.roleWrapper} style={{backgroundImage: `url(${JungleImg})`}}>
                <div className={classes.filterWrapper} onClick={changeOpacity()}>
                  <div className={classes.roleImg} style={{backgroundImage: `url(${jungleRole})`}}></div>
                  <div className={classes.role}>JUNGLE</div>
                </div>
              </div>

              <div className={classes.roleWrapper} style={{backgroundImage: `url(${SoloImg})`}}>
                <div className={classes.filterWrapper}>
                  <div className={classes.roleImg} style={{backgroundImage: `url(${soloRole})`}}></div>
                  <div className={classes.role}>SOLO</div>
                </div>
              </div>

              <div className={classes.roleWrapper} style={{backgroundImage: `url(${SupportImg})`}}>
                <div className={classes.filterWrapper}>
                  <div className={classes.roleImg} style={{backgroundImage: `url(${supportRole})`}}></div>
                  <div className={classes.role}>SUPPORT</div>
                </div>
              </div>

              <div className={classes.roleWrapper} style={{backgroundImage: `url(${CarryImg})`}}>
                <div className={classes.filterWrapper}>
                  <div className={classes.roleImg} style={{backgroundImage: `url(${carryRole})`}}></div>
                  <div className={classes.role}>CARRY</div>
                </div>
              </div>

              <div className={classes.roleWrapper} style={{backgroundImage: `url(${MidImg})`}}>
                <div className={classes.filterWrapper}>
                  <div className={classes.roleImg} style={{backgroundImage: `url(${midRole})`}}></div>
                  <div className={classes.role}>MID</div>
                </div>
              </div>

            </div>
            <div style={{marginTop: 20, width: '100%'}}>
                <TextField
                  id="filled-multiline-static"
                  label="Introduction Text"
                  multiline
                  rows={4}
                  className={classes.fieldWrapper}
                  defaultValue="Write Your Introduction Here"
                  variant="outlined"
                  color='secondary'
                  InputProps={{
                    classes: {
                      root: classes.introField,
                      notchedOutline: classes.notchedOutline,
                    }
                  }}
                  InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                    },
                  }}
                  />
            </div>
            <div className={classes.footer}>
              <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '30px'}}>
              <div>
                  <Link to="/create/heroselect">
                    <Button variant="contained" color="primary" style={{width: 100}}>
                        BACK
                    </Button>
                  </Link>
                </div>   
                <div>
                  <Link to="/create/details/aspects">
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

export default DetailsView
