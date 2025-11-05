document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".email-form");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const from = document.getElementById("from").value;
      const to = document.getElementById("to").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      const emailData = {
        remetente: from,
        destinatario: to,
        assunto: subject,
        mensagem: message,
        data: new Date().toLocaleString(),
      };

      // Salva o email no localStorage
      localStorage.setItem("ultimoEmail", JSON.stringify(emailData));

      // Redireciona para a página de sucesso
      window.location.href = "sucesso.html";
    });
  }
});
