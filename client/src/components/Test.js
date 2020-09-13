import React, { Component } from 'react';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state={
          countries:[]
        }
      }
      
      addCounteries(){
        this.setState({countries:[...this.state.countries," "]})
    
      }
      handleChange(e,index){
        const list = [...this.state.countries]
        list[index]= e.target.value
        this.setState({countries:list})
      }
      removeField(index){
        let infoList = this.state.countries
        infoList.splice(index,1)
        this.setState({countries:infoList})
    
      }
      render(){
        return(
          <div>
            <button onClick={()=>this.addCounteries()} >add button</button>
            <button>submit</button>
          
            {
              this.state.countries.map((countries,index)=>{
               return( 
               <div key={index}>
                  <input value={countries} onChange={(e)=>this.handleChange(e,index)} />
                  <button onClick={()=>this.removeField(index)} >remove</button>
                </div> 
               )
               })
            }
          </div>
        )
      }
    }

export default Test;