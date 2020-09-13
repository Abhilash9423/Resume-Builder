import React, { Component } from 'react';
import Personal from './Personal'
import Education from './Education'
import Experience from './Experience'
import Experience2 from './Experience2'
import Contact from './Contact'
import Skills from './Skills'
import Confirm from './Confirm'
import Success from './Success'
class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state= {
          step:0,
          FirstName : "Abhilash",
          LastName : "Venkat",
          profession:"IT Engineer",
          description:"",
          experience:[{experience_date_one:"23-04-1919 23-14-2020", nameOfOrginizationOne:"Amazon",locationOfOrginizationOne:"Telangana Hyderabad",roleinOrginizationOne:"Business Ops",projectsandTasksOne:" Developed presentations and reports for senior management by collecting and arranging information from database system"}],  
          expr:[],
          expr2:[],

          educational_qualification:"",
          college:"",
          school:"",
          school_plus_one:"",
          
          
          phone:0,
          email:"",
          linkedin:'',
          github:'',


          PersonalSkill:["eat","sleep","guitar","repeat"],
          Technical:[],
          languages:[],
          interests:[]
        }
        // this.handleExperience = this.handleExperience.bind(this)
        // this.handleRemove = this.handleRemove.bind(this)
      }
    
      nextStep(){
        this.setState({
          step:this.state.step + 1
      } )
    }
    
      prevStep(){
        this.setState({
          step:this.state.step-1
        })
      }
      handleChange = name => e => {
        var change ={};
        change[name] = e.target.value
        this.setState(change)
        // this.setState({[name] : e.target.value})
      } 
      handleAddClick = () => {
        this.setState({experience:[...this.state.experience, {experience_date_one:"", nameOfOrginizationOne:"",locationOfOrginizationOne:"",roleinOrginizationOne:"",projectsandTasksOne:""}]});
        
      };

      // addExperience(){
      //   this.setState({experience:[...this.state.experience," "]})
      // }
      // handleRemove(index){
      //   let infolist = this.state.experience
      //   infolist.splice(index,1)
      //   this.setState({experience:infolist})
      // }
      // handleExperience(e,index){
      //   const list = [...this.state.experience]
      //   list[index] = e.target.value
      //   console.log()
      //   this.setState({experience:list})
      // }
      
      removeArrayvalue = (name,index) => {
        let infolist = this.state[name]
        infolist.splice(index,1)
        this.setState({[name]:infolist})
      }

      addArrayValue = name => {
        this.setState({[name]:[...this.state[name],'']})
      }

      handleArrayValue = (name,index,e) =>{
        const list = [...this.state[name]]
        list[index] = e.target.value
        this.setState({[name]:list})
      } 
      handleInputChange = (e, index) => {
        const { name } = e.target;
        const list = [...this.state.experience];
        list[index][name] = e.target.value;
        this.setState({experience:list})
      };
      handleRemove = index =>{
          const list = [...this.state.experience]
          list.splice(index,1)
          this.setState({experience:list})
      }

    render(){
      const { FirstName,LastName,profession,description,expr,expr2,experience,educational_qualification,college,school,school_plus_one,phone,email,linkedin,github,PersonalSkill,Technical,languages,interests} = this.state
      const values =  { FirstName,LastName,profession,description,expr,expr2,experience,educational_qualification,college,school,school_plus_one,phone,email,linkedin,github,PersonalSkill,Technical,languages,interests}
      switch(this.state.step){
        case 0:
          return (
          <Personal 
          nextStep={() => this.nextStep()} 
          values={values}  
          handleChange={this.handleChange}
          />
          )
        case 1:
          return (
            <Experience 
            nextStep={() => this.nextStep()} 
            prevStep={() => this.prevStep()} 
            values={values}
            handleAddClick = {this.handleAddClick}
            handleInputChange={this.handleInputChange}
            handleRemove = {this.handleRemove}
            />
          )  
        case 2:
          return (
            <Experience2 
              nextStep={() => this.nextStep()} 
              prevStep={() => this.prevStep()} 
              values={values}
              addexperience={this.addexperience2}
              handleExperience={this.handleExperience2}
              handleRemove={this.handleRemove2}
              />
            )  
  
        case 3:
            return (
                <Education  
                nextStep={() => this.nextStep()} 
                prevStep={() => this.prevStep()}
                values={values}
                handleChange={this.handleChange}
                />
            )
        case 4:
            return (
            <Contact  
            nextStep={() => this.nextStep()} 
            prevStep={() => this.prevStep()}
            values={values}
            handleChange={this.handleChange}
            />
            )
        case 5:
            return (
                <Skills  
                nextStep={() => this.nextStep()} 
                prevStep={() => this.prevStep()}
                values={values}
                addArrayValue={this.addArrayValue}
                handleArrayValue={this.handleArrayValue}
                removeArrayvalue={this.removeArrayvalue}  
                
                />
            )
        case 6:
            return (
                <Confirm  
                nextStep={() => this.nextStep()} 
                prevStep={() => this.prevStep()}
                values={values}
                />
            )
        case 7:
            return (
                <Success 
                prevStep={() => this.prevStep()}                
                />
            )
        default:
          return
      }
    }
}
export default UserForm;