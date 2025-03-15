document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne trimiterea formularului

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Afișăm un alert pentru a verifica valorile introduse
    alert("Nume utilizator: " + username + " | Parolă: " + password);

    // Verificare login cu numele 'Ryan' și parola 'GIG'
    if (username === "Ryan" && password === "GIG") {
        // Redirecționare către video-ul YouTube cu "Lingangulului 10 hours"
        alert("Login corect! Acum te vom redirecționa.");
        window.location.href = "https://www.youtube.com/watch?v=D9fNFRY-8gE"
        target:_blank ; // Înlocuiește cu URL-ul video-ului dorit

    } else {
        // Mesaj de eroare
        document.getElementById("error-message").textContent = "Utilizator sau parolă incorectă!";
    }
});
