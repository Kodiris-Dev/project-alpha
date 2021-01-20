import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import AspectImg from './AspectImg'
import AddSet from '../../Aspects/components/AddSet'

var faultBlue = '#7DBCC9';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        width: '100%',
        textAlign: 'left',
        border: "1px solid white",
    },
    left: {
        width: '30%',
    },
    right: {
        width: '70%'
    },
    textField: {
        color: 'white', 
      },
    introField: {
        color: 'white',
    },
      cssLabel: {
        color: 'white',
      },
      notchedOutline: {
        borderWidth: '1px',
        borderColor: 'grey',
      },
      notchedOutlineDesc: {
        borderWidth: '1px',
        borderColor: 'grey',
        height: 156,
      },
    aspectWrapper: {
        display: 'flex',
        marginTop: 10,
    },
    aspectIcon: {
        border: '1px solid',
        borderColor: 'grey',
        width: 100,
        height: 100,
        margin: 'auto',
        backgroundSize: 'cover',
    },
    fieldWrapper: {
        width: '100%',
      }
}))



export default function Group(props) {

    const classes = useStyles()

    return (
        <div className={classes.wrapper}>
            <div>This is the Title</div>
            <div>This is the Description</div>
            <AddSet />
        </div>
    )
}