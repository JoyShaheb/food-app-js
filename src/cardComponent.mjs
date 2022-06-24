let cardContainer = document.getElementById("card-container");

export let cardComponent = (data) => {
  cardContainer.innerHTML = "";
  console.log(data);
  let { hints, parsed, text, _links } = data;

  if (hints === undefined) return;
  else {
    return (cardContainer.innerHTML = hints
      ?.map((x) => {
        let { food, measures } = x;
        let { category, categoryLabel, foodId, image, label } = food;
        return `
      <div id=${foodId} class="card">
        <img src=${
          image
            ? image
            : "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rqxf0714ejt6odlln3no.png"
        } class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${label}</h5>
        </div>
      </div>
  `;
      })
      .join(""));
  }
};
