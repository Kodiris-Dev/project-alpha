import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import AspectImg from './AspectImg'
import CloseIcon from '@material-ui/icons/Close';
import Group from './Group'
import { createBootstrapComponent } from 'react-bootstrap/esm/ThemeProvider';


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
  },
  editWrapper: {
      width: '20%',
  }
}));

var storedAspects1 = []
var storedAspects2 = []
var count = 0

export default function AddGroup() {
  var [selected1, setAspect] = useState('None Selected')
  var [selected2, setAspect2] = useState('None Selected')

  var [ifDeleted, delSet] = useState(false)

  console.log('storedArray1:', storedAspects1)
  console.log('storedArray2:', storedAspects2)

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    storedAspects1.push(selected1)
    storedAspects2.push(selected2)
    setAspect(selected1 = 'None Selected')
    setAspect2(selected2 = 'None Selected')
  };




  function selected(name) {
      if (selected1 !== 'None Selected' && selected2 !== 'None Selected') {
        alert('Please remove an aspect before selecting another')
        }
       else if (selected1 !== 'None Selected') {
        setAspect2(selected2 = name)
      } else if (selected1 === 'None Selected') {
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

function deleteSet(id) {
    storedAspects1.splice(id, 1)
    storedAspects2.splice(id, 1)
    delSet(ifDeleted = true)
    console.log('storedArray1:', storedAspects1)
    console.log('storedArray2:', storedAspects2)
}

function CreateSet(props) {
    console.log('id:', props.id)
    console.log('value:', props.value)
    return (
        <div>
            <div style={{display: 'flex', marginTop: 20}}>
                  <div className={classes.contentWrapper}>
                  <Group aspect1={props.value} aspect2={storedAspects2[props.id]}/>
                  </div>
                    <div className={classes.editWrapper}>
                    <button type="button" onClick={() => deleteSet(props.id)}>
                        Delete Set
                    </button>
                    </div> 
                </div>

        </div>
    )
}

function MapSet(props) {
    console.log('AspectArray:', props.array)
    var array = props.array
    var arrayItems = array.map((aspect) =>
    <CreateSet id={storedAspects1.indexOf(aspect)} key={aspect.toString()} value={aspect} />
    )
    return (
        <div>
            {arrayItems}
        </div>
    )
}



  function body() {

    return(
    <div style={modalStyle} className={classes.paper}>
      Group title and description
    </div>
      )
  }
  if (ifDeleted) {
      delSet(ifDeleted=false)
      return (
        <div style={{marginTop: 20}}>
        <div>
              <div>
              <MapSet array={storedAspects1} />
              </div>
              <div style={{marginTop: 20}}>
                <button type="button" onClick={() => handleOpen()}>
                Add New Item Group
                </button>
              </div>

          <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
          >
              {body()}
          </Modal>
          </div>
      </div>
      )
  }

  return (
    <div style={{marginTop: 20}}>
      <div>
      <div>
            <MapSet array={storedAspects1} />
            </div>
            <div style={{marginTop: 20}}>
                <button type="button" onClick={() => handleOpen()}>
                Add New Item Group
                </button>
              </div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            {body()}
        </Modal>
        </div>
    </div>
  );
}

