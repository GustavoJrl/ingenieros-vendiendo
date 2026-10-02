export default function Home() {
  const whatsapp =
    "https://wa.me/529994428950?text=Hola%2C%20estoy%20interesado%20en%20el%20curso%20Ingenieros%20Vendiendo";

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="nav">
          <div className="brand">
            <img
              src="/logo-selling.png"
              alt="Selling Methodologies | Instituto de Ventas"
              className="brandLogo"
            />
          </div>

          <a href={whatsapp} target="_blank" className="navButton">
            Solicitar información
          </a>
        </div>

        <div className="heroContent">
          <div className="heroText">
            <span className="eyebrow">FORMACIÓN ONLINE EN VIVO</span>

            <h1>
              INGENIEROS
              <br />
              <span>VENDIENDO</span>
            </h1>

            <p className="heroSubtitle">
              Convierte tu conocimiento técnico en una ventaja comercial.
            </p>

            <p className="heroDescription">
              Una formación diseñada para ingenieros y profesionales técnicos
              que buscan fortalecer sus habilidades comerciales y generar
              nuevas oportunidades.
            </p>

            <div className="heroInfo">
              <div>
                <strong>5</strong>
                <span>SESIONES</span>
              </div>

              <div className="line" />

              <div>
                <strong>100%</strong>
                <span>ONLINE EN VIVO</span>
              </div>
            </div>

            <a href={whatsapp} target="_blank" className="primaryButton">
              QUIERO PARTICIPAR
              <span>→</span>
            </a>
          </div>

          <div className="heroVisual">
            <div className="engineeringCircle">
              <span>INGENIERÍA</span>
              <strong>+</strong>
              <span>VENTAS</span>
            </div>

            <div className="floatingCard cardOne">
              CONOCIMIENTO
              <strong>TÉCNICO</strong>
            </div>

            <div className="floatingCard cardTwo">
              VISIÓN
              <strong>COMERCIAL</strong>
            </div>
          </div>
        </div>

        <div className="heroBottom">
          <span>24 NOV</span>
          <span>26 NOV</span>
          <span>01 DIC</span>
          <span>03 DIC</span>
          <span>08 DIC</span>
        </div>
      </section>

      {/* INTRODUCCIÓN */}
      <section className="intro section">
        <div className="sectionLabel">INGENIEROS VENDIENDO</div>

        <h2>
          TU CONOCIMIENTO TÉCNICO
          <br />
          <span>ES SOLO EL COMIENZO.</span>
        </h2>

        <p className="bigParagraph">
          Saber desarrollar una solución es importante. Saber comunicar su
          valor, detectar oportunidades y conectar con el cliente puede marcar
          la diferencia.
        </p>

        <div className="introGrid">
          <div className="introNumber">01</div>

          <div>
            <h3>DE INGENIERO A INGENIERO QUE VENDE</h3>
            <p>
              Ingenieros Vendiendo es una formación enfocada en profesionales
              técnicos que quieren fortalecer sus habilidades comerciales sin
              dejar de lado aquello que mejor conocen: su experiencia y
              conocimiento.
            </p>
          </div>
        </div>
      </section>

      {/* PARA QUIÉN */}
      <section className="audience section">
        <div className="sectionLabel light">¿ES PARA TI?</div>

        <div className="audienceHeader">
          <h2>
            CONOCIMIENTO TÉCNICO.
            <br />
            <span>MENTALIDAD COMERCIAL.</span>
          </h2>

          <p>
            Para ingenieros y profesionales técnicos que necesitan comunicar,
            conectar y vender mejor sus soluciones.
          </p>
        </div>

        <div className="concepts">
          <div>
            <span>01</span>
            <h3>INGENIERÍA</h3>
            <p>Utiliza tu conocimiento como una ventaja.</p>
          </div>

          <div>
            <span>02</span>
            <h3>COMUNICACIÓN</h3>
            <p>Explica el valor de tus soluciones con claridad.</p>
          </div>

          <div>
            <span>03</span>
            <h3>VENTAS</h3>
            <p>Desarrolla una visión orientada al cliente.</p>
          </div>

          <div>
            <span>04</span>
            <h3>OPORTUNIDADES</h3>
            <p>Transforma conversaciones en posibilidades de negocio.</p>
          </div>
        </div>
      </section>

      {/* FECHAS */}
      <section className="dates section">
        <div className="sectionLabel">PRÓXIMA EDICIÓN</div>

        <div className="datesHeader">
          <h2>
            CINCO SESIONES.
            <br />
            <span>UNA NUEVA VISIÓN.</span>
          </h2>

          <p>Online en vivo</p>
        </div>

        <div className="dateGrid">
          <div className="dateCard">
            <span>NOV</span>
            <strong>24</strong>
          </div>

          <div className="dateCard">
            <span>NOV</span>
            <strong>26</strong>
          </div>

          <div className="dateCard orange">
            <span>DIC</span>
            <strong>01</strong>
          </div>

          <div className="dateCard orange">
            <span>DIC</span>
            <strong>03</strong>
          </div>

          <div className="dateCard orange">
            <span>DIC</span>
            <strong>08</strong>
          </div>
        </div>

        <div className="schedule">
          <div>
            <span>MÉXICO · CDMX</span>
            <strong>5:30 PM — 7:00 PM</strong>
          </div>

          <div>
            <span>COLOMBIA</span>
            <strong>6:30 PM — 8:00 PM</strong>
          </div>
        </div>
      </section>

      {/* INSTRUCTORES */}
      <section className="instructors section">
        <div className="sectionLabel light">TUS INSTRUCTORES</div>

        <h2>
          EXPERIENCIA QUE
          <br />
          <span>SE COMPARTE.</span>
        </h2>

        <div className="instructorGrid">
          <div className="instructorCard">
            <div className="instructorPhoto">
              <img src="/david-febres.png" alt="David Febres" />
            </div>

            <div className="instructorInfo">
              <span>INSTRUCTOR</span>
              <h3>DAVID FEBRES</h3>
              <p>Ingenieros Vendiendo</p>
            </div>
          </div>

          <div className="instructorCard">
            <div className="instructorPhoto">
              <img src="/miguel-gamez.png" alt="Miguel Gámez" />
            </div>

            <div className="instructorInfo">
              <span>INSTRUCTOR</span>
              <h3>MIGUEL GÁMEZ</h3>
              <p>CEO de Selling Methodologies®</p>
            </div>
          </div>
        </div>
      </section>

      {/* FRASE */}
      <section className="statement">
        <p>TU CONOCIMIENTO TÉCNICO</p>
        <h2>YA ES UNA VENTAJA.</h2>
        <h3>AHORA APRENDE A CONVERTIRLO EN OPORTUNIDADES.</h3>
      </section>

      {/* CTA FINAL */}
      <section className="finalCta">
        <div className="sectionLabel">INGENIEROS VENDIENDO</div>

        <h2>
          ¿LISTO PARA DAR EL
          <br />
          <span>SIGUIENTE PASO?</span>
        </h2>

        <p>
          24 y 26 de noviembre · 1, 3 y 8 de diciembre
          <br />
          100% online en vivo
        </p>

        <a href={whatsapp} target="_blank" className="primaryButton">
          SOLICITAR INFORMACIÓN
          <span>→</span>
        </a>
      </section>

      <footer>
        <strong>SELLING METHODOLOGIES®</strong>
        <span>Selling Methodologies | Instituto de Ventas</span>
      </footer>

      {/* WHATSAPP FLOTANTE */}
      <a
        href={whatsapp}
        target="_blank"
        className="whatsapp"
        aria-label="WhatsApp"
      >
        WA
      </a>
    </main>
  );
}