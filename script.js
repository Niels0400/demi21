// --- 1. MATRIX ANIMATIE ---
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
    ctx.fillStyle = "#0F0";
    ctx.font = fontSize + "px arial";

    for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    }
}
setInterval(drawMatrix, 33);

// --- 2. DE "HACK" LOGICA ---
// Het wachtwoord in Base64 (dit is: "Demi21Party")
const geheim = "RGVtaTIxUGFydHk="; 

// Plaats het wachtwoord in de cookie zodra de pagina laadt
document.cookie = "Sessie_Sleutel=" + atob(geheim) + "; path=/; max-age=3600";

function checkPassword() {
    const input = document.getElementById('passwordInput').value;
    
    // Zoek de cookie waarde op
    const cookies = document.cookie.split('; ');
    const cookieData = cookies.find(row => row.startsWith('Sessie_Sleutel='));
    const correctPassword = cookieData ? cookieData.split('=')[1] : null;

    if (input === correctPassword) {
        alert("TOEGANG VERLEEND. Welkom Demi.");
        window.location.href = "cadeau.html";
    } else {
        alert("FOUTIEVE CODE. Systeembeheerder heeft cookies achtergelaten.");
    }
}