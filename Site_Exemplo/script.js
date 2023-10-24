// Seleciona o botão e o menu dropdown
const button = document.getElementById("dropdown-button");
const menu = document.getElementById("dropdown-menu");

// Adiciona um evento de clique ao botão
button.addEventListener("click", function () {
  // Verifica se o menu está visível
  if (menu.style.display === "none") {
    // Mostra o menu
    menu.style.display = "flex";
    menu.style.flexDirection = "column";
  } else {
    // Oculta o menu
    menu.style.display = "none";
  }
});
