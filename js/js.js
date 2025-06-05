const addElement = (object) => {
  var element = document.createElement(object.tagName);
  if (object.class != undefined) {
    element.className = object.class;
  }
  if (object.value != undefined) {
    element.textContent = object.value;
  }
  if (object.src != undefined) {
    element.src = object.src;
  }
  if (object.dataset != undefined) {
    element.setAttribute(object.dataset.dataId, object.dataset.value);
  }


  return element;
};

const createItemElements = (item) => {
  let container = addElement({ class: "item-container", tagName: "div" });

  let imageContainer = addElement({ class: "image-container", tagName: "div" });
  let image = addElement({
    class: "item-image",
    tagName: "img",
    src: "structures-folder/img/" + item.identifier + ".png",
  });

  imageContainer.appendChild(image);

  let itemDescription = addElement({
    class: "item-description",
    tagName: "div",
  });
  let itemTitle = addElement({
    class: "item-title",
    tagName: "div",
    value: item.name["fr"],
  });
  let itemCodeStructure = addElement({
    class: "item-code-structure",
    tagName: "div",
    value: item.folder + ":" + item.identifier,
  });
  let itemCodeStructureCopy = addElement({
    class: "item-code-structure-copy",
    tagName: "div",
    value: "copy",
    dataset: {
      dataId: "data-copy",
      value: item.folder + ":" + item.identifier,
    },
  });
  itemDescription.appendChild(itemTitle);
  itemDescription.appendChild(itemCodeStructure);
  itemDescription.appendChild(itemCodeStructureCopy);

  container.appendChild(imageContainer);
  container.appendChild(itemDescription);

  return container;
};

const listItems = (items) => {
  let currentDiv = document.getElementById("list-items");
  items.forEach((item) => {
    currentDiv.appendChild(createItemElements(item));
  });
};

const init = () => {
  listItems(items);
};

init();
