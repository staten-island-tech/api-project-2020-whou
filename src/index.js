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
        <a class= "breed-border" href="#${breeds.name}">${breeds.name}</a>
        `
      );
      DOMSelectors.dogInformation.insertAdjacentHTML(
        "beforeend",
        `

      `
      );
    });
  } catch (error) {
    console.log(error);
  }
};

init();
