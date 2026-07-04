<?php
class VueGD
{
    private $etape;

    public function __construct($etape = 1)
    {
        $this->etape = $etape;
    }

    public function afficherImage()
    {
        $motSecret = "VADER"; 
        $longueur = strlen($motSecret);
        
        $simulationMots = [
            0 => "VAKAR",
            1 => "VODAS",
            2 => "VALER",
            3 => "VAMPI",
            4 => "VADRE",
            5 => "VADER"
        ];
        
        $lignes = 6;
        $tailleCase = 80;
        $largeurImage = $longueur * $tailleCase + 60;
        $hauteurImage = $lignes * $tailleCase + 60;
        
        $image = imagecreate($largeurImage, $hauteurImage);
        
        $cNoir  = imagecolorallocate($image, 0, 0, 0);
        $cBleu  = imagecolorallocate($image, 10, 10, 15); 
        $cGris  = imagecolorallocate($image, 34, 34, 34);  
        $cRouge = imagecolorallocate($image, 255, 64, 64); 
        $cjaune = imagecolorallocate($image, 255, 255, 153); 
        $cBlanc = imagecolorallocate($image, 255, 255, 255);
        
        imagefill($image, 0, 0, $cBleu);
        
        for ($l = 0; $l < $lignes; $l++) {
            $motSimule = $simulationMots[$l];
            
            for ($c = 0; $c < $longueur; $c++) {
                $lettre = " ";
                $couleurCase = $cGris;
                
                if ($l < $this->etape) {
                    $lettre = $motSimule[$c];
                    
                    if ($motSimule[$c] === $motSecret[$c]) {
                        $couleurCase = $cRouge;
                    } elseif (strpos($motSecret, $motSimule[$c]) !== false) {
                        $couleurCase = $cjaune;
                    } else {
                        $couleurCase = $cGris;
                    }
                } elseif ($l == $this->etape - 1 && $c == 0) {
                    $lettre = $motSecret[0];
                    $couleurCase = $cRouge;
                }
                
                $x1 = $c * $tailleCase + 30;
                $y1 = $l * $tailleCase + 30;
                $x2 = $x1 + $tailleCase - 10;
                $y2 = $y1 + $tailleCase - 10;
                
                imagefilledrectangle($image, $x1, $y1, $x2, $y2, $couleurCase);
                
                if ($lettre !== " ") {
                    imagestring($image, 5, $x1 + 30, $y1 + 30, $lettre, ($couleurCase === $cjaune) ? $cNoir : $cBlanc);
                }
            }
        }
        
        // En-têtes et rendu de l'image
        header("Content-Type: image/png");
        imagepng($image);
        imagedestroy($image);
        exit;
    }

    // Version obligatoire pour éviter les erreurs si la classe est appelée en string
    public function __toString()
    {
        $this->afficherImage();
        return '';
    }
}