import React from 'react';
import {
  withStyles,
  makeStyles,
} from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { Link } from 'react-router-dom'


import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import '../Hero/HeroList'
import printHeroName from './printHeroName'
import HeroList from '../Hero/HeroList'
import { heroName } from './printHeroName'
import Button from '@material-ui/core/Button';

var faultBlue = '#7DBCC9';
console.log(heroName)

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


function CreateView() {
  const classes = useStyles();
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const getHeroList = (heroListObj) => {
      return (
        <Grid item xs={4}>
            <Paper className={classes.paper}>
            <HeroBlock { ...heroListObj }/>
            </Paper>
        </Grid>
      )
  }



  return (
      <div style={{height: '100%'}}>
            <div className={classes.fieldWrapper}>
                <h2 className={classes.header}>TITLE</h2>
                <form className={classes.root} noValidate autoComplete="off">
                    <CssTextField style={{marginLeft: 0, marginRight: 0}}
                        size="small"
                        required
                        className={classes.title}
                        label="Title Name"
                        variant="outlined"
                        id="custom-css-outlined-input"
                        InputProps={{
                            className: classes.input
                        }}
                    />
                </form>
            </div>
            <div className={classes.fieldWrapper}>
                <h2 className={classes.header}>CATEGORY</h2>
                <ToggleButtonGroup className={classes.catGroup}
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                    >
                    <ToggleButton className={classes.catBorder} value="left" aria-label="left aligned">
                        <div className={classes.catName}>GUIDE</div>
                    </ToggleButton>
                    <ToggleButton className={classes.catBorder} value="right" aria-label="right aligned">
                        <div className={classes.catName}>BUILD</div>
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div className={classes.fieldWrapper}>
                <h2 className={classes.header}>SELECT HERO</h2>
                <div style={{display: 'flex', border: 'solid 1px red'}}>
                <div style={{border: '1px solid green', width: '50%', paddingRight: '20px'}}>
                  <div style={{display: 'flex', marginTop: '8px'}}>
                        <div id = "heroImage" className={classes.square}></div>
                        <div className={classes.selectHero} id="heroName">{heroName}</div>
                  </div>
                
                  <div className={classes.heroSelectLeft}>
                        <div className={classes.gridRoot}>
                            <Grid container spacing={3}>
                                {HeroList.map(heroListObj => getHeroList(heroListObj))}
                            </Grid>
                  </div>
                </div>
                </div>
                
                <div className={classes.heroSelectContainer}>
                    
                    <div className={classes.heroSelectRight}>
                        right
                    </div>
                </div>
                </div>
            <div className="footer" style={{border: '1px purple solid'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '30px'}}>
                <div>

                </div>
                <div>
                  <Link to="/create/details">
                    <Button variant="contained" color="primary">
                        NEXT
                    </Button>
                  </Link>
                </div>   
              </div>
            </div>    
            </div>
        </div>         
  );
}

export default CreateView
