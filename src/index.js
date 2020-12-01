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
        <a href=#${breeds.name}>${breeds.name}</a>
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


