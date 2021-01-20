import React from 'react'
import DisplayCardBuild from '../Display/DisplayCardBuild'
import StoredBuilds from '../StoredBuilds'
import { makeStyles } from '@material-ui/core/styles';

var faultBlue = '#7DBCC9';
const useStyles = makeStyles((theme) => ({
        wrapper: {
            backgroundColor: "black",
            padding: 10,
            boxShadow: '0px 3px 6px black',
        }
    }));

export default function ProCarousel(props) {

    const classes = useStyles()

    var trending1 = props.trending1
    var trending2 = props.trending2
    var trending3 = props.trending3

   

    function setTrendingBuilds(storedBuildsObj) {
        if (trending1 == storedBuildsObj.title) {

            trending1 = storedBuildsObj
            console.log("trending1:", trending1)
        }
        if (trending2 == storedBuildsObj.title) {

            trending2 = storedBuildsObj
            console.log("trending2:", trending2)
        }
        if (trending3 == storedBuildsObj.title) {

            trending3 = storedBuildsObj
            console.log("trending3:", trending3)
        }
        return (
            [trending1, trending2, trending3]
        )
    }

    StoredBuilds.map(storedBuildsObj => setTrendingBuilds(storedBuildsObj))


    return (
        <div className={classes.wrapper}>
 

        </div>

    )
}