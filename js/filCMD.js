/*const fill = {
      destroy:
        "Remplace tous les blocs de la zone de destination par le nouveau bloc.(valeur par defaut)",
      keep: "Remplace tous les blocs d'air de la zone de destination par le nouveau bloc, et garde les autres blocs sans motification.",
      hollow:
        "Dessine un cube creux avec le nouveau bloc, et remplit l'intérieur d'air.",
      outline:
        "Dessine un cube creux avec le nouveau bloc, et laisse les anciens blocs à l'intérieur.",
    };*/

    const reset = {
      from: "",
      to: "",
      block: "",
      fill: "destroy",
    };
    let from = document.getElementById("from");
    let to = document.getElementById("to");
    let block = document.getElementById("block");
    let fill = document.getElementById("fill");
    let block2 = document.getElementById("block2");
    let fromResult = document.getElementById("from-result");
    let toResult = document.getElementById("to-result");
    let blockResult = document.getElementById("block-result");
    let fillResult = document.getElementById("fill-result");
    let block2Result = document.getElementById("block2-result");

    function change(e) {
      let element = document.getElementById(e.currentTarget.dataset.result);
      element.textContent = e.currentTarget.value;
      e.preventDefault();
    }

    let buttonCopy = document.querySelectorAll(".cmd-input");

    buttonCopy.forEach((element) => {
      element.addEventListener("change", change);
    });

    function pasteCMD(e) {
      let el = document.getElementById(e.currentTarget.id);
      let element = document.getElementById(e.currentTarget.dataset.result);
      let elementOut = document.getElementById(
        e.currentTarget.dataset.resultout
      );
      navigator.clipboard.readText().then((clipText) => {
        element.value = clipText;
        elementOut.textContent = clipText;
        el.classList.add("copy-click-commande");
        el.querySelector("span").textContent = "collé";
        setTimeout(() => {
          el.classList.remove("copy-click-commande");
          el.querySelector("span").textContent = "coller";
        }, 1000);
      });
    }

    function copyCMD(e) {
      let text =
        "/fill" +
        " " +
        from.value +
        " " +
        to.value +
        " " +
        block.value +
        " " +
        fill.value +
        " " +
        block2.value;
      console.log(e.currentTarget);
      let element = document.getElementById(e.currentTarget.id);
      navigator.clipboard
        .writeText(text)
        .then(() => {
          element.classList.add("copy-click-commande");
          element.querySelector("span").textContent = "copié";
          setTimeout(() => {
            element.classList.remove("copy-click-commande");
            element.querySelector("span").textContent = "copier";
          }, 1000);
        })
        .catch((err) => {
          console.error("Could not copy text: ", err);
        });
      e.preventDefault();
    }

    function resetCMD(e) {
      from.value = "";
      to.value = "";
      block.value = "";
      fill.value = "";
      block2.value = "";
      fromResult.textContent = "<from>";
      toResult.textContent = "<to>";
      blockResult.textContent = "<block>";
      fillResult.textContent = "";
      block2Result.textContent = "";
    }

    let butCopy = document
      .getElementById("commande-copy")
      .addEventListener("click", copyCMD);

    let butReset = document
      .getElementById("commande-reset")
      .addEventListener("click", resetCMD);

    let inputPaste = document
      .getElementById("commande-paste-from")
      .addEventListener("click", pasteCMD);

    let inputPasteTo = document
      .getElementById("commande-paste-to")
      .addEventListener("click", pasteCMD);

    let inputPasteBlock = document
      .getElementById("commande-paste-block")
      .addEventListener("click", pasteCMD);

    let buttonsPaste = document.querySelectorAll(".commande-paste");

    let enableDisableInput = document.getElementById("fill").addEventListener("change", (e) => {
        console.log("change")
        if(e.currentTarget.value == "replace") {
            document.getElementById("container-input-block2").classList.remove("disabled");
            document.getElementById("commande-paste-block2").classList.remove("display-none");
            document.getElementById("block2").removeAttribute("disabled");
            document.getElementById("block2").classList.add("disabled");
        } else {
            document.getElementById("container-input-block2").classList.add("disabled");
            document.getElementById("commande-paste-block2").classList.add("display-none");
            document.getElementById("block2").setAttribute("disabled", true);
            document.getElementById("block2").classList.remove("disabled");
        }
    })

    buttonsPaste.forEach((element) => {
      element.addEventListener("click", pasteCMD);
    });