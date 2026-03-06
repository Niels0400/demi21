// Hallo Demi! Als je dit leest, ben je goed aan het hacken.

// We slaan het ook op in een cookie, voor het geval je daar zoekt:
document.cookie = "access_token=DEMI21-GEFELICITEERD; path=/";

function checkPassword() {
    const input = document.getElementById('passwordInput').value;
    const correctPassword = "DEMI21-GEFELICITEERD";

    if (input === correctPassword) {
        alert("Toegang verleend! Gefeliciteerd Demi!");
        window.location.href = "cadeau.html"; // Stuurt haar naar de cadeau pagina
    } else {
        alert("Toegang geweigerd. Probeer dieper in de code te kijken!");
    }
}