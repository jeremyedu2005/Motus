<?php
// Fichier : class/VueDebutHTML.class.php

class VueDebutHTML
{
    public function __toString()
    {
        ob_start();
        ?>
        <!DOCTYPE html>
        <html lang="fr">

        <head>
            <meta charset="UTF-8">
            <!-- LA LIGNE MAGIQUE POUR LE RESPONSIVE MOBILE MOBILE -->
            <meta name="viewport" content="width=device-width, initial-scale=1.0">

            <title>Motus Star Wars</title>

            <!-- Liaison de ton fichier CSS unifié -->
            <link rel="stylesheet" href="css/motus.css">
        </head>

        <body>
            <!-- Menu de navigation global -->
            <nav class="navbar">
                <div class="navbar-container">
                    <a href="index.php?motus=accueil" class="navbar-logo">
                        Motus Star Wars
                    </a>

                    <!-- Menu hamburger pour le responsive -->
                    <div class="hamburger" id="hamburger-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <ul class="navbar-menu" id="nav-menu">
                        <li><a href="index.php?motus=accueil" class="nav-link">Accueil</a></li>
                        <li><a href="index.php?motus=reglement" class="nav-link">Règles</a></li>
                        <li><a href="index.php?motus=jeu" class="nav-link">Jouer</a></li>

                    </ul>
                </div>
            </nav>

            <!-- Script pour animer le menu hamburger mobile -->
            <script>
                document.addEventListener('DOMContentLoaded', function () {
                    const hamburger = document.getElementById('hamburger-icon');
                    const menu = document.getElementById('nav-menu');

                    if (hamburger && menu) {
                        hamburger.addEventListener('click', function () {
                            hamburger.classList.toggle('active');
                            menu.classList.toggle('active');
                        });
                    }
                });
            </script>

            <!-- Début du contenu principal -->
            <main>
                <?php
                return ob_get_clean();
    }
}