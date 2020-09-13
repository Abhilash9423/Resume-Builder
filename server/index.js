const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf')
const cors = require('cors');

const pdfTemplate = require('./documents');


const app = express();

const port = process.env.PORT || 5000;

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }));
  app.use(bodyParser.urlencoded({extended:true}))
  app.use(bodyParser.json())

  app.post('/create-pdf',(req,res)=>{
    const newfield ={
        FirstName:req.body.FirstName
        ,LastName:req.body.LastName
        ,profession:req.body.profession
        ,description:req.body.description
        ,expr:req.body.expr
        ,expr2:req.body.expr2
        ,experience:req.body.experience
        ,educational_qualification:req.body.educational_qualification
        ,college:req.body.college
        ,school:req.body.school
        ,school_plus_one:req.body.school_plus_one
        ,phone:req.body.phone
        ,email:req.body.email
        ,linkedin:req.body.email
        ,github:req.body.github
        ,PersonalSkill:req.body.PersonalSkill
        ,Technical:req.body.Technical
        ,languages:req.body.languages
        ,interests:req.body.interests
    }
    pdf.create(pdfTemplate(newfield) ,{}).toFile('result.pdf',(err) => {
        if(err) {
            res.send(Promise.reject());
        }
        res.send(Promise.resolve());
    })
})



//Get - send the generated PDF to the client
app.get('/fetch-pdf',(req,res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})    


  app.listen(port,()=> console.log(`Listening on port ${port}`));