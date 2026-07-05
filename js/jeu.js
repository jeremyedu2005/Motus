// js/jeu.js - Gestion des comptes à rebours en temps réel pour le jeu Motus

document.addEventListener('DOMContentLoaded', function () {
    // 1. Récupération des boutons du DOM
    const btnIndice = document.querySelector('.btn-indice');
    const btnRevelation = document.querySelector('.btn-revelation');

    // --- GESTION DU TIMER DE L'INDICE ---
    if (btnIndice) {
        // On extrait le nombre de secondes initial (ex: "Indice (10 s)" -> 10)
        let texteInitial = btnIndice.textContent;
        let match = texteInitial.match(/\d+/);

        if (match) {
            let tempsRestant = parseInt(match[0], 10);

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
                }, 1000); // S'exécute pile toutes les 1000ms (1 seconde)
            }
        }
    }

    // --- GESTION DU TIMER DE LA RÉVÉLATION ---
    if (btnRevelation) {
        let texteInitial = btnRevelation.textContent;
        let match = texteInitial.match(/\d+/);

        if (match) {
            let tempsRestant = parseInt(match[0], 10);

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
    }
});