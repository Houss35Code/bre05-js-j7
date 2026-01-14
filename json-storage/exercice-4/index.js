let user = {
    firstName: "Harry",
    lastName: "Bow",
    motto: "C'est beau la vie !"
};

document.addEventListener("DOMContentLoaded", function () {

    // Vérifier si la donnée "user" existe dans le sessionStorage
    let storedUser = sessionStorage.getItem("user");

    // Si elle n'existe pas
    if (storedUser === null) {

        // Transformer l'objet user en chaîne JSON
        let userJSON = JSON.stringify(user);

        // Stocker la chaîne JSON dans le sessionStorage
        sessionStorage.setItem("user", userJSON);

    } else {
        // Si elle existe

        // Transformer la chaîne JSON en objet JavaScript
        let userObject = JSON.parse(storedUser);

        // Afficher l'objet dans la console
        console.log(userObject);
    }

});
