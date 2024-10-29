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

