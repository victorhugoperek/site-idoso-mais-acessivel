<script src="script.js"></script>
let btnAjuda = document.querySelector(".botao-ajuda");
let btnFechar = document.querySelector(".botao-ajuda");
let modal = document.querySelector(".botao-ajuda");
<button class="botao-ajuda botao-fechar">Fechar</button>
let btnAjuda = document.querySelector(".botao-ajuda");
let btnFechar = document.querySelector(".botao-ajuda");
let modal = document.querySelector(".modal-fundo");
btnAjuda.addEventListener("click", abreModal);
btnFechar.addEventListener("click", fechaModal);
function abreModal() {
modal.style.display = "block";
}

function fechaModal() {
modal.style.display = "none";
}