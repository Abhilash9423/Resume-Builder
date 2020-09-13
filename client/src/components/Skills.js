import React, { Component } from 'react';
import { Button } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme'
import { AppBar } from '@material-ui/core';
import {TextField} from '@material-ui/core'
import {Container} from '@material-ui/core'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
class Skills extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep()
    }
    previous = e => {
        e.preventDefault();
        this.props.prevStep()
    }
    addArrayValue = (name) =>{
        this.props.addArrayValue(name)
    }
    handleArrayValue = (name,index,e) =>{
        this.props.handleArrayValue(name,index,e)
    }
    removeArrayvalue = (name,index) =>{
        this.props.removeArrayvalue(name,index)
    }
        render() {
            const {values} = this.props
            return (
                <ThemeProvider theme={theme}>
                    <>
                    <Container maxWidth="sm" color="secondary" style={styles.container}  >
                    <AppBar>
                        <h3 style={styles.button} >Skills </h3>
                    </AppBar>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h1><u>Personal SKills</u> </h1>
                <Fab color="primary" aria-label="add" onClick={()=>this.addArrayValue('PersonalSkill')}> 
                <AddIcon /> 
                </Fab> 
                <h6>Click on  the Icon to add New Skill</h6>
                {
                    values.PersonalSkill.map((experience,index)=>{

                        return( <div key={index} >
                         <TextField 
                         id="outlined-basic"
                         value={experience}
                         onChange={(e)=>this.handleArrayValue('PersonalSkill',index,e)}
                         label="Company name"
                         placeholder="Time Management"
                         style = {styles.button}
                         />
            
                         <DeleteIcon onClick={()=>this.removeArrayvalue('PersonalSkill',index)} style = {styles.button} />
                        </div>)
                    })
                }
                <br/>
                <br/>
                <hr />
                <h1><u>Technical SKills</u> </h1>
                <Fab color="primary" aria-label="add" onClick={()=>this.addArrayValue('Technical')}> 
                <AddIcon /> 
                </Fab> 
                <h6>Click on  the Icon to add New Skill</h6>
                {
                    values.Technical.map((experience,index)=>{

                        return( <div key={index} >
                         <TextField 
                         id="outlined-basic"
                         value={experience}
                         onChange={(e)=>this.handleArrayValue('Technical',index,e)}
                         label="Company name"
                         placeholder="Python"
                         style = {styles.button}
                         />
            
                         <DeleteIcon onClick={()=>this.removeArrayvalue('Technical',index)} style = {styles.button} />
                        </div>)
                    })
                }
                <br/>
                <br/>
                <hr />
                <h1><u>Languages</u> </h1>
                <Fab color="primary" aria-label="add" onClick={()=>this.addArrayValue('languages')}> 
                <AddIcon /> 
                </Fab> 
                <h6>Click on  the Icon to add New language</h6>
                {
                    values.languages.map((experience,index)=>{

                        return( <div key={index} >
                         <TextField 
                         id="outlined-basic"
                         value={experience}
                         onChange={(e)=>this.handleArrayValue('languages',index,e)}
                         label="Company name"
                         placeholder="Telugu"
                         style = {styles.button}
                         />
            
                         <DeleteIcon onClick={()=>this.removeArrayvalue('languages',index)} style = {styles.button} />
                        </div>)
                    })
                }
                <br/>
                <br/>
                <hr />
                <h1><u>Interests</u> </h1>
                <Fab color="primary" aria-label="add" onClick={()=>this.addArrayValue('interests')}> 
                <AddIcon /> 
                </Fab> 
                <h6>Click on  the Icon to add</h6>
                {
                    values.interests.map((experience,index)=>{

                        return( <div key={index} >
                         <TextField 
                         id="outlined-basic"
                         value={experience}
                         onChange={(e)=>this.handleArrayValue('interests',index,e)}
                         label="Company name"
                         placeholder="Music"
                         style = {styles.button}
                         />
            
                         <DeleteIcon onClick={()=>this.removeArrayvalue('interests',index)} style = {styles.button} />
                        </div>)
                    })
                }
                <br/>
                <br/>
                <hr />

                    
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

export default Skills;