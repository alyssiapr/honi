<?php 
require 'config/database.php';

// Requête de connexion 
// (ouverture de la session)
session_start();
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (!empty ($_POST['username']) && ($_POST['password'])) {
        $username = ($_POST['username']);
        $pass = ($_POST['password']);

        // requete pour récuperer l'username et le password
        $recupUser = $database -> prepare('SELECT * FROM utilisateur WHERE username = ? AND password = ?');
        $recupUser -> execute(array ($username, $pass));
        
        if ($recupUser -> rowCount () > 0) {
            $_SESSION['username'] = $username;
            $_SESSION['password'] = $pass;
            $_SESSION['id'] = $recupUser -> fetch()['id'];
            header ('Location: index.php');
        }

        else {
            echo "Votre username ou votre mot de passe est incorrect";
        }
    }
}



require_once 'article/connexion.template.php'
?>