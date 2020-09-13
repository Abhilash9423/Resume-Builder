import React, { Component } from 'react';
import { Button } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme'
import { AppBar } from '@material-ui/core';
import {TextField} from '@material-ui/core'
import {Container} from '@material-ui/core'

class Success extends Component {

    previous = e => {
        e.preventDefault();
        this.props.prevStep()
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <>
                <Container maxWidth="sm" color="secondary" style={styles.container}  >
                <AppBar>
                    <h3 style={styles.button} >Success </h3>
                </AppBar>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h1>Please wait for the pdf to download, Thank you for using this app</h1>
                <button style={styles.button} variant="contained" color="primary" onClick={this.previous} >previous </button>
                </Container>
               


            </>
            </ThemeProvider>
        );
    }
}

const styles = {
    button:{
        margin:15
    },
    container:{
        backgroundColor:'#e0e0e0'

    },
    description:{
        margin:15,
        width:490
    }
}

export default Success;