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
        function mindate() {
          const today = new Date().toISOString().split('T')[0];
          dueDate.setAttribute('min', today);
      }

      mindate();

const submit = document.getElementById("submit");
const property = document.getElementById('property');
const category = document.getElementById('category');
const duedate = document.getElementById('dueDate');
const description = document.getElementById('description');
const nome = document.getElementById('name');

let arrystorage = JSON.parse(window.localStorage.getItem("input")) || [];

submit.addEventListener("click", function(event) {
    event.preventDefault(); 
    if (property.value !== "" && category.value !== "" && duedate.value !== "" && description.value !== "" && nome.value !== "") {
        const input = {
            property: property.value,
            category: category.value,
            duedate: duedate.value,
            description: description.value,
            name: nome.value,
        };

        arrystorage.push(input);
        window.localStorage.setItem("input", JSON.stringify(arrystorage));
        showData();
        section.classList.add("hidden");
    } else {
        alert("Tous les champs doivent être remplis");
    }
});
// Fonction pour afficher les données
function showData() {
    arrystorage = JSON.parse(window.localStorage.getItem("input")) || [];
    
    const displayTodo = document.getElementById("display-todo");
    const displayDoing = document.getElementById("display-doing");
    const displayDone = document.getElementById("display-done");

   
    displayTodo.innerHTML = '';
    displayDoing.innerHTML = '';
    displayDone.innerHTML = '';

    let todocount = 0;
    let doingcount = 0;
    let donecount = 0;

    arrystorage.forEach((item, index) => {
        const itemDiv = document.createElement("div");
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

        itemDiv.innerHTML = `
            <div class="bg-white shadow-md rounded p-4 mb-4 border-4 ${borderColor}">
                <h3 class="font-bold">${item.name}</h3>
                <p>Property: ${item.property}</p>
                <p>Category: ${item.category}</p>
                <p>Due Date: ${item.duedate}</p>
                <p>Description: ${item.description}</p>
                <div class="flex justify-between mt-2">
                    <button class="bg-blue-500 text-white py-1 px-3 rounded" id="edit">Edit</button>
                    <button class="bg-red-500 text-white py-1 px-3 rounded" id= " deletet" >Delete</button>
                </ div>
            </div>
        `;

        if (item.category === "TO DO") {
            displayTodo.appendChild(itemDiv);
            todocount++;
        } else if (item.category === "DOING") {
            displayDoing.appendChild(itemDiv);
            doingcount++;
        } else if (item.category === "DONE") {
            displayDone.appendChild(itemDiv);
            donecount++;
        }
    });

    document.getElementById("todo-count").textContent = `TO DO: ${todocount}`;
    document.getElementById("doing-count").textContent = `DOING: ${doingcount}`;
    document.getElementById("done-count").textContent = `DONE: ${donecount}`;
}

showData();