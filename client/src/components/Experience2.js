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

class Experience2 extends Component {

    continue = e =>{
        e.preventDefault();
        this.props.nextStep()
    }
    previous = e => {
        e.preventDefault();
        this.props.prevStep()
    }
    addexpr = (name) =>{
        this.props.addexperience(name)
    }
    handleExpr = (name,index,e) =>{
        // console.log(name,index,e.target.value)
        this.props.handleExperience(name,index,e)
    }
    handleRem = (name,index) =>{
        this.props.handleRemove(name,index)
    }


    render() {
        const {values} = this.props
        
        return (
            <ThemeProvider theme={theme}>
                <>
                <Container maxWidth="sm" color="secondary" style={styles.container}  >
                <AppBar>
                    <h3 style={styles.button} >Experience 1 </h3>
                </AppBar>
                <br/>
                <br/>
                <br/>
                <br/>
                <h1>add name </h1>
                <Fab color="primary" aria-label="add" onClick={()=>this.addexpr('expr')}> 
                <AddIcon /> 
                </Fab> 
                {
                    values.expr.map((experience,index)=>{

                        return( <div key={index} >
                         <TextField 
                         id="outlined-basic"
                         value={experience}
                         onChange={(e)=>this.handleExpr('expr',index,e)}
                         label="Company name"
                         placeholder="Amazon"
                         style = {styles.button}
                         />
            
                         <DeleteIcon onClick={()=>this.handleRem('expr',index)} style = {styles.button} />
                        </div>)
                    })
                }
                <br/>
                <br/>
                <Fab color="primary" aria-label="add" onClick={()=>this.addexpr('expr2')}> 
                <AddIcon /> 
                </Fab> 
                {
                    values.expr2.map((experience,index)=>{

                        return( <div key={index} >
                         <TextField 
                         id="outlined-basic"
                         value={experience}
                         onChange={(e)=>this.handleExpr('expr2',index,e)}
                         label="Company name"
                         placeholder="Amazon"
                         style = {styles.button}
                         />
            
                         <DeleteIcon onClick={()=>this.handleRem('expr2',index)} style = {styles.button} />
                        </div>)
                    })
                }
       
                <br/>
                <br/>
                <br/>
                <br/>

                <TextField 
                id="outlined-basic" 
                label="LastName" 
                variant="outlined" 
                placeholder="pillarisetty"
                style = {styles.button}
                />
                <TextField id="outlined-basic" 
                 label="Profession" 
                 variant="outlined" 
                 placeholder="IT Engineer"
                 style = {styles.button}
                 />

                <br/>
                <TextField 
                id="outlined-basic" 
                label="Description" 
                variant="outlined"
                multiline
                rowsMax={10}
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                style={styles.description }
                />
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

export default Experience2;