window.addEventListener("DOMContentLoaded", function () {

    // Récupération de la valeur username depuis le sessionStorage
    let username = sessionStorage.getItem("username");

    // Si username n'existe pas
    if (username === null) {
        // Demande du nom à l'utilisateur
        username = window.prompt("Veuillez saisir votre nom :");

        // Vérification minimale (optionnelle mais propre)
        if (username !== null && username !== "") {
            // Sauvegarde dans le sessionStorage
            sessionStorage.setItem("username", username);
        }
    } else {
        // Si username existe déjà, on l'affiche
        window.alert("Bonjour " + username + " !");
    }

});
