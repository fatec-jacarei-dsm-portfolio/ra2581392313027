document.addEventListener("DOMContentLoaded", function () {
    // Pegamos os elementos necessários do modal
    const modal = document.getElementById("modal");
    const closeModal = document.querySelector(".close");

    if (!modal) {
        console.error("Erro: modal não encontrado!");
        return;
    }

    // Abrir modal ao clicar no botão "Saiba Mais"
    document.querySelectorAll(".open-modal").forEach((button) => {
        button.addEventListener("click", function () {
            const title = this.getAttribute("data-title");
            const techStack = this.getAttribute("data-tech");
            const gitLink = this.getAttribute("data-link");

            document.getElementById("modal-title").innerText = title;
            document.getElementById("github-link").href = gitLink;

            // Limpa a lista antes de adicionar novos itens
            const techList = document.getElementById("tech-stack-list");
            techList.innerHTML = "";

            // Converte a string de tecnologias em array e cria os elementos <li>
            techStack.split(",").forEach((tech) => {
                const listItem = document.createElement("li");
                listItem.textContent = tech.trim();
                techList.appendChild(listItem);
            });

            modal.style.display = "block";
        });
    });

    // Fechar modal ao clicar no "X"
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Fechar modal ao clicar fora dele
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
