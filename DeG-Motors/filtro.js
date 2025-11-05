document.addEventListener("DOMContentLoaded", () => {
  const filtro = document.getElementById("filtro-marca");
  const carros = document.querySelectorAll(".car-card");

  if (filtro) {
    filtro.addEventListener("change", () => {
      const marcaSelecionada = filtro.value;

      carros.forEach((carro) => {
        const marca = carro.dataset.marca;

        if (marcaSelecionada === "todas" || marca === marcaSelecionada) {
          carro.style.display = "block";
        } else {
          carro.style.display = "none";
        }
      });
    });
  }
});
