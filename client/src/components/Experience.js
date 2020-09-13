import React, { Component } from 'react';
import { Button } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme'
import { AppBar } from '@material-ui/core';
import {TextField} from '@material-ui/core'
import {Container} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';


class Experience extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep()
    }
    previous = e => {
        e.preventDefault();
        this.props.prevStep()
    }

    handleAddClick = () => {
        console.log("clicked")
        this.props.handleAddClick()
    }
    handleInputChange = (e,index) => {
        // console.log(e.target.name, e.target.value,index + "in experience ")
        this.props.handleInputChange(e,index)
     }
     handleRemove = (index) => {
         this.props.handleRemove(index)
     }
    render() {
        const {values} = this.props
        return (
            <ThemeProvider theme={theme}>
                <>
                <Container maxWidth="sm" color="secondary" style={styles.container}  >
                <AppBar>
                    <h3 style={styles.button} >Experience Details </h3>
                </AppBar>
              
                <br/>
                <br/>
                <br/>
                <br/>
                <Button color="primary" variant="contained" onClick={this.handleAddClick} > Add new experience </Button> 
                {
                    values.experience.map((expdetails,index)=>{

                        return( <div key={index } >
                         <h1> {index+1}st Experience  </h1>   
                         <TextField 
                         id="outlined-basic"
                         variant="outlined"
                         value={expdetails.experience_date_one} 
                         label="Date"
                         placeholder="23-04-2000-23-05-2001"
                         style = {styles.button}
                         onChange={(e)=>this.handleInputChange(e,index)}
                         defaultValue="blabla"
                         name="experience_date_one"
                         />
                         <TextField 
                         id="outlined-basic"
                         value={expdetails.nameOfOrginizationOne} 
                         variant="outlined"
                         label="name"
                         placeholder="23-04-2000-23-05-2001"
                         onChange={(e)=>this.handleInputChange(e,index)}
                         style = {styles.button}
                         name="nameOfOrginizationOne"
                         />
                         <TextField 
                         id="outlined-basic"
                         variant="outlined"
                         value={expdetails.locationOfOrginizationOne} 
                         onChange={(e)=>this.handleInputChange(e,index)}
                         label="location"
                         placeholder="23-04-2000-23-05-2001"
                         style = {styles.button}
                         name="locationOfOrginizationOne"
                         />
                         <TextField 
                         id="outlined-basic"
                         variant="outlined"
                         value={expdetails.roleinOrginizationOne} 
                         onChange={(e)=>this.handleInputChange(e,index)}
                         label="role"
                         placeholder=""
                         style = {styles.button}
                         name="roleinOrginizationOne"
                         />
                        <TextField 
                         id="outlined-basic"
                         variant="outlined" 
                         value={expdetails.projectsandTasksOne} 
                         label="projects"
                         onChange={(e)=>this.handleInputChange(e,index)}
                         multiline
                         rowsMax={30}
                         placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                         style = {styles.description}
                         name="projectsandTasksOne"
                         />
                         <br/>
                        { 
                         <Button style={styles.button} color="primary" variant="contained" startIcon={<DeleteIcon />} onClick={()=>this.handleRemove(index)}>
                        Clear Experience
                        </Button> 
                        }
                     </div>)
                    })
                }
                <br/>
                
                <br/>
                <br/>
                <Button style={styles.button} variant="contained" color="primary" onClick={this.continue} >continue </Button>
                <Button style={styles.button} variant="contained" color="primary" onClick={this.previous} >previous </Button>
                <br/>
                <br/>
                <br/>
                <br/>
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

export default Experience;