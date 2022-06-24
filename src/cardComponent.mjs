let cardContainer = document.getElementById("card-container");
export let cardComponent = (data) => {
  console.log(data);

  if (data === undefined) return;
  else {
    return (cardContainer.innerHTML = data
      ?.map((x) => {
        let { food, measures } = x;
        let { category, categoryLabel, foodId, image, label } = food;
        return `
      <div class="card">
      <img src=${
        image
          ? image
          : "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nlhll2445zs74vwrv52u.png"
      } class="card-img-top" alt="...">
  
      <div class="card-body">
        <h5 class="card-title">${label}</h5>
        <p class="card-text"></p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
  
      </div>
  `;
      })
      .join(""));
  }
};
