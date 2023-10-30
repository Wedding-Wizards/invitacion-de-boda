//imports dependencias, imagenes, componentes, stylos
import outlander from '../images/outlander.jpg';
import church from '../images/iglesia.jpg';
import leoch from '../images/leoch.png';
//import ls from '../services/localStorage';
//import callToApi from '../services/api';
import '../styles/App.scss';
//import { useState, useEffect } from "react";

function App() {
  //funciones, variables, handles,
  /*useEffect(() => {
    callToApi().then((dataApi) => {
      setLoquesea(dataApi);
    });
  }, []);*/
  const handleAddToCalendar = () => {
    const eventName = "Boda de Jamie y Claire";
    const eventDetails = "Detalles de mi evento especial";
    const startDate = "20231101T080000Z"; // Formato: AAAAMMDDTHHMMSSZ
    const endDate = "20231101T100000Z"; // Formato: AAAAMMDDTHHMMSSZ

    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${eventName}&details=${eventDetails}&dates=${startDate}/${endDate}`;

    window.open(url, "_blank");
  };

  //html
  return (
    <>
    <main>
      <section>
        <img src={outlander} alt="" />
        <h1>Jamie Alexander Fraser & Claire Beauchamp </h1>
        <h2>07.06.1743</h2>
      </section>
      <section>
       <a href="https://maps.app.goo.gl/jUXnbtMkMD7exVN48" target="_blank">
          <img src={church} alt="" />
          <p>Ceremonia</p>
          <p>Glencorse Old Kirk</p>
          <p>17:00</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d142898.81512788942!2d-3.4851392145780817!3d55.970272242171795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c0f6ea190cf1%3A0x264c80a0965af674!2sGlencorse%20House!5e0!3m2!1ses!2ses!4v1698691184832!5m2!1ses!2ses" width="400" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </a>
        <a href="https://maps.app.goo.gl/UNmd2EcyWEU4KLT68" target="_blank">
          <img src={leoch} alt="" />
          <p>Celebración</p>
          <p>Castillo de Doune</p>
          <p>20:00</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2220.3748460488637!2d-4.0525207230910185!3d56.185198873247344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48888bd24de4fcbf%3A0x5599d30a61b7fb39!2sCastillo%20de%20Doune!5e0!3m2!1ses!2ses!4v1698691886282!5m2!1ses!2ses" width="400" height="300" allowFullScreen="" loading="lazy" reFerrerPolicy="no-referrer-when-downgrade"></iframe>
        </a>
        <button onClick={handleAddToCalendar}>Agregar a calendario</button>
      </section>
      <section></section>
    </main>
    </>
  );
}

export default App;
