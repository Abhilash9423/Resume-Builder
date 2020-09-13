import React, { Component } from 'react';
import theme from '../theme'
import AppBar from '@material-ui/core/AppBar';
import DivComponent from './DivComponent';
import {Nav} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Container} from '@material-ui/core'
import axios from 'axios';
import {saveAs} from 'file-saver';

class confirm extends Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }
    
    
    continue = e => {
        e.preventDefault();
        this.props.nextStep()
        console.log(this.props.values)
        const data = this.props.values;
        console.log(data)

        axios.post('http://localhost:5000/create-pdf', {...data})

            .then(() => axios.get('http://localhost:5000/fetch-pdf', { responseType: 'blob' }))
            .then((res) => {
                const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
                saveAs(pdfBlob, 'Resume.pdf');
            });
    
    }


    
    previous = e => {
        e.preventDefault();
        this.props.prevStep()
    }



        render() {
          const {values} = this.props

            return (
                <>
                    <h6> {values.FirstName}  </h6>
                    <h1>still working on this page </h1>
                    <DivComponent/>
                    <button style={styles.button} variant="contained" color="primary" onClick={this.continue} >continue </button>
                    <button style={styles.button} variant="contained" color="primary" onClick={this.previous} >previous </button>
                   
                   
               </>
            );
        
            }
          }
    
    const styles = {
        button:{
            margin:15
        },
        container:{
            backgroundColor:'#e0e0e0'
          
        }
    }

export default confirm;