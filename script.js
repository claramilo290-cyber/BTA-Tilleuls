function connexion(){


let identifiant =
document.getElementById("identifiant").value;


let motdepasse =
document.getElementById("motdepasse").value;



if(
identifiant === "BTA-TILLEULS" 
&& 
motdepasse === "GND2026"
){

window.location.href="pages/enquete.html";

}


else if(
identifiant === "RYAN-BELANI"
&&
motdepasse === "RB2026"
){

window.location.href="pages/ryan.html";

}


else{

alert("Identifiant ou mot de passe incorrect");

}


}
