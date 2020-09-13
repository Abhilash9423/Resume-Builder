import React, { Component } from 'react';
import { Button } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme'
import { AppBar } from '@material-ui/core';
import {TextField} from '@material-ui/core'
import {Container} from '@material-ui/core'
import DivComponent from './DivComponent'
class Contact extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep()
    }
    previous = e => {
        e.preventDefault();
        this.props.prevStep()
    }

    render() {
        const {values,handleChange} = this.props
        return (
            <ThemeProvider theme={theme}>
                <>
                <Container maxWidth="sm" color="secondary" style={styles.container}  >
                <AppBar>
                    <h3 style={styles.button} >Contact Details </h3>
                </AppBar>
                <br/>
                <br/>
                <br/>
                <br/>
                <TextField 
                id="outlined-basic" 
                label="Phone Number" 
                variant="outlined" 
                placeholder="100100100111"
                style = {styles.button}
                fullWidth='true'
                onChange={handleChange('phone')}
                />
                 <br/>
                 <br/>
                <TextField 
                id="outlined-basic" 
                label="email  ID" 
                variant="outlined" 
                placeholder="yougotthis@positivity.com"
                fullWidth='true'
                style = {styles.button}
                defaultValue={values.email}
                onChange={handleChange('email')}
                />
                 <br/>
                <br/>
                <TextField 
                id="outlined-basic" 
                label="Linkedin URL" 
                variant="outlined" 
                fullWidth='true'
                placeholder="https://www.linkedin.com/earth/Batman"
                style = {styles.button}
                defaultValue={values.linkedin}
                onChange={handleChange('linkedin')}
                />
                <br/>
                <br/>
                <TextField id="outlined-basic" 
                 label="Git hub link" 
                 variant="outlined" 
                 fullWidth='true'
                 placeholder="https://github.com/Batman"
                 style = {styles.button}
                 defaultValue={values.github}
                 onChange={handleChange('github')}
                 />

                <br/>
                <br/>
                
                <Button style={styles.button} variant="contained" color="primary" onClick={this.continue} >continue </Button>
                <Button style={styles.button} variant="contained" color="primary" onClick={this.previous} >previous </Button>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <DivComponent/>
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

export default Contact;