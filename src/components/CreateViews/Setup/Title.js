import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Tools from '../../../assets/handyman-tools.svg'
import Book from '../../../assets/agenda.svg'
import Button from '@material-ui/core/Button'
import { useState } from 'react'

var faultBlue = '#7DBCC9';
const useStyles = makeStyles((theme) => ({
    tabWrapper: {
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center',
    },
    tabActive: {
        width: 115,
        height: 35,
        backgroundColor: faultBlue,
        display: 'flex',
    },
    tab: {
        width: 115,
        height: 35,
        backgroundColor: '#2A2A2A',
        display: 'flex',
    },
    tabLink: {
        display: 'inline-block',
        margin: 'auto',
    },
    content: {
        display: 'flex',
        marginTop: 20,
    },
    contentWrapper: {
        width: '49.7%',
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 80,
        paddingRight: 80,
        justifyContent: 'center',
    },
    img: {
        height: '74px',
        width: '74px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    button: {
        height: 50,
        width: '25%',
        margin: 'auto',
        marginTop: 40,
    },
    catHeader: {
        marginTop: 20,
        fontSize: 36,
        marginBottom: 80,
    },
    type: {
        fontSize: 20,
        borderBottom: '1px solid',
        borderBottomColor: faultBlue,
        display: 'inline-block',
        marginTop: 20,
        paddingBottom: 5,
        width: '25%',
        margin: 'auto',
    },

}))

export default function Title() {
    const classes = useStyles();
    const [build, setBuild] = useState(false)
    const [guide, setGuide] = useState(false)
    
    function SetImage(props) {
        var build = props.display
        if (build === true) {


            return (
                    <img style={{backgroundColor: faultBlue}} src={Tools} className={classes.img}></img>

            )
        } else {

            return (
                <img src={Tools} className={classes.img}></img>
            )
        }
    }
    function SetGuideImage(props) {
        var guide = props.display
        if (guide === true) {


            return (
                    <img style={{backgroundColor: faultBlue}} src={Book} className={classes.img}></img>

            )
        } else {

            return (
                <img src={Book} className={classes.img}></img>
            )
        }
    }
    
    function selectGuide() {
        setGuide(true)
        setBuild(false)
    }

    function selectBuild() {
        setGuide(false)
        setBuild(true)
    }

    return (
        <div>
            <div className={classes.catHeader}>CHOOSE YOUR PATH</div>
            <div className={classes.content}>
                <div className={classes.contentWrapper}>
                <SetImage display = {build}/>
                    <div className={classes.type}>BUILD</div>
                    <div style={{marginTop: 20, height: 85}}>          
                    A build is a quick an easy way to display one, or several item sets without thinking about the details. The best option for getting your ideas out there. Set it and forget it.
                    </div>
                    <Button 
                        id = 'buildButton'
                        className={classes.button} 
                        variant="contained" 
                        color="primary"
                        onClick={() => selectBuild(true)}>
                        Select
                    </Button>
                </div>
                <div style={{border: '1px solid white'}}></div>
                <div className={classes.contentWrapper}>
                <SetGuideImage display = {guide}/>
                    <div className={classes.type}>GUIDE</div>
                    <div style={{marginTop: 20, height: 85}}>          
                    A guide is an in-depth look into your chosen hero. Explain everything from multiple item sets and build paths, ability skill order and detailed ability descriptions.
                    </div>
                    <Button 
                        id = 'guideButton'
                        className={classes.button} 
                        variant="contained" 
                        color="primary"
                        onClick={() => selectGuide()}>
                        Select
                    </Button>
                </div>
            </div>
        </div>
    )
}