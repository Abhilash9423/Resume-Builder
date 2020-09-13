
// PersonalSkill=["eat","sleep","rave","repeat"]


// var new_part=""
// for (const type of PersonalSkill) {  

//             new_part = new_part + `${type} <br/>`
// }

// console.log(new_part)



// var html_head1 = `<!DOCTYPE html> <html lang="en" dir="ltr"> <head> <meta charset="utf-8"> <title></title> </head> <body> <h1 >` 
// var html_head2 = `${FirstName}  ${LastName}<h1>` 
// var html_head3 = new_part
// var html_head4 = `</body> </html>` 

// var str = "• Developed presentations and reports for senior management by\ncollecting and arranging information from database system\n• Developed and maintained positive stakeholder relations and\ncoordinated with team members to ensure requests and questions\nwere handled appropriately\n• Evaluated performance and quality checks of tasks completed by\nassociates, reported quality metrics and provide timely feedback,\nwhich improved the quality scores\n• Developed a python script to extract the productivity metric...";
// var res = str.split("\n");
// console.log(res)

// const names = [ 'Marcus', 'Norman', 'Christian' ]
// var len= []
// for (const index in names) {  
//     len1 = names[index].length
//     len.push(len1)
//   }
// console.log(len)  

// str = `Experienced Business Operations Specialist with a demonstrated history of working in the
// internet industry. Adept at analyzing, articulating and solving various problems. Analytical and
// organized with the ability to multitask, work independently or as a part of a team in fastpaced, high volume environments. 
// Skillful at developing realistic solutions to assure
// satisfactory Consumer and Customer experiences. Committed to resolving problems in an
// effective and efficient manner and maintaining accurate metrics and reports.
// Strong operations professional with a Bachelor of Engineering focused in Information
// Technology.
// Aim to work in challenging technical projects to support wide range of automation, coding
// and innovation that can help in the development of organization and aid my professional
// growth as well`



// str = `organized with the ability to multitask, work independently or as a part of a team in fastpaced, high volume environments. 
// Skillful at developing realistic solutions to assure


var a = [25,35]
console.log(a.length)

a.push(25)

console.log(a)
var sum = a.reduce(function(a, b){
  return a + b;
}, 0);

console.log(sum)