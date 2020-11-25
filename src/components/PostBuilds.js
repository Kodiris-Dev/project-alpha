import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import $ from 'jquery'

const useStyles = makeStyles((theme) => ({ 
    root: {
        color: 'white',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        width: '10%',
        margin: 'auto',
    }
}))

var buildUri = 'http://faultariaapi-devtest.us-east-1.elasticbeanstalk.com/api/builds'


function createBuild() {
    let title = document.getElementById('buildTitle').value
    let hero = document.getElementById('hero').value
    let author = document.getElementById('author').value
    let upvotes = document.getElementById('upvotes').value
    let patch = document.getElementById('patch').value
    let id = document.getElementById('id').value
    let role = document.getElementById('role').value
    let displayBanner = document.getElementById('displayBanner').value
    var build = {
        Title: title,
        Author: author,
        Id: id,
        Date: "",
        Hero: hero,
        Upvotes: upvotes,
        Patch: patch,
        Role: role,
        DisplayBanner: displayBanner,
        Featured: []
    }
    let myData = JSON.stringify(build)
    console.log('MyData:', myData)
    $.ajax(
        {
            url: buildUri,
            type: "POST",
            contentType: "application/json",
            data: myData,
            success: function (result) {
                alert(result);
            },
    
    
        }).done(function () {
            console.log(this.data);
        });
    
}

function showBuilds() {
    $.getJSON('http://faultariaapi-devtest.us-east-1.elasticbeanstalk.com/api/builds')
        .done(function (data) {
            $.each(data, function (key, item) {
                $('<li>', { text: item["Title"] }).appendTo($('#builds'));
                $('<li>', { text: item["Hero"] }).appendTo($('#builds'));
            });
        });
}

export default function PostBuilds() {
    const classes = useStyles()
    return (
        <div style={{marginTop: 100, color: 'white', display: 'flex'}}>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="buildTitle" label="Title" color='white'/>
                <TextField id="author" label="Author" color='white'/>
                <TextField id="id" label="Id" color='white'/>
                <TextField id="date" label="Date" color='white'/>
                <TextField id="hero" label="Hero" color='white'/>
                <TextField id="upvotes" label="Upvotes" color='white'/>
                <TextField id="patch" label="Patch" color='white'/>
                <TextField id="role" label="Role" color='white'/>
                <TextField id="displayBanner" label="DisplayBanner" color='white'/>
                <Button onClick={() => createBuild()} style = {{marginTop: 20}} variant="contained" color="secondary">
                    Create Build
                </Button>
            </form>
            <div>../../assets/optimized/</div>
            <div style={{margin: 'auto'}}>
                <Button style={{marginBottom: 20}} onClick={() => showBuilds()} style = {{marginTop: 20}} variant="contained" color="secondary">
                    Display All Builds
                </Button>
                <ul style = {{color: 'white'}} id='builds'></ul>
            </div>
        </div>
    )
}