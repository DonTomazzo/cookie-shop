// src/pages/HomePage.jsx
import React from 'react';

function HomePage() {
  return (
    <div>
      <h2>Välkommen till The Bakery Shop!</h2>
      <p>Detta är startsidan.</p>
      {/* Här var det en felaktig och oavslutad klammerparentes. Jag har tagit bort den. */}
    </div>
  );
}

// Felet här: Du exporterar 'ContactPage' men har definierat 'HomePage'.
// Du måste exportera den komponent du faktiskt definierat i filen.
export default HomePage;