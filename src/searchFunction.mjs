let form = document.getElementById("form");
let searchBar = document.getElementById("search-bar");

export let submitForm = (input, clear) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    input();
    clear();
  });
};

export let inputField = () => searchBar.value;
export let clearForm = () => (searchBar.value = "");
