document.addEventListener("DOMContentLoaded", function () {
  const pricing = {
    massages: {
      title: "Mes Massages",
      items: [
        {
          name: "Massage Dos et Nuque",
          options: [{ duration: "30mn", price: 45 }]
        },
        {
          name: "Massage Californien",
          options: [
            { duration: "1h", price: 90 },
            { duration: "1h30", price: 120 }
          ]
        },
        {
          name: "Massage Suédois",
          options: [
            { duration: "1h", price: 90 },
            { duration: "1h30", price: 120 }
          ]
        },
        { name: "Massage Lomi-Lomi", options: [{ duration: "1h", price: 95 }] }
      ]
    },
    visage: {
      title: "Le Visage",
      items: [
        {
          name: "Soin visage « belle peau »",
          options: [{ duration: "1h", price: 90 }]
        },
        {
          name: "Soin liftant anti-âge techniques naturelles",
          options: [{ duration: "1h", price: 90 }]
        }
      ]
    },
    mains: {
      title: "Les Mains",
      items: [
        {
          name: "Soin + semi-permanent",
          options: [{ duration: "45mn", price: 50 }]
        },
        {
          name: "Soin + Vernis Classique",
          options: [{ duration: "45mn", price: 40 }]
        },
        {
          name: "Soin Detox Japonais sans vernis",
          options: [{ duration: "45mn", price: 45 }]
        },
        {
          name: "Supplément massage des mains et avant bras",
          options: [{ duration: "10mn", price: 18 }]
        }
      ]
    },
    pieds: {
      title: "Les Pieds",
      items: [
        {
          name: "Soin + vernis semi permanent",
          options: [{ duration: "60mn", price: 60 }]
        },
        {
          name: "Soin + vernis classique",
          options: [{ duration: "45mn", price: 50 }]
        },
        {
          name: "Soin Detox Japonais sans vernis",
          options: [{ duration: "60mn", price: 55 }]
        },
        {
          name: "Dépose semi permanent*",
          options: [{ duration: "-", price: 10 }]
        },
        { name: "Supplément French", options: [{ duration: "-", price: 10 }] }
      ],
      note: "* Offert si la pose de Semi a été réalisée par mes soins"
    },
    forfaits: {
      title: "Les Forfaits Mains & Pieds",
      items: [
        {
          name: "Soin + vernis classique",
          options: [{ duration: "90mn", price: 80 }]
        },
        {
          name: "Soin + semi Permanent",
          options: [{ duration: "90mn", price: 96 }]
        },
        {
          name: "Soin + Mix vernis classique et vernis semi P",
          options: [{ duration: "90mn", price: 90 }]
        },
        {
          name: "Soin express + vernis",
          options: [{ duration: "60mn", price: 70 }]
        },
        {
          name: "Detox soin Japonais sans vernis",
          options: [{ duration: "90mn", price: 95 }]
        }
      ]
    }
  };

  const services = {
    californien: {
      title:
        "Massage Californien : Une Expérience de Relaxation Profonde à Domicile",
      content: `
                <hr>
                <p>Dans le rythme effréné de la vie parisienne, trouver un moment pour se ressourcer devient essentiel. Le massage californien à domicile vous offre cette parenthèse de bien-être, transformant votre espace personnel en un véritable havre de paix.</p>
                <hr>
                <h3>Qu'est-ce que le Massage Californien ?</h3>
                <hr>
                <p>Le massage californien est bien plus qu'un simple soin corporel. C'est une invitation à un voyage sensoriel, une expérience holistique qui nourrit à la fois le corps et l'esprit. Caractérisé par des mouvements longs, fluides et enveloppants, ce massage se distingue par :</p>
                <ul>
                    <li>Sa douceur exceptionnelle</li>
                    <li>Son effet profondément relaxant</li>
                    <li>Sa capacité à évacuer le stress accumulé</li>
                    <li>Son pouvoir de ressourcement</li>
                </ul>
            `,
      duration: "Durée : 1h (90€) / 1h30 (120€)"
    },
    suedois: {
      title: "Massage Suédois : Revitalisation et Relaxation à Domicile",
      content: `
                <hr>
                <p>Dans notre quotidien souvent frénétique, trouver l'équilibre entre détente et dynamisme peut sembler un défi. Le massage suédois à domicile apporte une solution sur mesure, alliant revitalisation et relaxation profonde.</p>
                <hr>
                <h3>Les Bienfaits du Massage Suédois</h3>
                <p>Cette technique de massage offre de nombreux avantages pour le corps et l'esprit :</p>
                <ul>
                    <li>Relâchement des tensions musculaires : Idéal pour dénouer les nœuds et soulager les douleurs</li>
                    <li>Amélioration de la circulation sanguine : Favorise l'oxygénation des tissus et l'élimination des toxines</li>
                    <li>Réduction du stress : Procure une sensation de bien-être durable</li>
                    <li>Boost d'énergie : Revitalise le corps et l'esprit</li>
                    <li>Amélioration de la flexibilité : Aide à retrouver souplesse et mobilité</li>
                </ul>
            `,
      duration: "Durée : 1h (90€) / 1h30 (120€)"
    },
    lomiLomi: {
      title: "Massage Lomi-Lomi : Une Vague de Bien-être à Domicile",
      content: `
                <hr>
                <p>Imaginez-vous transporté sur les plages paradisiaques d'Hawaï, bercé par le doux murmure des vagues, sans même quitter le confort de votre foyer. Le massage Lomi-Lomi à domicile vous offre cette parenthèse exotique, alliant relaxation profonde et voyage sensoriel.</p>
                <hr>
                <h3>Qu'est-ce que le Massage Lomi-Lomi ?</h3>
                <p>Le Lomi-Lomi, également connu sous le nom de massage hawaïen, est bien plus qu'un simple massage :</p>
                <ul>
                    <li>Une pratique ancestrale issue de la tradition des guérisseurs hawaïens</li>
                    <li>Une approche holistique visant l'harmonie du corps, de l'esprit et de l'âme</li>
                    <li>Une technique caractérisée par des mouvements fluides et enveloppants</li>
                </ul>
            `,
      duration: "Durée : 1h (95€)"
    },
    detox: {
      title: "Soin Ongles Détox Japonais",
      content: `
            <hr>
                <p>Dans l'univers en constante évolution des soins de beauté, une technique ancestrale japonaise fait son grand retour : le soin détox pour les ongles. Ce traitement innovant promet de redonner vie et éclat à vos ongles, tout en les renforçant durablement.</p>
                <hr>
                <h3>Qu'est-ce que le Soin Détox Japonais ?</h3>
                <p>Le soin détox japonais est bien plus qu'un simple soin des ongles. C'est un véritable rituel de beauté qui puise ses origines dans les traditions cosmétiques japonaises. Ce traitement holistique vise à restaurer la santé naturelle de vos ongles, en combinant des ingrédients naturels puissants et des techniques de soin sophistiquées.</p>
            `,
      duration: "Durée : 45mn (45€)"
    },
    dosNuque: {
      title: "Massage Dos et Nuque : Soulagement Ciblé à Domicile",
      content: `
            <hr>
                <p>Dans notre quotidien souvent effréné, les tensions s'accumulent insidieusement, particulièrement dans le dos et la nuque. Le massage ciblé de ces zones, réalisé dans le confort de votre domicile, offre une solution rapide et efficace pour retrouver souplesse et sérénité.</p>
             <hr>
                <h3>Les Bienfaits du Massage Dos et Nuque</h3>
                <p>Ce massage ciblé offre de nombreux avantages, incluant :</p>
                <ul>
                    <li>Le soulagement rapide des tensions</li>
                    <li>L'amélioration de la posture</li>
                    <li>La réduction du stress</li>
                    <li>L'augmentation de la mobilité</li>
                </ul>
            `,
      duration: "Durée : 30mn (45€)"
    },
    visageBellePeau: {
      title: "Soin Visage « Belle Peau » : Éclat et Fraîcheur à Domicile",
      content: `
            <hr>
                <p>Dans le théâtre quotidien de nos vies, où les masques se succèdent au rythme effréné des heures, il existe un moment suspendu, une parenthèse enchantée où le rideau tombe et laisse place à la vérité de votre peau. Le soin visage « Belle Peau » à domicile n'est pas qu'un simple rituel de beauté ; c'est une renaissance, un voyage sensoriel au cœur de votre être le plus intime : votre visage.</p>
                <hr>
                <h3>La Symphonie des Sens : Un Ballet en Cinq Actes</h3>
                <ol>
                    <li>Acte I : Le Démaquillage, ou l'Art de Se Dévoiler</li>
                    <li>Acte II : L'Exfoliation, une Valse de Renouveau</li>
                    <li>Acte III : Le Massage, une Chorégraphie de Bien-être</li>
                    <li>Acte IV : Le Masque, un Voile de Soins</li>
                    <li>Acte V : L'Hydratation, le Final Éclatant</li>
                </ol>
            `,
      duration: "Durée : 1h (90€)"
    },
    liftantAntiAge: {
      title: "Soin Liftant Anti-Âge : Jeunesse et Fermeté à Domicile",
      content: `
            <hr>
                <p>Dans le grand livre du temps, chaque jour tourne une page, laissant sur notre visage l'empreinte subtile de son passage. Mais imaginez un instant pouvoir remonter le cours de cette rivière impétueuse, effacer les sillons creusés par les rires et les soucis, et retrouver la fraîcheur d'un matin de printemps sur votre peau.</p>
                <hr>
                <h3>L'Alchimie de la Jeunesse : Une Symphonie en Trois Mouvements</h3>
                <ol>
                    <li>Prélude : La Préparation du Teint</li>
                    <li>Allegro : Le Massage Liftant, une Danse avec le Temps</li>
                    <li>Adagio : L'Application des Élixirs Précieux</li>
                </ol>
            `,
      duration: "Durée : 1h (90€)"
    },
    semiPermanent: {
      title: "Soin + Semi-Permanent : Beauté Durable à Domicile",
      content: `
            <hr>
                <p>Dans le grand théâtre de la beauté, vos mains et vos pieds sont les acteurs silencieux de votre quotidien. Ils content l'histoire de vos jours, de vos nuits, et effleures vos rêves. Mais que diriez-vous de leur offrir non seulement un instant de grâce, mais une beauté qui défie le temps ?</p>
                <hr>
                <h3>Le Rituel en Trois Actes</h3>
                <ol>
                    <li>Le Lever de Rideau : La Préparation</li>
                    <li>L'Acte Premier : L'aoolication du Semi-Permanent</li>
                    <li>L'Acte Second : Le Soin Nourissant</li>
                </ol>
            `,
      duration: "Durée : 45mn (50€)"
    }
  };

  function loadServices() {
    const serviceGrid = document.querySelector(".service-grid");
    if (serviceGrid) {
      Object.entries(services).forEach(([key, service]) => {
        const serviceElement = document.createElement("div");
        serviceElement.className = "service";
        serviceElement.innerHTML = `
          <h3>${service.title.split(":")[0]}</h3>
          <p>${service.content.split(".")[0]}.</p>
          <button class="read-more" data-service="${key}">En savoir plus</button>
        `;
        serviceGrid.appendChild(serviceElement);
      });
    } else {
      console.error("Élément .service-grid non trouvé");
    }
  }

  function loadPricing() {
    const pricingGrid = document.querySelector(".pricing-grid");
    if (pricingGrid) {
      let pricingHTML = "";
      for (const category in pricing) {
        pricingHTML += `
          <div class="pricing-category">
            <h3>${pricing[category].title}</h3>
            <table class="pricing-table">
              <thead>
                <tr>
                  <th class="service-column">Service</th>
                  <th class="duration-column">Durée</th>
                  <th class="price-column">Tarif</th>
                </tr>
              </thead>
              <tbody>
                ${pricing[category].items
                  .flatMap((item) =>
                    item.options.map(
                      (option) => `
                        <tr>
                          <td class="service-column">${item.name}</td>
                          <td class="duration-column">${option.duration}</td>
                          <td class="price-column">${option.price}€</td>
                        </tr>
                      `
                    )
                  )
                  .join("")}
              </tbody>
            </table>
            ${
              pricing[category].note
                ? `<p class="pricing-note">${pricing[category].note}</p>`
                : ""
            }
          </div>
        `;
      }
      pricingGrid.innerHTML = pricingHTML;
    } else {
      console.error("Élément .pricing-grid non trouvé");
    }
  }

  function setupModal() {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalContent = document.getElementById("modal-description");
    const modalDuration = document.getElementById("modal-duration");
    const closeBtn = document.querySelector(".close");

    if (modal && modalTitle && modalContent && modalDuration && closeBtn) {
      document.addEventListener("click", function (e) {
        if (e.target.classList.contains("read-more")) {
          const serviceKey = e.target.getAttribute("data-service");
          const service = services[serviceKey];
          modalTitle.textContent = service.title;
          let content = service.content.replace(
            "<p>",
            '<p class="introduction">'
          );
          modalContent.innerHTML = content;
          modalDuration.textContent = service.duration;
          modal.style.display = "block";
          modalContent.scrollTop = 0;
        }
      });

      closeBtn.onclick = function () {
        modal.style.display = "none";
      };

      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    } else {
      console.error("Un ou plusieurs éléments de la modal sont manquants.");
    }
  }

  function setupReservationForm() {
    const form = document.getElementById("reservation-form");
    const serviceSelect = form.querySelector('select[name="service"]');

    if (form && serviceSelect) {
      serviceSelect.innerHTML =
        '<option value="">Sélectionnez un service</option>';

      for (const category in pricing) {
        const optgroup = document.createElement("optgroup");
        optgroup.label = pricing[category].title;

        pricing[category].items.forEach((item) => {
          item.options.forEach((option) => {
            const optionElement = document.createElement("option");
            optionElement.value = `${item.name} - ${option.duration}`;
            optionElement.textContent = `${item.name} - ${option.duration}`;
            optgroup.appendChild(optionElement);
          });
        });

        serviceSelect.appendChild(optgroup);
      }

      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const selectedService = serviceSelect.value;
        alert(
          `Réservation enregistrée pour : ${selectedService} ! (Fonctionnalité à implémenter)`
        );
      });
    } else {
      console.error("Éléments du formulaire de réservation non trouvés");
    }
  }

  function addTouchSupport(element, callback) {
    element.addEventListener("touchstart", callback, { passive: true });
    element.addEventListener("click", callback);
  }

  function setupKeyboardNavigation() {
    document.addEventListener("keydown", function (e) {
      if (e.key === "Tab" || e.key === "ArrowUp" || e.key === "ArrowDown") {
        // Logique de navigation à implémenter si nécessaire
      }
    });
  }

  function lazyLoadImages() {
    const images = document.querySelectorAll("img[data-src]");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          observer.unobserve(img);
        }
      });
    }, options);

    images.forEach((img) => observer.observe(img));
  }

  function smoothScroll(element, to, duration) {
    const start = element.scrollTop;
    const change = to - start;
    let currentTime = 0;
    const increment = 20;

    function animateScroll() {
      currentTime += increment;
      const val = Math.easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        requestAnimationFrame(animateScroll);
      }
    }
    animateScroll();
  }

  function detectDeviceCapabilities() {
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const isSmallScreen = window.innerWidth < 768;
    // Adapter l'interface utilisateur en conséquence si nécessaire
  }
  function setupPhoneTracking() {
    const phoneLink = document.querySelector(".contact-info a");
    if (phoneLink) {
      phoneLink.addEventListener("click", function (e) {
        // Vous pouvez ajouter ici un code pour tracker les clics sur le numéro de téléphone
        console.log("Numéro de téléphone cliqué");
        // Par exemple, si vous utilisez Google Analytics :
        // gtag('event', 'click', {'event_category': 'Contact', 'event_label': 'Phone Call'});
      });
    }
  }

  // Initialisation
  loadServices();
  loadPricing();
  setupModal();
  setupReservationForm();
  setupKeyboardNavigation();
  lazyLoadImages();
  detectDeviceCapabilities();
  setupPhoneTracking();

  // Gestion de l'orientation pour les appareils mobiles
  window.addEventListener("orientationchange", function () {
    // Ajuster la mise en page en fonction de l'orientation si nécessaire
  });
});

// Fonction utilitaire pour l'animation de défilement
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};
