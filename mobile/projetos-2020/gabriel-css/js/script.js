document.getElementsByClassName("menu-icon")[0]
    .addEventListener("click", function () {
        document.getElementsByClassName("painel-lateral")[0].className = "painel-lateral show-painel-lateral";
    });
document.getElementsByClassName("fechar-btn")[0]
    .addEventListener("click", function () {
        document.getElementsByClassName("painel-lateral")[0].className = "painel-lateral hide-painel-lateral";
    });
