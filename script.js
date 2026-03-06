// Wanneer de pagina laadt, zetten we het geheime wachtwoord in de cookies.
// We noemen de cookie 'Sessie_Sleutel' om het een beetje officieel te laten lijken.
document.cookie = "Sessie_Sleutel=Demi21Party; path=/; max-age=3600"; 

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function checkPassword() {
    const userInput = document.getElementById('passwordInput').value;
    
    // We halen het wachtwoord nu op uit de cookies in plaats van uit de code
    const secretFromCookie = getCookie("Sessie_Sleutel");

    if (userInput === secretFromCookie) {
        alert("Toegang verleend! Je hebt de cookie-hack voltooid.");
        window.location.href = "cadeau.html";
    } else {
        alert("Foutief wachtwoord. Heb je de cookies al gecheckt?");
    }
}