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





submit.onclick = function() {


  let input = {
    property, category, dueDate,
    description
  
  }



}

submit.addEventListener("click", () => {
  const userName = document.querySelector("name").value
  userNameText.textContent = userName
  localStorage.setItem("name", userName)
})


function displayUserName () {
  const nameFromLocalStorage = localStorage.getItem("name")

  if (nameFromLocalStorage) {
    userNameText.textContent = nameFromLocalStorage
  } else {
    userNameText.textContent = "No name data in local storage"
  }
}

displayUserName()


/************************************************** */

