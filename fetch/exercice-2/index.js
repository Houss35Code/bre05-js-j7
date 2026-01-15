// URL de l'API à appeler
let url = "https://corsproxy.io/?" + encodeURIComponent(
    "https://maridoucet.sites.3wa.io/user-api/users"
);

// Utilisation de fetch pour récupérer les données
fetch(url)
  .then(response => {
    // Convertir la réponse en JSON
    return response.json();
  })
  .then(data => {
    // Afficher l'objet dans la console
    console.log(data);
  })
  .catch(error => {
    // Gérer les erreurs éventuelles
    console.error("Erreur lors de la récupération des données :", error);
  });