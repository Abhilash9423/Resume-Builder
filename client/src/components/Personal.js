import React, { Component } from 'react';
import { Button } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme'
import { AppBar } from '@material-ui/core';
import {TextField} from '@material-ui/core'
import {Container} from '@material-ui/core'
import DivComponent from './DivComponent'
class Personal extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep()
    }

    render() {
        const {values,handleChange} = this.props
        return (
            <ThemeProvider theme={theme}>
                <>
                <Container maxWidth="sm" color="secondary" style={styles.container}  >
                <AppBar>
                    <h3 style={styles.button} >Personal Details </h3>
                </AppBar>
                <br/>
                <br/>
                <br/>
                <br/>
                <TextField 
                id="outlined-basic" 
                label="FirstName" 
                variant="outlined" 
                placeholder="Enter First Name"
                style = {styles.button}
                required = 'true'
                onChange={handleChange('FirstName')}
                defaultValue={values.FirstName}
                />
                <TextField 
                id="outlined-basic" 
                label="LastName" 
                variant="outlined" 
                placeholder="Enter Last Name"
                style = {styles.button}
                onChange={handleChange('LastName')}
                defaultValue={values.LastName}
                />
                <TextField id="outlined-basic" 
                 label="Profession" 
                 variant="outlined" 
                 placeholder="Enter your Profession"
                 style = {styles.button}
                 onChange={handleChange('profession')}
                 defaultValue={values.profession}
                 />

                <br/>
                <TextField 
                id="outlined-basic" 
                label="Description" 
                variant="outlined"
                multiline
                rowsMax={10}
                placeholder=" Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                style={styles.description }
                onChange={handleChange('description')}
                 defaultValue={values.description}
                />
                <br/>
                
                <Button style={styles.button} variant="contained" color="primary" onClick={this.continue} > continue </Button>

                <DivComponent/>                
 
                <br/> 


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

export default Personal;