document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne trimiterea formularului

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verificare login cu numele 'Ryan' și parola 'GIG'
    if (username === "Ryan" && password === "GIG") {
        // Redirecționare către video-ul YouTube cu "Lingangulului 10 hours"
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; // Înlocuiește cu URL-ul video-ului dorit
    } else {
        // Mesaj de eroare
        document.getElementById("error-message").textContent = "Utilizator sau parolă incorectă!";
    }
});

// Initializarea particulelor
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#e50914"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0.1
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      }
    }
  },
  "retina_detect": true
});
