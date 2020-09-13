module.exports = ({FirstName,LastName,profession,description,expr,expr2,experience,educational_qualification,college,school,school_plus_one,phone,email,linkedin,github,PersonalSkill,Technical,languages,interests}) => {
        

        var html1 = `<!DOCTYPE html>
        <html>
		<head>
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
		<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
		<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>`
        

        var html2 = `<style>
		 .head {
                     background-color:rgb(45, 106, 132);
                     border-style: solid;
                     border-color:black;
		 			border-width:thin;
                     color:white;
                     width:Full;
                     height:140px;
                     vertical-align:bottom;
                     text-align:left;
	     			padding: 50px 0;
                     vertical-align:middle;            
                 }
		 .descriptionbox {		    
		 			background-color:rgb(255, 255, 255)
                     border-style:bold;
		 			border-style: solid;
                     border-color:black;
		 			border-width:thin;
                     width:80%;
                     height:190px;
                     vertical-align:bottom;
                     text-align:left;
                     vertical-align:middle;	
		 			float:left;
		 }	   
		 .skillbox{
		 			background-color:rgb(231, 231, 231);
                    border-style:bold;
		 			border-style: solid;
                    border-color:black;
		 			border-width:thin;
                    width:20%;
                    height:1700px;
                    vertical-align:bottom;
                    text-align:left;
                    vertical-align:middle;	
		 			float:right;
		
		 }
		 .whitedivBotton{
		 			background-color:rgb(255, 255, 255)
		 			border-style:bold;
		 			border-style: none;
                    border-color:black;
		 			border-width:thin;
                    width:80%;
                    height:50px;
                    vertical-align:bottom;
                    text-align:left;
                    vertical-align:middle;	
		 			float:left;
		 }
		 .Datebox{
		 			background-color:rgb(255, 255, 255)
                     border-style:bold;
		 			border-style: none
                     border-color:black;
		 			border-width:thin;
                     width:20%;
                     height:550px;
                     vertical-align:bottom;
                     text-align:left;
                     vertical-align:middle;	
		 			float:left;
		
		 }
		 .experience{
		 			background-color:rgb(255, 255, 255)
		 			border-style: solid;
                    border-color:black;
					border-width:thin;
                    width:80%;	
		 			float:left;
		 }
         .italicstyle{
            font-style: italic;
        }
        .insideexperience{
            background-color:rgb(255, 255, 255)
            border-style: none
            border-style: solid;
            border-color:black;
            border-width:thin;
            width:80%;
            height:550px;
            vertical-align:bottom;
            text-align:left;
            vertical-align:middle;	
            float:left;
        }
        .educationalClass{
            border-style: solid;
            border-color:black;
            border-width:thin;
            width:80%;
            height:1700px;
            text-align:center; 
            clear:left;
        }		
        </style>
         </head>`


        var html3 = `<body>
                <div class="container" >
		 		<div class="head">
		 		<h1 >${FirstName}  ${LastName} </h1>
		 		<h6 > ${profession} </h6>
                 </div>`
        
        var html4 = `<div class="descriptionbox">
        <p>${description} 
        </div>`
    
        var personal_skills=""
        for (const type of PersonalSkill) {  
                    if(type.length>0){
                    personal_skills = personal_skills + `${type} <br/>`
                    }
                    else{
                        continue
                    }
        }
        var Technicaldetails = ""
        for (const type of Technical) {  
            if(type.length>0){
            Technicaldetails = Technicaldetails + `${type} <br/>`
            }
        else{
            continue
        }
        }

       var languagedetails = "" 
       for (const type of languages) {  
        if(type.length>0){
        languagedetails = languagedetails + `${type} <br/>`
        }
        else{
            continue
        }
    }

       var interestdetails = ""
       for (const type of interests) {  
        if(type.length>0){
        interestdetails = interestdetails + `${type} <br/>`
        }
    else{
        continue
    }
    }

       var html5 = `<div class="skillbox" >  <h2 style="word-wrap:normal" >Contact Details</h2> <br/> ${phone} <br/> ${email} <br/> ${linkedin} <br/> ${github} <br/><br/> <h2>Personal Skills </h2>` + personal_skills + `<br/><br/> <h2>Technical Skills </h2>` + Technicaldetails + `<br/><br/> <h2> Languages </h2>` + languagedetails +  `<br/><br/> <h2> interests </h2>` + interestdetails + `</div>`

        var html6 = `<div class="whitedivBotton" > Work History </div>`

        var experience_string = ""

        var complete_length = []

        for (const index in experience) {  
            var experience_length = experience.length-1
            if(index <= experience_length ){
            var len1 = experience[index].projectsandTasksOne.length
            var heightforexperience = (len1/3) + 50
            complete_length.push(heightforexperience)
            experience_string = experience_string  + `<div class="Datebox" style="height:${heightforexperience}px" >${experience[index].experience_date_one}</div> <div class="insideexperience" style="height:${heightforexperience}px" > <h1> ${experience[index].roleinOrginizationOne} </h1>
            <h6 class="italicstyle" > ${experience[index].nameOfOrginizationOne}, ${experience[index].locationOfOrginizationOne}</h6>        
            <p> ${experience[index].projectsandTasksOne} </p> </div>`
            }
        }        
        var sum = complete_length.reduce(function(a, b){
            return a + b;
        }, 0);

        sum = sum + 150

        var html7 = `<div class="experience style="height:${sum}px">` + experience_string + `</div>`

        var html8 = `<div class="whitedivBotton" > Educational Qualification </div>`
                
        // var html9 = `<div class="educationalClass">
        //                     <h4>${educational_qualification}</h4>
        //                     <h4> ${college} </h4>
        //                     <h4> ${school} </h4>
        //                     <h4> ${school_plus_one} </h4>
        //                      </div>` 

        var html10 = `</div> 
                    </body>
                    </html>`

        var html_final = html1 + html2 + html3 + html4 + html5 + html6 + html7 

        var html_final2 = html_final + html8 + html10
        

        return(
            html_final2    
        )
}
