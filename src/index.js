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
          <h1 class="info-text" class="origin">Origin: ${breeds.origin}</h1>
          <h1 class="info-text" class="breed-group">Breed Group: ${breeds.breed_group}</h1>
          <h1 class="info-text" class="life-span">Life span: ${breeds.life_span}</h1>
          <h1 class="info-text" class="weight">Weight: ${breeds.weight.imperial} pounds</h1>
          <h1 class="info-text" class="height">Height: ${breeds.height.imperical} inches</h1>
          <h1 class="info-text" class="temperament">Temperament: ${breeds.temperament}</h1>              
          </p>
        </div>
        </div>

        `
      );
      // var modal = document.getElementById(`"${breeds.id}"`);

      var modal = document.getElementsByClassName("modalbtn")[breed_num];
      var btn = document.getElementsByClassName("myBtn")[breed_num];
      console.log(btn);
      var span = document.getElementsByClassName("close")[breed_num];

      btn.onclick = function () {
        modal.style.display = "block";
        console.log("clicked");
      };
      span.onclick = function () {
        modal.style.display = "none";
      };
      // window.onclick = function (event) {
      //   if (event.target == modal) {
      //     modal.style.display = "none";
      //   }
      // };
      breed_num++;
      console.log(breed_num);
    });
  } catch (error) {
    console.log(error);
  }
};

init();
