const botaoTema = document.querySelector("#botao-tema");
const temaSalvo = localStorage.getItem("tema") || "escuro";

document.body.setAttribute("data-tema", temaSalvo);
botaoTema.setAttribute("aria-pressed", temaSalvo === "claro");

botaoTema.addEventListener("click", () => {
  const temaAtual = document.body.getAttribute("data-tema") === "claro" ? "escuro" : "claro";
  document.body.setAttribute("data-tema", temaAtual);
  botaoTema.setAttribute("aria-pressed", temaAtual === "claro");
  localStorage.setItem("tema", temaAtual);
});