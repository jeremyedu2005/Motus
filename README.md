## Motus Star Wars
[Demo](https://raodson-jeremy.com/Projets/Motus/index.php)


**Motus Star Wars** est une application web de jeu de lettres inspirée du célèbre concept du Motus, transposée dans l'univers de la pop-culture Star Wars. Ce projet a été initialement initié dans un cadre universitaire avant d'être approfondi et finalisé de manière autonome, tout en conservant sa vocation de projet académique.

---

## 🚀 Présentation du projet

L'objectif de ce projet est de proposer une expérience de jeu fluide, interactive et graphiquement immersive à travers l'univers cinématographique de Star Wars. 
Le joueur doit deviner un mot secret galactique en 6 tentatives maximum. 
* Les lettres bien placées apparaissent en **rouge**.
* Les lettres présentes mais mal placées apparaissent en **jaune**.
* Les lettres absentes restent en **gris sombre**.

Des aides et mécaniques de jeu en temps réel (indices, compte à rebours, système de confirmation d'abandon) viennent enrichir le gameplay.

---

## 🛠️ Technologies et méthodologies

Ce projet repose sur une synergie de technologies web fondamentales et une méthodologie moderne exploitant l'intelligence artificielle comme outil collaboratif :

* **PHP (POO) & MVC :** Architecture logicielle backend robuste structurée selon le *design pattern* Modèle-Vue-Contrôleur (MVC). Utilisation de la programmation orientée objet pour l'isolation complète de la logique métier (Contrôleur) et de la génération des rendus (Vues).
* **JSON :** Utilisé comme format de stockage de données léger et structuré, faisant office de base de données plate pour le dictionnaire de mots et leurs indices associés.
* **Bibliothèque PHP GD :** Génération dynamique et traitement de flux binaires d'images pour le module de simulation automatique (démonstration).
* **HTML5 & CSS3 :** Structure sémantique et design immersif inspiré de Star Wars. Le design est **100% Responsive** grâce à l'intégration d'un système de grilles fluides, de *breakpoints* imbriqués et de fonctions typographiques adaptatives (`clamp()`).
* **JavaScript (ES6) :** Manipulation dynamique du DOM pour le rafraîchissement asynchrone de la démonstration, la gestion en temps réel des comptes à rebours des bonus (indices/révélation) et la gestion des événements de navigation (menu hamburger).
* **Collaboration avec l'Intelligence Artificielle :** L'IA a été activement intégrée comme un collaborateur technique pair-à-pair pour l'optimisation des algorithmes complexes, le débogage de l'architecture MVC et la refonte des fonctionnalités dynamiques.
    > 🤖 **Note de transparence :** L'intégralité du design CSS et de sa logique responsive et adaptative a été optimisée et co-générée par Intelligence Artificielle pour garantir une compatibilité multi-écran rigoureuse.

---

## 📁 Arborescence du projet

L'organisation des fichiers reflète une stricte séparation des responsabilités conformément aux standards du développement web moderne :

```text
Motus/
├── BD/
│   └── bibliotheque.json       # Base de données au format JSON (Dictionnaire)
├── class/
│   ├── VueAccueil.class.php    # Vue de la page d'accueil
│   ├── VueClavier.class.php    # Sous-composant visuel du clavier du jeu
│   ├── VueDebutHTML.class.php  # Structure d'en-tête HTML5 globale et Navbar
│   ├── VueDemonstration.class.php # Vue HTML de la page de simulation
│   ├── VueFinHTML.class.php    # Structure de fermeture HTML globale
│   ├── VueGD.class.php         # Vue dédiée à la génération d'images PNG via PHP GD
│   ├── VueJeu.class.php        # Vue principale de l'interface de jeu
│   ├── VueMentionlegales.class.php # Vue de la page des mentions légales
│   └── VueRegles.class.php     # Vue de la page de règlement
├── css/
│   └── motus.css               # Feuille de style unifiée et 100% responsive
├── inc/
│   └── poo.inc.php             # Système d'autoloading automatique des classes
├── js/
│   ├── demo.js                 # Script d'animation asynchrone de la démonstration
│   └── jeu.js                  # Script de gestion des comptes à rebours en temps réel
└── index.php                   # Contrôleur frontal et routeur principa de  l'application
