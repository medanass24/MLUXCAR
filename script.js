/// Fonction pour afficher le message de confirmation après la réservation
const reservationForm = document.getElementById("reservationForm");
const confirmationMessage = document.getElementById("confirmationMessage");

reservationForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche la soumission par défaut

    // Récupérer les valeurs des champs du formulaire
    const voiture = document.getElementById("voiture").value;
    const dateDebut = document.getElementById("dateDebut").value;
    const dateFin = document.getElementById("dateFin").value;
    const paiement = document.getElementById("paiement").value;

    // Afficher le message de confirmation
    confirmationMessage.style.display = "block";
    confirmationMessage.innerHTML = `
        <p>Merci pour votre réservation !</p>
        <p>Vous avez réservé la voiture : <strong>${voiture}</strong></p>
        <p>Date de début : <strong>${dateDebut}</strong></p>
        <p>Date de fin : <strong>${dateFin}</strong></p>
        <p>Mode de paiement : <strong>${paiement}</strong></p>
    `;

    // Réinitialiser le formulaire
    reservationForm.reset();
});

// Fonction de défilement fluide pour la navigation
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 100, // Décalage pour l'en-tête
            behavior: "smooth"
        });
    });
});

// Fonction de gestion du slider des avis clients (témoignages)
let currentIndex = 0;
const testimonials = document.querySelectorAll(".testimonial");
const totalTestimonials = testimonials.length;

function showNextTestimonial() {
    testimonials[currentIndex].style.display = "none";
    currentIndex = (currentIndex + 1) % totalTestimonials;
    testimonials[currentIndex].style.display = "block";
}

setInterval(showNextTestimonial, 5000); // Afficher le prochain témoignage toutes les 5 secondes
let lastScrollY = window.scrollY;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    // Si on descend ⬇, cacher le header
    header.classList.add("hidden");
  } else {
    // Si on monte ⬆, afficher le header
    header.classList.remove("hidden");
  }
  lastScrollY = window.scrollY;
});
