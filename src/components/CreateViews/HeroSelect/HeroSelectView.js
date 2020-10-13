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
import HeroList from '../../Hero/HeroList'

import CategoryView from '../CategoryView'

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
footer: {
  position: 'absolute',
  bottom: 0,
  width: '57.5%',
  marginBottom: 30,
},
infoWrapper: {
},
heroSelWrapper: {
  marginTop: 20,
},
heroPortrait: {
  width: 171,
  height: 171,
},
heroInfo: {
  marginTop: 'auto',
  marginBottom: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
},
abilityImg: {
  width: 90,
  height: 90,
},
abilityPaper: {
  display: 'flex',
  backgroundColor: 'transparent',
  color: 'white',
  width: '100%',
}
}));

function HeroBlock(props) {

    const classes = useStyles();
    console.log(props)
    return (
        <div id="heroCard" className={classes.heroWrapper} onClick={ () => printHeroName(props.name, props.src)}>
            <div className={classes.heroLabel}>{props.name}</div>
            <img className={classes.img} src={props.src}></img>
        </div>
    )
}
  

function HeroSelectView() {
  const classes = useStyles();
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  




  const getHeroList = (heroListObj) => {
      return (
        <Grid item xs={2}>
            <Paper className={classes.heroPaper}>
            <HeroBlock { ...heroListObj }/>
            </Paper>
        </Grid>
      )
  }



  return (
      <div style={{position: 'relative'}} style={{height: '100%'}} >
            <CategoryView />
            <div className={classes.infoWrapper}>
            <div style={{display: 'flex', textAlign: 'center', marginTop: 20}}>
              <div id="heroName" style={{width: 171}}>No Hero Selected</div>
            </div>
            
              <div className={classes.heroInfo}>
                <div className={classes.heroPortrait} id="heroImage"></div>
                <div style={{width: '70%'}}>
                <Grid container spacing={1}>
                  <Grid item xs={4}>
                    <Paper className={classes.abilityPaper}>
                      <div id="qImg" className={classes.abilityImg}></div>
                      <div>
                          <div>Q</div>
                          <div>ABILITY NAME</div>
                      </div>
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                  <Paper className={classes.abilityPaper}>
                      <div id="rmbImg" className={classes.abilityImg}></div>
                      <div>
                          <div>RMB</div>
                          <div>ABILITY NAME</div>
                      </div>
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                  <Paper className={classes.abilityPaper}>
                      <div id="eImg" className={classes.abilityImg}></div>
                      <div>
                          <div>E</div>
                          <div>ABILITY NAME</div>
                      </div>
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                  <Paper className={classes.abilityPaper}>
                      <div id="pImg" className={classes.abilityImg}></div>
                      <div>
                          <div>P</div>
                          <div>ABILITY NAME</div>
                      </div>
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                  <Paper className={classes.abilityPaper}>
                      <div id="lmbImg" className={classes.abilityImg}></div>
                      <div>
                          <div>LMB</div>
                          <div>ABILITY NAME</div>
                      </div>
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                  <Paper className={classes.abilityPaper}>
                      <div id="rImg" className={classes.abilityImg}></div>
                      <div>
                          <div>R</div>
                          <div>ABILITY NAME</div>
                      </div>
                    </Paper>
                  </Grid>
                </Grid>
                </div>
              </div>

            </div>
            <div className={classes.heroSelWrapper}>
            <Grid container spacing={2}>
              {HeroList.map(heroListObj => getHeroList(heroListObj))}
            </Grid>
            </div>
            <div className={classes.footer}>
              <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '30px'}}>
              <div>
                  <Link to="/create">
                    <Button variant="contained" color="primary" style={{width: 100}}>
                        BACK
                    </Button>
                  </Link>
                </div>   
                <div>
                  <Link to="/create/details">
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

export default HeroSelectView
