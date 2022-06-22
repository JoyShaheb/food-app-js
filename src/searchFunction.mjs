import { loaderFunction, errorLoaderFunction } from "./loaderFunction.mjs";
let form = document.getElementById("form");
let searchBar = document.getElementById("search-bar");

export let submitForm = (input, fetchData, clear) => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let x = await fetchData(input());
    console.log(x);
    clear();
  });
};

export let inputField = () => searchBar.value;
export let clearForm = () => (searchBar.value = "");
