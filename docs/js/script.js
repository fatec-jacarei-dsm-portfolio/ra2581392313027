document.addEventListener("DOMContentLoaded", function () {
    // Hamburger Menu
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            navLinks.classList.toggle('open');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('open');
                navLinks.classList.remove('open');
            });
        });
    }

    // Modal
    const modal = document.getElementById("modal");
    const closeModal = document.querySelector(".close");

    if (!modal) {
        console.error("Erro: modal não encontrado!");
        return;
    }

    function openModal(title, techStack, gitLink) {
        document.getElementById("modal-title").innerText = title;
        document.getElementById("github-link").href = gitLink;

        const techList = document.getElementById("tech-stack-list");
        techList.innerHTML = "";

        techStack.split(",").forEach((tech) => {
            const listItem = document.createElement("li");
            listItem.textContent = tech.trim();
            techList.appendChild(listItem);
        });

        modal.style.display = "block";
    }

    function closeModals() {
        modal.style.display = "none";
    }

    // Abrir modal ao clicar em "Saiba Mais"
    document.querySelectorAll(".open-modal").forEach((button) => {
        button.addEventListener("click", function () {
            const title = this.getAttribute("data-title");
            const techStack = this.getAttribute("data-tech");
            const gitLink = this.getAttribute("data-link");
            openModal(title, techStack, gitLink);
        });
    });

    // Fechar modal ao clicar no botão "X"
    closeModal.addEventListener("click", closeModals);

    // Fechar modal ao clicar fora dele
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModals();
        }
    });

    // Fechar modal ao pressionar ESC
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && modal.style.display === "block") {
            closeModals();
        }
    });
});
