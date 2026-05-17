// =============================================
// Animation de frappe (typing) — sous-titre
// =============================================

const texte = "Développeur web junior en reconversion";
const element = document.querySelector(".typing");
let index = 0;

// On vide le texte de repli avant de démarrer
// (évite d'afficher deux fois le texte au chargement)
element.textContent = "";

function ecrire() {
  if (index < texte.length) {
    element.textContent += texte[index]; // ajoute une lettre
    index++;
    setTimeout(ecrire, 80); // attend 80ms puis recommence
  }
}

// Démarre l'animation après 0.5 seconde
// (laisse le temps à la page de s'afficher d'abord)
setTimeout(ecrire, 500);

// =============================================
// Bouton retour en haut
// =============================================
document.addEventListener("DOMContentLoaded", function () {
  const btnTop = document.getElementById("btnTop");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      btnTop.classList.add("visible");
    } else {
      btnTop.classList.remove("visible");
    }
  });

  btnTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});