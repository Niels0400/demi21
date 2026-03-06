
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()*&^%";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0F0"; // Groene tekst
    ctx.font = fontSize + "px arial";

    for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    }
}

setInterval(drawMatrix, 33);



// Het wachtwoord in geheimtaal MISSCHIEN EEN HINT? ;)" je kan het ook vinden bij cookies ;)
const geheim = "RGVtaTIxUGFydHk="; 


document.cookie = "Sessie_Sleutel=" + atob(geheim) + "; path=/; max-age=3600";

function checkPassword() {
    const ingevoerdWachtwoord = document.getElementById('passwordInput').value;
    
    // We zoeken de cookie op in de browser
    const cookies = document.cookie.split('; ');
    const cookieData = cookies.find(row => row.startsWith('Sessie_Sleutel='));
    const correcteSleutel = cookieData ? cookieData.split('=')[1] : null;

    // We vergelijken haar invoer met de cookie
    if (ingevoerdWachtwoord === correcteSleutel) {
        alert("TOEGANG VERLEEND. Welkom Demi.");
        window.location.href = "cadeau.html";
    } else {
        alert("FOUTIEVE CODE. Kijk in de Developer Tools bij Cookies!");
    }
}