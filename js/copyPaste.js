function copy(e) {
  console.log(e.currentTarget.dataset.copy);
  let text = e.currentTarget.dataset.copy;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      this.classList.add("copy-click-commande");
      this.textContent = "copied";
      setTimeout(() => {
            this.classList.remove("copy-click-commande");
            this.textContent = "copy"
          }, 1000);

      console.log("Text copied to clipboard");
    })
    .catch((err) => {
      console.error("Could not copy text: ", err);
    });
  e.preventDefault();
}

let buttonCopy = document.querySelectorAll(".item-code-structure-copy");


buttonCopy.forEach(element => {
    element.addEventListener("click", copy);
});
//document.querySelector(".item-code-structure-copy").addEventListener("click", copy);
