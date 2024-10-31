const section = document.getElementById('crud-modal');
const but1 = document.getElementById('myBtn');
const but2 = document.getElementById('myBtn2');

function func() {
    section.classList.remove("hidden");
}
function func2(){
    section.classList.add("hidden");
}
but1.addEventListener("click", func);
but2.addEventListener("click", func2);

/*************************************************** */



/*console.log(document.getElementById('dueDate'));
const pop = new Date().toDateString().split('T');
const jour = pop.split('T')[0];
function podate(){
  dueDate.max = pop;
}
podate();
console.log(pop);
*/

const dueDate = document.getElementById('dueDate');
const newdate = dueDate.value;
console.log(newdate);

function maxdate() {
    const today = new Date().toISOString().split('T')[0];
    dueDate.setAttribute('max', today);
}

maxdate();

/*const today = new Date().toISOString().split('T');
 console.log(today);
 var day=today[0];
 var jour=day.split('-');
 console.log(jour);
var x = parseInt(jour[2])+1;
console.log(x);
day[2]+=parseInt(jour[2])+1;
 function todate(){
    dueDate.max = x;
}
todate();

/********************************************************************************* */

let arrystorage = [];

const submit = document.getElementById("submit");
const property = document.getElementById('property');
const category = document.getElementById('category');
const dueDatel = document.getElementById('dueDate');
const description = document.getElementById('description');
const name = document.getElementById('name');



submit.addEventListener("click", function() {
  let input = {
    property: property.value, 
    category: category.value, 
    dueDate: dueDate.value,   
    description: description.value,
    name : name.value,
  }

  console.log(arrystorage);  
  /*localStorage.setItem("name", name.value);
  localStorage.setItem("property",property.value); 
  localStorage.setItem(" category",  category.value); 
  localStorage.setItem("dueDate", dueDate.value); 
  localStorage.setItem("description", description.value); 
*/

arrystorage.push(input);
window.localStorage.setItem("input", JSON.stringify(arrystorage));
}




);









/************************************************************************************/

const display = document.getElementById("display");
const itemDiv = document.createElement("div");
      itemDiv.innerHTML = `
        <div class="bg-white shadow-md rounded p-4 mb-4">
            <h3 class="font-bold">${item.name}</h3>
            <p>Property: ${item.property}</p>
            <p>Category: ${item.category}</p>
            <p>Due Date: ${item.dueDate}</p>
            <p>Description: ${item.description}</p>
            <div class="flex justify-between mt-2">
                <button class="bg-blue-500 text-white py-1 px-3 rounded">Edit</button>
                <button class="bg-red-500 text-white py-1 px-3 rounded">Delete</button>
            </div>
        </div>
      `;
      display.appendChild(itemDiv);


     
/*window.localStorage.clear();*/
/************************************************** */