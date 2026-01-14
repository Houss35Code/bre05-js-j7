document.addEventListener("DOMContentLoaded", function(){
    let name = "Harry Bow";
    
    // Stockage dans le localStorage
    localStorage.setItem("name", name);
    
    // Stockage dans le sessionStorage
    sessionStorage.setItem("name", name);
    
    console.log("Données stockées !");
    console.log("localStorage:", localStorage.getItem("name"));
    console.log("sessionStorage:", sessionStorage.getItem("name"));
});
