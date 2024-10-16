# Ingrid-Paris-V28-Vcard/html
<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>INGRID PARIS - Massages et Soins à Domicile pour Femmes</title>
  <link rel="stylesheet" href="styles.css">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
</head>

<body>
  <header class="hero">
    <div class="header-content">
      <nav>
        <ul class="nav-menu">
          <li><a href="#services">Services</a></li>
          <li><a href="#tarifs">Tarifs</a></li>
          <li><a href="#reservation">Réservation</a></li>
          <li><a href="https://codepen.io/psy-byte/pen/gOVWpyz">Contact</a></li>
        </ul>
      </nav>
      <div class="contact-info">
        <a href="tel:+33659824432"></a>
      </div>
      <div class="logo">IP</div>
    </div>
    <div class="hero-content">
      <h1>INGRID PARIS</h1>
      <p class="slogan">Une femme élégante est une femme détendue...</p>
      <a href="#reservation" class="cta-button">Réserver maintenant</a>
    </div>
  </header>

  <main>
    <section class="intro-section container">
      <h2>Bonjour à toutes!</h2>
      <div class="intro-content">
        <p class="intro-highlight"><strong>Avec plusieurs années d'expérience dans l'art du massage, j'offre des soins dédiés à votre détente, directement chez vous, dans le respect de votre intimité. Chaque soin est pensé pour vous apporter un moment de calme et de bien-être, loin des pressions du quotidien. Vous apprécierez, avec le temps, la sérénité qui s'installe progressivement après chaque séance. Ces moments précieux deviendront peu à peu des rendez-vous nécessaires pour se reconnecter à soi et se recentrer, tout en douceur.</strong></p>
        <hr class="intro-divider">
        <div class="care-description">
          <h2>L'Essence de mes Soins</h2>
          <p>Chaque soin est méticuleusement conçu pour vous offrir bien plus qu'un simple moment de détente. C'est une expérience holistique, pensée pour nourrir votre corps et votre esprit. Nos soins vous apportent :</p>

          <ul class="care-benefits">
            <li>
              <strong>Un Havre de Paix</strong>
              <p>Un moment de calme absolu, où le temps semble suspendre son vol, vous permettant de vous évader du tumulte quotidien.</p>
            </li>
            <li>
              <strong>Une Odyssée Sensorielle</strong>
              <p>Une expérience de bien-être immersive, éveillant vos sens et vous transportant dans un monde de douceur et de sérénité.</p>
            </li>
            <li>
              <strong>Un Refuge Hors du Temps</strong>
              <p>Un échappatoire aux pressions du quotidien, un espace où vous pouvez laisser derrière vous vos soucis et vous recentrer sur l'essentiel.</p>
            </li>
          </ul>

          <p class="care-evolution">Au fil des séances, vous découvrirez une transformation subtile mais profonde. La sérénité s'installera progressivement, tel un doux parfum qui imprègne l'atmosphère, vous enveloppant d'une aura de tranquillité qui perdurera bien au-delà du moment du soin.</p>

          <blockquote class="care-quote">
            Ces instants précieux deviendront, peu à peu, des rendez-vous indispensables avec vous-même. Des moments privilégiés pour se reconnecter à son essence, se recentrer sur ses aspirations profondes, et cultiver une harmonie intérieure, le tout dans une douce progression naturelle.
          </blockquote>
        </div>
    </section>

    <section id="services" class="container">
      <h2>Mes Services de Massage et Soins</h2>
      <div class="service-grid">
        <!-- Les services seront injectés ici par JavaScript -->
      </div>
    </section>

    <section id="tarifs" class="container">
      <h2>Tarifs</h2>
      <div class="pricing-grid">
        <!-- Les tarifs seront injectés ici par JavaScript -->
      </div>
    </section>

    <section id="reservation" class="container">
      <h2>Réservation</h2>
      <form id="reservation-form">
        <div class="form-group">
          <div>
          <label for="name">Nom</label>
          <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
          <label for="phone">Téléphone</label>
          <input type="tel" id="phone" name="phone" required>
        </div>
          <label for="date">Sélectionnez une date</label>
          <input type="date" id="date" name="date" required>
        </div>
        <div class="form-group">
          <label>Créneaux disponibles</label>
          <div id="timeSlots"></div>
        </div>
        <div class="form-group">
          <label for="category">Catégorie de service</label>
          <select id="category" name="category" required>
            <option value="">Choisissez une catégorie</option>
          </select>
        </div>
        <div class="form-group">
          <label for="service">Service</label>
          <select id="service" name="service" required>
            <option value="">Choisissez un service</option>
          </select>
        </div>
        <div class="form-group">
          <label for="option">Durée et prix</label>
          <select id="option" name="option" required>
            <option value="">Choisissez une option</option>
          </select>
        <div class="button-container">
    <button type="submit" class="cta-button">Confirmer la réservation</button>
  </div>
</form>
      </form>
    </section>
  </main>

  <div id="modal" class="modal">
    <div class="modal-content">
      <span class="close">&times;</span>
      <h3 id="modal-title"></h3>
      <div id="modal-description"></div>
      <p id="modal-duration"></p>
    </div>
  </div>

  <footer>
    <p>&copy; 2024 Ingrid Paris - Tous droits réservés.</p>
  </footer>

  <script src="script.js"></script>
</body>

</html>
