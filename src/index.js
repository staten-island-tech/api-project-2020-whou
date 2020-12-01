import { DOMSelectors } from "./DOM";

let regeneratorRuntime = require("regenerator-runtime");

const key = `8e70c3ac-4bf9-4f4c-91b1-da53ffd062eb`;
const query = `https://api.TheDogAPI.com/v1/breeds?api_key=${key}`;

const init = async function () {
  try {
    const response = await fetch(query);
    const data = await response.json();
    console.log(data);
    data.forEach((breeds) => {
      DOMSelectors.breedName.insertAdjacentHTML(
        "beforeend",
        `   
        <a id= "myBtn" href=#${breeds.name}>${breeds.name}</a>
        <div id="${breeds.id}" class="modal">
        <div class="modal-content">
          <span class="close">&times;</span>
          <p>  
          <h1 class="info-text" class="origin">Origin: ${breeds.origin}</h1>
          <h1 class="info-text" class="breed-group">Breed Group: ${breeds.breed_group}</h1>
          <h1 class="info-text" class="life-span">Life span: ${breeds.life_span}</h1>
          <h1 class="info-text" class="weight">Weight: ${breeds.weight.imperial} pounds</h1>
          <h1 class="info-text" class="height">Height: ${breeds.height.imperical} inches</h1>
          <h1 class="info-text" class="temperament">Temperament: ${breeds.temperament}</h1>              
          </p>

        `
      );
      var modal = document.getElementById(`"${breeds.id}"`);
      var btn = document.getElementById("myBtn");
      var span = document.getElementsByClassName("close")[0];

      btn.onclick = function () {
        modal.style.display = "block";
      };
      span.onclick = function () {
        modal.style.display = "none";
      };
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    });
  } catch (error) {
    console.log(error);
  }
};

init();
