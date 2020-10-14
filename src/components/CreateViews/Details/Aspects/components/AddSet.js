import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import AspectImg from './AspectImg'
import CloseIcon from '@material-ui/icons/Close';
import Set from './Set'


function getModalStyle() {
  const top = 45;
  const left = 45;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
var faultBlue = '#7DBCC9';
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 800,
    backgroundColor: 'black',
    border: '1px solid',
    borderColor: faultBlue,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    color: 'white',
    height: 620,

  },
  selectedWrapper: {
      display: 'flex',
      justifyContent: 'center',
  },
  aspectsWrapper: {
      marginTop: 10,
  },
  aspectsRow: {
      display: 'flex',
      justifyContent: 'center',
  },
  selected: {
      border: "1px solid",
      borderColor: faultBlue,
      position: 'relative',
      marginBottom: 20,
  },
  contentWrapper: {
      width: '80%',
      border: '1px solid red',
  },
  editWrapper: {
      width: '20%',
      border: '1px solid green',
  }
}));

export default function AddSet() {
  var [isCreated, setCreated] = useState(false)
  var [selected1, setAspect] = useState('None Selected')
  var [selected2, setAspect2] = useState('None Selected')

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCreated(isCreated = true)
  };
  const deleteSet = () => {
    setCreated(isCreated = false)
  };


  function selected(name) {
      console.log(name)
      console.log("State 1: " + selected1)
      console.log("State 2: " + selected2)
      if (selected1 != 'None Selected' && selected2 != 'None Selected') {
        alert('Please remove an aspect before selecting another')
        }
       else if (selected1 != 'None Selected') {
        setAspect2(selected2 = name)
      } else if (selected1 == 'None Selected') {
        setAspect(selected1 = name)
      }
  }

  function deSelect(aspect) {
    if (aspect == 'aspect1') {
        setAspect(selected1 = 'None Selected')
    }
    if (aspect == 'aspect2') {
        setAspect2(selected2 = 'None Selected')
    }
  }

  function body() {
    console.log('selected aspect 1 : ' + selected1)
    console.log('selected aspect 2 : ' + selected2)
    return(
    <div style={modalStyle} className={classes.paper}>
      <div className={classes.selectedWrapper}>
          <div className={classes.selected}>
          <CloseIcon onClick={ () => deSelect('aspect1')} style={{position: 'absolute', top: 0, zIndex: 1}}/>
            <AspectImg name={selected1}/>
          </div>
          <div className={classes.selected}>
          <CloseIcon onClick={ () => deSelect('aspect2')} style={{position: 'absolute', top: 0,  zIndex: 1}}/>
            <AspectImg name={selected2}/>
          </div>
      </div>
      <div className={classes.aspectsWrapper}>
          <div className={classes.aspectsRow}>
              <div onClick={ () => selected('Templar')}>
                <AspectImg name="Templar"/>
              </div>
              <div onClick={ () => selected('Magician')}>
                <AspectImg name="Magician"/>
              </div>
              <div onClick={ () => selected('Titan')}>
                <AspectImg name="Titan"/>
              </div>
              <div onClick={ () => selected('King')}>
                <AspectImg name="King"/>
              </div>
          </div>
          <div className={classes.aspectsRow}>
          <div onClick={ () => selected('Clairvoyant')}>
                <AspectImg name="Clairvoyant"/>
              </div>
              <div onClick={ () => selected('Warlock')}>
                <AspectImg name="Warlock"/>
              </div>
              <div onClick={ () => selected('Rook')}>
                <AspectImg name="Rook"/>
              </div>
              <div onClick={ () => selected('Ace')}>
                <AspectImg name="Ace"/>
              </div>
          </div>
          <div className={classes.aspectsRow}>
          <div onClick={ () => selected('Bishop')}>
                <AspectImg name="Bishop"/>
              </div>
              <div onClick={ () => selected('Queen')}>
                <AspectImg name="Queen"/>
              </div>
              <div onClick={ () => selected('Beasthunter')}>
                <AspectImg name="Beasthunter"/>
              </div>
              <div onClick={ () => selected('Hunter')}>
                <AspectImg name="Hunter"/>
              </div>
          </div>
          <div className={classes.aspectsRow}>
          <div onClick={ () => selected('Rogue')}>
                <AspectImg name="Rogue"/>
              </div>
          </div>
      </div>
    </div>
      )
  }

  function CreateSet(props) {
      const isSet = props.isCreated
      if (isSet) {
          return (
              <div>
              <div style={{display: 'flex'}}>
                  <div className={classes.contentWrapper}>
                    <Set aspect1={selected1} aspect2={selected2}/>
                  </div>
                    <div className={classes.editWrapper}>
                    <button type="button" onClick={deleteSet}>
                        Delete Set
                    </button>
                </div> 
              </div>
              <AddSet />
              </div>


          )
      }
    return (
        <div>
            <button type="button" onClick={handleOpen}>
            Add New Set
        </button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            {body()}
        </Modal>
        </div>
    )
  }

  return (
    <div style={{marginTop: 20}}>
      <CreateSet isCreated={isCreated}/>
    </div>
  );
}