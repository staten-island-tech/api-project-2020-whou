import { DOMSelectors } from "./DOM";

let regeneratorRuntime = require("regenerator-runtime");
regeneratorRuntime;

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
        <a id= "selected-breed" class= "breed-box" href="#${breeds.name}">${breeds.name}</a>
        `
      );
    });
    data((breeds) => {
      DOMSelectors.name.insertAdjacentHTML(
        "beforeend",
        `<h1>${breeds.name}</h1>
   `
      );
      DOMSelectors.breedGroup.insertAdjacentHTML(
        "beforeend",
        `<h1>${breeds.origin}</h1>
   `
      );
      DOMSelectors.lifeSpan.insertAdjacentHTML(
        "beforeend",
        `<h1>${breeds.life_span}</h1>
   `
      );
      DOMSelectors.weight.insertAdjacentHTML(
        "beforeend",
        `<h1>${breeds.weight}</h1>
   `
      );
      DOMSelectors.height.insertAdjacentHTML(
        "beforeend",
        `<h1>${breeds.height}</h1>
   `
      );
      DOMSelectors.temperament.insertAdjacentHTML(
        "beforeend",
        `<h1>${breeds.temperament}</h1>
   `
      );
    });
    // add event listener to whichever the breed name you click and have it equal to something
    // below have what ever it equals to only to display that data for the things below
  } catch (error) {
    console.log(error);
  }
};


init();
