// js/jeu.js - Gestion des comptes à rebours en temps réel sur la page de jeu
document.addEventListener('DOMContentLoaded', function() {
    const btnIndice = document.querySelector('button[name="indice"]');
    const btnRevelation = document.querySelector('button[name="demander_revelation"]');

    // Sécurité : on n'exécute le script que si on est sur l'écran de jeu avec les boutons
    if (!btnIndice && !btnRevelation) return;

    // Fonction pour extraire le nombre de secondes cachées dans le texte du bouton
    function obtenirTempsInitial(bouton, texteClef) {
        if (!bouton || bouton.disabled === false) return 0;
        const match = bouton.textContent.match(/\d+/);
        return match ? parseInt(match[0], 10) : 0;
    }

    // Récupération des temps initiaux laissés par le PHP
    let tempsIndice = obtenirTempsInitial(btnIndice);
    let tempsRevelation = obtenirTempsInitial(btnRevelation);

    // Compteur pour le bouton Indice
    if (tempsIndice > 0 && btnIndice) {
        const chronoIndice = setInterval(function() {
            tempsIndice--;
            if (tempsIndice > 0) {
                btnIndice.textContent = "Indice (" + tempsIndice + " s)";
            } else {
                btnIndice.textContent = "Indice disponible !";
                btnIndice.disabled = false;
                clearInterval(chronoIndice);
            }
        }, 1000);
    }

    // Compteur pour le bouton Révélation
    if (tempsRevelation > 0 && btnRevelation) {
        const chronoRevelation = setInterval(function() {
            tempsRevelation--;
            if (tempsRevelation > 0) {
                btnRevelation.textContent = "Révélation (" + tempsRevelation + " s)";
            } else {
                btnRevelation.textContent = "⚠️ Révéler le mot";
                btnRevelation.disabled = false;
                clearInterval(chronoRevelation);
            }
        }, 1000);
    }
});