// URL de l'API à appeler pour créer un utilisateur
let url = "https://corsproxy.io/?" + encodeURIComponent(
    "https://maridoucet.sites.3wa.io/user-api/create-user"
);

// Création d'un FormData avec les informations de l'utilisateur
let formData = new FormData();
formData.append('username', "Houss35");
formData.append('firstName', "Houss");
formData.append('lastName', "Alpha");
formData.append('email', "houss.alpha@3wa.fr");

// Configuration de la requête POST
let options = {
    method: 'POST',
    body: formData
};

// Envoi des données avec fetch
fetch(url, options)
  .then(response => {
    // Convertir la réponse en JSON
    return response.json();
  })
  .then(data => {
    // Afficher la réponse dans la console
    console.log("Utilisateur créé :", data);
  })
  .catch(error => {
    // Gérer les erreurs éventuelles
    console.error("Erreur lors de la création de l'utilisateur :", error);
  });
