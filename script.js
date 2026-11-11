const images = [
  "Screenshot 2026-11-11 211350.png",
  "Screenshot 2026-11-11 211426.png",
  "Screenshot 2026-11-11 211450.png",
  "Screenshot 2026-11-11 211506.png",
  "Screenshot 2026-11-11 211537.png",
  "Screenshot 2026-11-11 211600.png",
  "Screenshot 2026-11-11 211613.png",
  "Screenshot 2026-11-11 211629.png",
  "Screenshot 2026-11-11 211701.png",
  "Screenshot 2026-11-11 211718.png",
  "Screenshot 2026-11-11 211742.png",
];
const cursor = document.querySelector(".cursor");
addEventListener("mousemove", (event) => {
  cursor.style.left = `${event.clientX}px`;
  cursor.style.top = `${event.clientY}px`;
  cursor.style.opacity = 1;
});
document.querySelector("figure").animate(
  [
    { transform: "translateY(50px)", opacity: 0 },
    { transform: "translateY(0)", opacity: 1 },
  ],
  { duration: 1200, fill: "forwards", easing: "cubic-bezier(.15,.8,.2,1)" },
);
document.body.insertAdjacentHTML(
  "beforeend",
  `<section class="archive"><p>EL ARCHIVO DAYI'S / ELIGE UN ESTUDIO</p><div>${images.map((image, i) => `<button data-image="${image}"><img src="../assets/${image}" alt="Estudio de pastel ${i + 1}"><span>${String(i + 1).padStart(2, "0")}</span></button>`).join("")}</div></section><dialog><button>×</button><p>PARA PEDIDOS PRIVADOS EN MIAMI</p><h2>Comienza tu historia dulce.</h2><a href="https://www.instagram.com/cakes_bydayi/" target="_blank">CONSULTA EN INSTAGRAM ↗</a></dialog>`,
);
document.querySelectorAll(".archive button").forEach((button) =>
  button.addEventListener("click", () => {
    document.querySelector("figure img").src =
      `../assets/${button.dataset.image}`;
    document.querySelector("figure").scrollIntoView({ behavior: "smooth" });
  }),
);
document
  .querySelector("nav button")
  .addEventListener("click", () =>
    document.querySelector("dialog").showModal(),
  );
document
  .querySelector("dialog button")
  .addEventListener("click", () => document.querySelector("dialog").close());
