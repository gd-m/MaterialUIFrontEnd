import React from 'react';
import {AppBar, Toolbar} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
//import { makeStyles } from '@material-ui/core/styles';
//import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';


export default () => {

    return(
        <div className="NavBar">
            
            <AppBar position="static" color='primary'>
                <Toolbar>
                    <Typography variant="h6" className="title">
                        Reader's Notebook
                    </Typography>
                    <Button color="inherit" href="/login">Login</Button>
                    <Button color="inherit" href="/">Home</Button>
                    <Button color="inherit" href="/">Books</Button>
                    <Button color="inherit" href="/">Logout</Button>
                </Toolbar>   
            </AppBar>
        </div>
    )
}