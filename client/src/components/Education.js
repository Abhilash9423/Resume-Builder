import React, { Component } from 'react';
import { Button } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme'
import { AppBar } from '@material-ui/core';
import {TextField} from '@material-ui/core'
import {Container} from '@material-ui/core'
import DivComponent from './DivComponent'
class Education extends Component {
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
                    <h3 style={styles.button} >Education Details </h3>
                </AppBar>
                <br/>
                <br/>
                <br/>
                <br/>
                <TextField 
                id="outlined-basic" 
                label="educational qualification" 
                variant="outlined" 
                placeholder="Information Technology"
                style = {styles.button}
                fullWidth='true'
                defaultValue={values.educational_qualification}
                onChange={handleChange('educational_qualification')}
                />
                 <br/>
                 <br/>
                <TextField 
                id="outlined-basic" 
                label="College or  University Name" 
                variant="outlined" 
                placeholder="Muffakham Jah College"
                fullWidth='true'
                style = {styles.button}
                defaultValue={values.college}
                onChange={handleChange('college')}
                />
                 <br/>
                <br/>
                <TextField 
                id="outlined-basic" 
                label="school" 
                variant="outlined" 
                fullWidth='true'
                placeholder="public school"
                style = {styles.button}
                defaultValue={values.school}
                onChange={handleChange('school')}
                />
                <br/>
                <br/>
                <TextField id="outlined-basic" 
                 label="Juinor Collage or School name" 
                 variant="outlined" 
                 fullWidth='true'
                 placeholder="Inermediate"
                 style = {styles.button}
                 defaultValue={values.school_plus_one}
                 onChange={handleChange('school_plus_one')}
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

export default Education;