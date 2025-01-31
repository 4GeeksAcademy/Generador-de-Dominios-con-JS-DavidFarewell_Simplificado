/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const pronouns = ["the", "our"];
  const adjectives = ["great", "big"];
  const nouns = ["jogger", "raccoon"];
  const extension = ".com";

  const button = document.getElementById("boton");
  const domainList = document.getElementById("domainList");

  button.addEventListener("click", generateDomains);

  function generateDomains() {
    domainList.innerHTML = "";

    let domains = [];
    for (let i = 0; i < pronouns.length; i++) {
      adjectives.map(adj => {
        nouns.map(noun => {
          domains.push(`${pronouns[i]}${adj}${noun}${extension}`);
        });
      });
    }

    domains.forEach((domain, index) => {
      let li = document.createElement("li");
      li.className = "list-group-item";
      li.textContent = `${index + 1}. ${domain}`;
      domainList.appendChild(li);
    });
  }
};
