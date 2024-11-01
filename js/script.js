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


const dueDate = document.getElementById('dueDate');
const newdate = dueDate.value;
console.log(newdate);

function maxdate() {
    const today = new Date().toISOString().split('T')[0];
    dueDate.setAttribute('max', today);
}

maxdate();

/********************************************************************************* */


const submit = document.getElementById("submit");
const property = document.getElementById('property');
const category = document.getElementById('category');
const duedate = document.getElementById('dueDate');
const description = document.getElementById('description');
const nome = document.getElementById('name');

let arrystorage = JSON.parse(window.localStorage.getItem("input")) || [];

submit.addEventListener("click", function() {
    const input = {
        property: property.value,
        category: category.value,
        duedate: dueDate.value,
        description: description.value,
        name: nome.value,
    };

    arrystorage.push(input);

    window.localStorage.setItem("input", JSON.stringify(arrystorage));

    showData();

});

/*window.localStorage.clear(); */

function showdata() {
  let arrystorage = JSON.parse(window.localStorage.getItem("input")) || [];
  const display = document.getElementById("display");
  display.innerHTML = '';
    arrystorage.forEach(item => {
      let borderColor;
      switch (item.property) {
          case "P1":
              borderColor = "border-red-600";
              break;
          case "P2":
              borderColor = "border-orange-600";
              break;
          case "P3":
              borderColor = "border-green-600";
              break;
          default:
              borderColor = "border-gray-600"; 
      }
        const itemDiv = document.createElement("div");
      itemDiv.innerHTML = `
          <div class="bg-white shadow-md rounded p-4 mb-4 border-4 ${borderColor}">
              <h3 class="font-bold">${item.name}</h3>
              <p>Property: ${item.property}</p>
              <p>Category: ${item.category}</p>
              <p>Due Date: ${item.dueDate}</p>
              <p>Description: ${item.description}</p>
              <div class="flex justify-between mt-2">
                  <button class="bg-blue-500 text-white py-1 px-3 rounded" id = "edit" >Edit</button>
                  <button class="bg-red-500 text-white py-1 px-3 rounded" id = "delete" >Delete</button>
              </div>
          </div>
      `;
      display.appendChild(itemDiv);
  });
}

showdata();
/*******************************************************************/

