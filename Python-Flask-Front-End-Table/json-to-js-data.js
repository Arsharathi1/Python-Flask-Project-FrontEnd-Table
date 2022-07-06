let text='{ "employees":['+
        '{"firstName":"John","lastName":"Doe"},' +
        '{"firstName":"Anna","lastName":"Smith"},'+
        '{"firstName":"Peter","lastName":"Jones"}]}';
const obj=JSON.parse(text);// for converting json data into js object
//const obj=JSON.stringify(text); // for converting json object into string
console.log(obj)
// let txt = "";
// for (let x in employees) {
// txt += obj.employees[x] + " ";
// };
var output= document.getElementById("output");
output.innerHTML=obj.employees[1].lastName;
 for (const [key, value] of obj.empliyess(employees.firstname)){
//     console.log(`${key}: ${value}`);
//   }
