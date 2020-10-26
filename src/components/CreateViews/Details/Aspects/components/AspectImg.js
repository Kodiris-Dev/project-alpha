import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    selectedAspect: {
        backgroundSize: 'cover',
        width: 100,
        height: 100,
        position: 'relative',
    },
    aspectName: {
        backgroundColor: 'black',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        textAlign: 'center',
    }
  }));
export default function AspectImg(props) {
    const classes = useStyles();
    if (props.name=='Warlock' || props.name=="Queen" || props.name=="Magician") {
        var image = 'https://global-uploads.webflow.com/5d44771a95c1f5121689f944/5de96653519095c41422e30d_Fault_Factions-09.png' 
    }
    if (props.name=='King' || props.name=="Ace" || props.name=="Hunter") {
        var image = 'https://global-uploads.webflow.com/5d44771a95c1f5121689f944/5de9665449103c2aee94774d_Fault_Factions-08.png' 
    }
    if (props.name=='Titan' || props.name=="Rook" || props.name=="Beasthunter") {
        var image = 'https://global-uploads.webflow.com/5d44771a95c1f5121689f944/5de9665431edeaf76db29d04_Fault_Factions-07.png' 
    }
    if (props.name=='Templar' || props.name=="Clairvoyant" || props.name=="Bishop") {
        var image = 'https://global-uploads.webflow.com/5d44771a95c1f5121689f944/5de9665431edea21cab29d03_Fault_Factions-06.png' 
    }
    if (props.name=='Rogue') {
        var image = 'https://global-uploads.webflow.com/5d44771a95c1f5121689f944/5de9665449103c496d94774e_Fault_Factions-10.png' 
    }
    return (
        <div className={classes.selectedAspect}
          style={{backgroundImage: `url(${image})`}}
        >
            <div className={classes.aspectName}>{props.name}</div>
        </div>
    )
}