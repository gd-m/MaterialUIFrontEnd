import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

class MainContainer extends Component {

    render() { 
        return ( 
            <div>
                <Paper>
        <Container maxWidth="sm">
          <Grid>
           <h1> React Application with Material UI </h1>
          </Grid>
        </Container>
      </Paper>
            </div>
         );
    }
}
 
export default MainContainer;