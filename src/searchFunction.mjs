import { cardComponent } from "./cardComponent.mjs";
let form = document.getElementById("form");
let searchBar = document.getElementById("search-bar");

export let submitForm = (input, fetchData, clear) => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let data = await fetchData(input());
    cardComponent(data);
    clear();
  });
};

export let inputField = () => searchBar.value;
export let clearForm = () => (searchBar.value = "");
