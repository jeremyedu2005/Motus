// js/jeu.js - Gestion des comptes à rebours en temps réel pour le jeu Motus

document.addEventListener('DOMContentLoaded', function () {
    const btnIndice = document.querySelector('.btn-indice');
    const btnRevelation = document.querySelector('.btn-revelation');

    // --- CHRONOMÈTRE DE L'INDICE ---
    if (btnIndice) {
        let texte = btnIndice.textContent;
        let match = texte.match(/\d+/);
        // Si un chiffre est trouvé, on le prend, sinon on initialise à 10 si le bouton est bloqué
        let tempsRestant = match ? parseInt(match[0], 10) : (btnIndice.hasAttribute('disabled') ? 10 : 0);

        if (tempsRestant > 0) {
            const timerIndice = setInterval(function () {
                tempsRestant--;
                if (tempsRestant <= 0) {
                    clearInterval(timerIndice);
                    btnIndice.textContent = "Indice disponible !";
                    btnIndice.removeAttribute('disabled');
                } else {
                    btnIndice.textContent = "Indice (" + tempsRestant + " s)";
                }
            }, 1000);
        }
    }

    // --- CHRONOMÈTRE DE LA RÉVÉLATION ---
    if (btnRevelation) {
        let texte = btnRevelation.textContent;
        let match = texte.match(/\d+/);
        let tempsRestant = match ? parseInt(match[0], 10) : (btnRevelation.hasAttribute('disabled') ? 15 : 0);

        if (tempsRestant > 0) {
            const timerRevelation = setInterval(function () {
                tempsRestant--;
                if (tempsRestant <= 0) {
                    clearInterval(timerRevelation);
                    btnRevelation.textContent = "⚠️ Révéler le mot";
                    btnRevelation.removeAttribute('disabled');
                } else {
                    btnRevelation.textContent = "Révélation (" + tempsRestant + " s)";
                }
            }, 1000);
        }
    }
});