// Animation typing sur le sous-titre
const texte = "Développeur Web en apprentissage";
const element = document.querySelector(".typing");
let index = 0;

function ecrire() {
  if (index < texte.length) {
    element.textContent += texte[index];
    index++;
    setTimeout(ecrire, 80);
    /* setTimeout = attendre X millisecondes avant d'exécuter une fonction
       80ms = vitesse d'écriture — change ce chiffre pour accélérer ou ralentir */
  }
}

// On démarre l'animation après 0.5 seconde
setTimeout(ecrire, 500);