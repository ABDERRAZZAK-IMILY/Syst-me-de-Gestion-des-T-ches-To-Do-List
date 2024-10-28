var intas = document.getElementById('input-task');

function add(){
    for(let i=0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        alert(`${key}: ${localStorage.getItem(key)}`);
      }
   
      setItem(name, value)
}



document.getElementById("myBtn2").addEventListener("click", hiden);

function hiden() {
  document.getElementById("crud-modal").style.display = "hidden";
}