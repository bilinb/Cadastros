document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const loginButton = document.getElementById("loginButton");
    const closeModal = document.getElementById("closeModal");
    const registerForm = document.getElementById("registerForm");

    // Abre o modal quando o botão de login/cadastro é clicado
    loginButton.onclick = () => modal.classList.remove("hidden");

    // Fecha o modal quando o botão de fechar é clicado
    closeModal.onclick = () => modal.classList.add("hidden");

    // Quando o formulário de cadastro for enviado
    registerForm.onsubmit = (event) => {
        event.preventDefault();

        const userData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            cpf: document.getElementById("cpf").value,
            password: document.getElementById("password").value,
        };

        // Armazena os dados no localStorage
        localStorage.setItem("userData", JSON.stringify(userData));

        alert("Seu cadastro foi realizado!");

        // Fecha o modal e redireciona para a página de perfil
        modal.classList.add("hidden");
        window.location.href = "profile.html";
    };

    // Exibe os dados do usuário na página de perfil
    if (window.location.pathname.includes("profile.html")) {
        const storedData = JSON.parse(localStorage.getItem("userData"));
        
        if (storedData) {
            document.getElementById("userName").textContent = storedData.name;
            document.getElementById("userEmail").textContent = storedData.email;
            document.getElementById("userPhone").textContent = storedData.phone;
            document.getElementById("userCPF").textContent = storedData.cpf;
        }
    }
});
