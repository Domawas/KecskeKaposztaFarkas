let kepElem = document.getElementById("kep");
kepElem.innerHTML = `<img src="kepek/kecske2.png" alt="kecske">
                 <img src="kepek/kaposzta.png" alt="kaposzta">
                  <img src="kepek/farkas.png" alt="farkas">`;

let kecskeElem = document.getElementById("kecske");
let kaposztaElem = document.getElementById("kaposzta");
let farkasElem = document.getElementById("farkas");



let pElem = document.querySelector("#kep ");
let jobbElem = document.querySelector("#csonak");


pElem.addEventListener("mouseover", feltesz);
pElem.addEventListener("click", athelyez);


function athelyez(event) {
  
  jobbElem.appendChild(event.target);
}

function feltesz() {
  pElem.classList.add("szegely");
}