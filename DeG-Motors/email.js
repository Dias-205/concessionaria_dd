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
      localStorage.setItem("ultimoEmail", JSON.stringify(emailData));

      alert("✅ Sucesso! Seu email foi registrado e logo entraremos em contato.");
      form.reset();
    });
  }
});
