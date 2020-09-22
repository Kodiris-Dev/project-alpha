import React from 'react'
import { makeStyles, withTheme } from '@material-ui/core/styles';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Chip from '@material-ui/core/Chip';

var faultBlue = '#7DBCC9';
const useStyles = makeStyles((theme) => ({
  displayWrapper: {
      height: 100,
      marginTop: 10,
      display: 'flex',
      overflow: 'hidden',
      boxShadow: "5px 5px 1px black",
      backgroundColor: '#050505'
  },
  profileBox: {
      height: '90px',
      width: '90px',
      padding: 5,
      float: 'left',
  },
  profileImg: {
      width: '90px',
      height: '90px',
      objectFit: 'cover',
  },
  content: {
      height: '100%',
      padding: 5,
      overflow: 'hidden',
      width: '100%',
  },
  buildName: {
    textAlign: 'left',
    width: '100%',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    height: 20,
    fontSize: '100%'
  },
  headingWrapper: {
      width: '100%',
      overflow: 'hidden',
  },
  authorBar: {
    textAlign: 'left',
    width: '100%',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    height: 20,
    fontSize: '80%'
  },
  topWrapper: {
      display: 'flex',
      width: '100%',
      height: 45,
  },
  tagBar: {
      width: '80px',
      float: 'right',
      marginRight: '10px',
  },
  buildBar: {
      height: 40,
      display: 'flex',
      justifyContent: 'space-between',
      width: '84%',
  },
  buildItem: {
      border: '1px solid',
      borderColor: faultBlue,
      height: 40,
      width: 40,
  },
  itemImage: {
      width: 40,
      height: 40,
  },
  favorite: {
      float: 'right',
      width: 65,
      paddingTop: 10,
  },
  chip: {
      color: 'white',
      borderColor: faultBlue,
      fontSize: 10,
      height: 15,
      width: 55,
  }
}));

function DisplayBuild(props) {
    const classes = useStyles()
    console.log(props)
    return (
        <div className={classes.displayWrapper}>
            <div className={classes.profileBox}>
                <img className={classes.profileImg} src={props.url}></img>
            </div>
            <div className={classes.content}>
                <div className={classes.topWrapper}>
                    <div className={classes.headingWrapper}>
                        <div className={classes.buildName}>
                            {props.name}
                        </div>
                        <div className={classes.authorBar}>
                            by Kodiris updated on 9/14/2020
                        </div>
                    </div>
                    <div className={classes.favorite}>
                    <FavoriteBorderIcon  style={{color: 'red'}}/>
                </div>
                </div>
                <div style={{display: 'flex'}}>
                <div className={classes.buildBar}>
                    <div className={classes.buildItem}>
                        <img className={classes.itemImage}src="https://pbs.twimg.com/media/EhLk9BvWkAEcJVC?format=jpg&name=medium"></img>
                    </div>
                    <div className={classes.buildItem}>
                        <img className={classes.itemImage}src="https://pbs.twimg.com/media/Eg1_fuWXkAAdOGG?format=jpg&name=medium"></img>
                    </div>
                    <div className={classes.buildItem}>
                        <img className={classes.itemImage}src="https://pbs.twimg.com/media/EgruBPSXsAAa3pl?format=jpg&name=medium"></img>
                    </div>
                    <div className={classes.buildItem}>
                        <img className={classes.itemImage}src="https://pbs.twimg.com/media/EghXFLeU8AAsIdB?format=jpg&name=medium"></img>
                    </div>
                    <div className={classes.buildItem}>
                        <img className={classes.itemImage}src="https://pbs.twimg.com/media/EhBc8V2WoAEd66Z?format=jpg&name=medium"></img>
                    </div>
                    <div className={classes.buildItem}>
                        <img className={classes.itemImage}src="https://pbs.twimg.com/media/EhLk9BvWkAEcJVC?format=jpg&name=medium"></img>
                    </div>
                </div>

                </div>
                
            </div>
            <div className={classes.tagBar}>
                <Chip className={classes.chip} style={{borderColor: 'brown'}} label="17FR" variant="outlined" />
                <Chip className={classes.chip} style={{borderColor: 'purple'}} label="0.5.2" variant="outlined" />
                <Chip className={classes.chip} style={{borderColor: 'brown'}} label="17FR" variant="outlined" />
                <Chip className={classes.chip} style={{borderColor: 'purple'}} label="0.5.2" variant="outlined" />
            </div>
            <div style={{width: 70, display: 'flex', backgroundColor: 'black'}}>
                <div style={{margin: 'auto'}}>
                    <KeyboardArrowUpIcon style={{color: 'green'}}/>
                    10000
                    <KeyboardArrowDownIcon style={{color: 'red'}}/>
                </div>
            </div>
        </div>
    )
}
export default DisplayBuild