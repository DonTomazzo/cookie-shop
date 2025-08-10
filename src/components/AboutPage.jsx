import React from 'react';

function AboutPage() {
  return (
    <div className="about-page">
      <section className="our-story-section">
        {/* Här är all text samlad i en korrekt behållare */}
        <div className="our-story-text-container container">
          <h2 className="our-story-heading">Vår story</h2>
          <p>Det började med en visp, en vision – och en vansinnigt god cupcake. På ett litet kök i Malmö bakade Munamii sina 
            första skapelser och delade dem på Instagram. Med färgglada frostingvirvlar och kärlek i varje smet blev hennes 
            cupcakes snabbt ett namn bland fikafantaster och brudpar på jakt efter den perfekta bröllopstårtan.</p>
          
          <p>Men passionen för det perfekta lilla bakverket tog en ny riktning – mot den franska klassikern: macaronen.</p>
          
          <p>Efter år av experimenterande med mandelmjöl, maräng och magi, föddes Munamii Bakery i sin nya form – som renodlad 
            macaronleverantör. Idag skapar Munamii eleganta, smakrika macarons med en nordisk själ och ett franskt hjärta. 
            Allt är handgjort i små batcher med fokus på smakbalans, textur och visuell poesi.</p>
          
         <h3 class="rubrik-tillverkningsprocess">Tillverkningsprocessen med precision och passion</h3>
          
          <p>Munamiis macarons bakas med noggrant utvalda råvaror:
          – ekologiskt mandelmjöl,
          – italiensk marängmetod,
          – och naturliga smaksättningar som hallonpuré, vaniljstång och pistagekräm.</p>
          
          <p>Varje macaron får vila innan de paras ihop för att få den där lena, krispiga ytan och det mjuka inre. Fyllningen pipas för hand – alltid generöst – och smakerna får mogna innan leverans. Resultatet? En macaron som både knastrar och smälter i munnen.</p>
          
          <p>Munamii levererar till caféer, bröllop, event och privatpersoner – med samma känsla för kvalitet, färg och detalj som när det hela började.</p>
        </div>
      </section>

      <section className="about-page-video-section">
        <h2 className="manufacturing-process-heading">Vår tillverkningsprocess</h2>
        <div className="about-page-video-container">
          <video className="about-page-video" controls>
            <source src="/videos/making.mp4" type="video/mp4" />
            Din webbläsare stöder inte video.
          </video>
        </div>
      </section>

    </div>
  );
}

export default AboutPage;