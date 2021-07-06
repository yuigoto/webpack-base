import "styles/main.scss";

import imageFile from "assets/img/photo-1624289596129-2dd4c436b93d.jpg";

(() => {
  window.onload = () => {
    const body = document.querySelector("body");

    const container = document.createElement("div");
    container.classList.add("container");
    container.classList.add("py-4");

    const heading = document.createElement("h1");
    heading.classList.add("display-4");
    heading.innerHTML = "Webpack Base";
    container.appendChild(heading);

    const info = document.createElement("p");
    info.classList.add("lead");
    info.classList.add("text-muted");
    info.innerHTML = "Este é um boilerplate de projeto usando Webpack, para uso no meu tutorial Webpack 101. Ele é expansível e pronto para uso, inclusive com HMR! Duvida? Edita o arquivo em <code>src/index.js</code> pra ver como funciona! Já vem com: Bootstrap, FontAwesome (<i class=\"fa fa-truck\"></i> <i class=\"fa fa-search\"></i>)e suporte a SASS, além de outras mágicas!";
    container.appendChild(info);

    const addon = document.createElement("p");
    addon.innerHTML = "Esta página é completamente gerada pelo JavaScript, pode inspecionar! ;)";
    container.appendChild(addon);

    const imagep = document.createElement("p");
    imagep.classList.add("text-center");
    imagep.innerHTML = "Quer algo ainda mais legal? Dá pra importar imagens, e o builder move ela e ainda gera um hash, pra não ser buscável!:<br/><br/>";

    const image = document.createElement("img");
    image.src = imageFile;
    image.alt = "Uma imagem do Unsplash que achei legal";
    imagep.appendChild(image);

    container.appendChild(imagep);

    const row = document.createElement("div");
    row.classList.add("row");
    row.classList.add("py-4");

    for (let n = 0; n < 3; n++) {
      let col = document.createElement("div");
      col.classList.add("col-4");

      let p = document.createElement("p");
      p.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia beatae, illum voluptas excepturi ipsam porro adipisci placeat similique est nam velit ab obcaecati laborum facere, et consectetur quo voluptate iusto?";
      col.appendChild(p);

      row.appendChild(col);
    }

    container.appendChild(row);

    const hr = document.createElement("hr");
    container.appendChild(hr);

    const copy = document.createElement("p");
    copy.classList.add("text-muted");
    copy.innerHTML = "<em>&copy;2021 Fabio Y. Goto</em>";
    container.appendChild(copy);

    body.appendChild(container);
  };
})();
