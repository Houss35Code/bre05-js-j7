let data = {
    firstName: "Harry",
    lastName: "Bow",
    motto: "C'est beau la vie !"
};

let str = "{\"firstName\":\"Colonel\",\"lastName\":\"Sanders\",\"motto\":\"Il est bon mon poulet\"}";

document.addEventListener("DOMContentLoaded", function () {

    // Étape 3.1 : transformer l'objet en chaîne JSON
    let jsonString = JSON.stringify(data);
    console.log(jsonString);

    // Étape 3.2 : transformer la chaîne JSON en objet JavaScript
    let jsObject = JSON.parse(str);
    console.log(jsObject);

});
