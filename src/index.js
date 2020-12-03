import { DOMSelectors } from "./DOM";

let regeneratorRuntime = require("regenerator-runtime");

const key = `8e70c3ac-4bf9-4f4c-91b1-da53ffd062eb`;
const query = `https://api.TheDogAPI.com/v1/breeds?api_key=${key}`;

const init = async function () {
  try {
    const response = await fetch(query);
    const data = await response.json();
    console.log(data);
    let breed_num = 0;
    data.forEach((breeds) => {
      console.log(breeds.name);
      DOMSelectors.breedName.insertAdjacentHTML(
        "beforeend",
        `   
        <a class= "myBtn" href=#${breeds.name}>${breeds.name}</a>
        <div class="modalbtn" id="modal" >
        <div class="modal-content">
          <p class="close">&times;
          <div class= "info-box">
          <h1 class="info-text" >${breeds.name}</h1>
          <h1 class="info-text" class="breed-group">Breed Group: ${breeds.breed_group}</h1>
          <h1 class="info-text" class="life-span">Life span: ${breeds.life_span}</h1>
          <h1 class="info-text" class="weight">Weight: ${breeds.weight.imperial} pounds</h1>
          <h1 class="info-text" class="height">Height: ${breeds.height.imperial} inches</h1>
          <h1 class="info-text" class="temperament">Temperament: ${breeds.temperament}</h1>              
          </div>
        </div>
        </div>

        `
      );

      var modal = document.getElementsByClassName("modalbtn")[breed_num];
      var btn = document.getElementsByClassName("myBtn")[breed_num];
      console.log(btn);
      var span = document.getElementsByClassName("close")[breed_num];

      modal.style.display = "none";

      btn.onclick = function () {
        modal.style.display = "block";
        console.log("clicked");
      };
      span.onclick = function () {
        modal.style.display = "none";
      };

      breed_num++;
      console.log(breed_num);
    });
  } catch (error) {
    console.log(error);
  }
  DOMSelectors.btn.addEventListener("click", () => {
    document.getElementById("myDropdown").classList.toggle("show");
  });

  DOMSelectors.input.addEventListener("keyup", () => {
    const filter = DOMSelectors.input.value.toUpperCase();
    const div = document.getElementById("myDropdown");
    const a = div.getElementsByTagName("a");
    for (let i = 0; i < a.length; i++) {
      const txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  });
};

init();
