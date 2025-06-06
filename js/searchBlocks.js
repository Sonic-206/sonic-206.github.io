const itemsLists = (items, id) => {
  containerItems = document.createElement("ul");
  containerItems.classList.add("ul-search");

  items.forEach((item) => {
    element = document.createElement("li");
    elementImg = document.createElement("img");
    elementSpan = document.createElement("span");

    let ext = item.img.split(".");
    elementImg.src =
      "/img/blocks/" + item.identifier + "." + ext[ext.length - 1];

    elementSpan.textContent = item.french;

    element.appendChild(elementImg);
    element.appendChild(elementSpan);

    element.id = item.identifier;
    element.classList.add("li-search-" + id);
    containerItems.appendChild(element);
  });

  return containerItems;
};

const clickSearch = (e, id) => {
    let addSearch = document.getElementById(id);
    let closeSearch = addSearch.dataset.search;

    let element = document.getElementById(closeSearch);
    element.querySelector("ul").remove()
    addSearch.value = e.currentTarget.id
    document.getElementById(addSearch.dataset.result).textContent = e.currentTarget.id
};

const search = (e) => {
  console.log(e.currentTarget.value);
  let value = e.currentTarget.value;
  let id = e.currentTarget.id;
  if (value.length > 1) {
    const regex1 = new RegExp(e.currentTarget.value, "ig");
    const found2 = totalBlock.filter((element) => element.french.match(regex1));
    const element = document.getElementById(e.currentTarget.dataset.search);

    if (document.querySelector(".ul-search")) {
      document.querySelector(".ul-search").remove();
    }
    element.appendChild(itemsLists(found2, id));
    if (document.querySelectorAll(".li-search-" + id)) {
      liClick = document.querySelectorAll(".li-search-" + id);
      liClick.forEach((element) => {
        element.addEventListener("click", (e) => {
            clickSearch(e, id)
        });
      });
    }
  } else {
    if (document.querySelector(".ul-search")) {
      document.querySelector(".ul-search").remove();
    }
  }
};

inputBlock = document.querySelectorAll(".search-block-js");

inputBlock.forEach((element) => {
  element.addEventListener("input", search);
});
