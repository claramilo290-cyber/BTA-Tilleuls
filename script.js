// Horloge système

function updateClock(){

    let date = new Date();

    let heure =
    date.getHours()
    .toString()
    .padStart(2,"0");

    let minute =
    date.getMinutes()
    .toString()
    .padStart(2,"0");


    let element =
    document.getElementById("clock");


    if(element){

        element.innerHTML =
        heure + ":" + minute;

    }

}


setInterval(updateClock,1000);

updateClock();




// Ouverture d'une application

function openApp(app){

    let fenetre =
    document.getElementById(app+"Window");


    if(fenetre){

        fenetre.style.display="block";

    }

}




// Fermeture d'une application

function closeApp(app){

    let fenetre =
    document.getElementById(app+"Window");


    if(fenetre){

        fenetre.style.display="none";

    }

}
