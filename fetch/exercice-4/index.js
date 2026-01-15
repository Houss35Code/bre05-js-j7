// URL de l'API à appeler
let url = "https://corsproxy.io/?" + encodeURIComponent(
    "https://maridoucet.sites.3wa.io/user-api/user/18"
);

// Utilisation de fetch pour récupérer les données
fetch(url)
  .then(response => {
    // Convertir la réponse en JSON
    return response.json();
  })
  .then(result => {
    // Récupérer les données de l'utilisateur
    let user = result.data;
    
    // Créer un h1 pour le username
    let h1 = document.createElement('h1');
    h1.textContent = user.username;
    document.body.appendChild(h1);
    
    // Créer un h2 pour le prénom et nom
    let h2 = document.createElement('h2');
    h2.textContent = user.firstName + ' ' + user.lastName;
    document.body.appendChild(h2);
    
    // Créer un h3 pour l'email
    let h3 = document.createElement('h3');
    h3.textContent = user.email;
    document.body.appendChild(h3);
  })
  .catch(error => {
    // Gérer les erreurs éventuelles
    console.error("Erreur lors de la récupération des données :", error);
  });