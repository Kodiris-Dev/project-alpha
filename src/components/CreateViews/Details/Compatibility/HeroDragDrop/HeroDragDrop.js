import React from 'react'
import Board from '../DragDrop/Board'
import Card from '../DragDrop/Card'
import {
    makeStyles,
  } from '@material-ui/core/styles';
import HeroList from '../../../../Hero/HeroList'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  
  board: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    maxWidth: '100%',
    borderColor: 'red',
  },
  
  card: {
    cursor: 'pointer',
    color: 'black',
    width: 90,
    height: 90,
    marginTop: 10,
  },
  heroPaper: {
      width: 90,
      height: 90,
      margin: 10,
      backgroundColor: 'transparent',
  },
  portrait: {
      width: '100%',
      height: '100%',
  },
  columnContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 5,
      width: '100%',
  },
  boardColumn: {
      width: '10%',
      padding: 10,
      paddingLeft: 5,
      paddingRight: 5,
      paddingBottom: 90,
  }
  }));


function HeroBlock(props) {

    const classes = useStyles();
    console.log(props)
    return (
        <Card id={props.id} className={classes.card} draggable='true' img={props.src}></Card>
    )
}


export default function HeroDragDrop() {
    const classes = useStyles()

    const getHeroList = (heroListObj) => {
        return (
            <Grid>
            <Paper className={classes.heroPaper}>
            <HeroBlock { ...heroListObj }/>
            </Paper>
            </Grid>

        )
    }

    return (
        <div>
            <Board id='board-1' className={classes.board}>
                <Grid container spacing={2}>
                {HeroList.map(heroListObj => getHeroList(heroListObj))}
                </Grid>
            </Board>
            <div className={classes.columnContainer}>
                <Board id='board-2' className={classes.boardColumn}>
                    <div style={{backgroundColor: '#BC0000'}}>Extreme</div>
                </Board>
                <Board id='board-3' className={classes.boardColumn}>
                <div style={{backgroundColor: '#BC6B00'}}>Major</div>
                </Board>
                <Board id='board-4' className={classes.boardColumn}>
                <div style={{backgroundColor: '#BCAF00'}}>Moderate</div>
                </Board>
                <Board id='board-5' className={classes.boardColumn}>
                <div style={{backgroundColor: '#5E5801'}}>Minor</div>
                </Board>
                <Board id='board-6' className={classes.boardColumn}>
                <div style={{backgroundColor: '#404040'}}>None</div>
                </Board>
                <Board id='board-7' className={classes.boardColumn}>
                <div style={{backgroundColor: '#275445'}}>Decent</div>
                </Board>
                <Board id='board-8' className={classes.boardColumn}>
                <div style={{backgroundColor: '#127B57'}}>Good</div>
                </Board>
                <Board id='board-9' className={classes.boardColumn}>
                <div style={{backgroundColor: '#146680'}}>Strong</div>
                </Board>
                <Board id='board-10' className={classes.boardColumn}>
                <div style={{backgroundColor: '#002488'}}>Optimal</div>
                </Board>
            </div>
        </div>
    )
}