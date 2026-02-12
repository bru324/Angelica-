const numeroWhats = "554499601672";

const buttons = document.querySelectorAll(".accordion-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

function abrirWhats(mensagem) {
  const texto = encodeURIComponent(mensagem);
  const link = `https://wa.me/${numeroWhats}?text=${texto}`;
  window.open(link, "_blank");
}
