/*let headerHTML = `
<header class="b-color-5 color-b">
      <div class="container statusbar">
        <div class="title-image">
          <img src="/img/sonic2.png" />
        </div>
        <div class="title-blog">
          <h1>Le BLOG de Nino</h1>
        </div>
      </div>
    </header>
`;*/

const minecraft = {
  bColor1: "rgb(8, 166, 50)",
};

const themes = {
  default: {
    bColor: "rgb(255,211,0)",
    color: "black",
    title: "",
  },
  minecraft: {
    bColor: "rgb(8, 166, 50)",
    color: "white",
    title: "Minecraft",
  },
  videoGame: {
    bColor: "RGB(48, 97, 227)",
    color: "white",
    title: "Jeux Videos",
  }
};

const headerHTML1 = (theme) => {
  let bColor;
  let color;
  let title;

  if (theme != "default") {
    bColor = themes[theme].bColor;
    color = themes[theme].color;
    title = themes[theme].title;
  } else {
    bColor = themes["default"].bColor;
    color = themes["default"].color;
    title = themes["default"].title;
  }

  let headerHTML = `
<header style="background-color: ${bColor}; color: ${color}">
      <div class="container statusbar">
        <div class="title-image">
        <a href="index.html">
          <img src="/img/sonic2.png" />
          </a>
        </div>
        <div class="title-blog">
          <div>Le BLOG de Nino</div>
          <div>${title}</div>
        </div>
        <div class="status-left"></div>
      </div>
    </header>
`;

  return (document.getElementById("containerHead").innerHTML = headerHTML);
};

//let header = (document.getElementById("containerHead").innerHTML = headerHTML);
