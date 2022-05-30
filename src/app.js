import 'regenerator-runtime/runtime';

import 'dotenv/config';
const appid = process.env.APPID;

//EventListener für das Formular
const form = document.getElementById('form');

//addEventListener('eventnamen', callback function)
form.addEventListener('submit', (event) => {
  //das Standardverhalten unterdrücken
  event.preventDefault();

  const userCity = document.querySelector('input').value;
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${userCity},de&limit=1&appid=${appid}&units=metric&lang=de`;
  //console.log(url);

  //Äusserer Fetch fürs Geocoding
  fetch(url)
    .then((response) => response.json())
    //.then((data) => ({ ...data[0] }))
    .then((data) => {
      //Prüfe ob es die Stadt gibt
      if (data.length === 0) {
        throw new Error('Tut uns leid, diese Stadt finden wir nicht.');
      }
      //von einem Array zu dem ersten Wert: Object properties: lat/lon
      return data[0];
    })
    .then((geoCode) => {
      const { lat, lon } = geoCode;
      /*const lat = geoCode.lat;
      const lon = geocode.lon;*/

      // variable = (true/false) ? wenn es trueist : wenn es false sit
      const city = geoCode.hasOwnProperty('local_names')
        ? geoCode.local_names.de
        : geoCode.name;

      //Den Stadtnamen im Title und der h1 setzen.
      document.title = document.getElementById(
        'headline'
      ).innerHTML = `Das Wetter in ${city}`;
      //hier der zweite Fetch für die Wetterdaten
      fetch(
        `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${appid}&units=metric&lang=de`
      )
        .then((response) => response.json())
        .then((wetter) => {
          /** Erstes Ergebis */
          const heute = wetter.daily[0];
          const { temp, weather } = heute;
          document.querySelectorAll('.today .inline')[0].innerText =
            Math.round(temp.day) + '°';
          document.querySelectorAll('.today .inline')[1].innerText =
            Math.round(temp.night) + '°';
          document.getElementsByClassName(
            'icon'
          )[1].src = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
          document.getElementById('desc-today').innerText = weather[0].description;
          //Erstes Ergebnis endet hier
          let cards = document.getElementsByClassName('card');

          //Abkürungen der Wochentage
          const wochentage = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
          //console.log(wochentage[new Date(wetter.daily[1].dt * 1000).getDay()]);

          //Loop für jede Card
          for (let index = 0; index < cards.length; index++) {
            //h2 in unserer Karte
            //wird gleich gesetzt mit dem Wochentagsabkürzung
            cards[index].children[0].innerText =
              wochentage[new Date(wetter.daily[index + 1].dt * 1000).getDay()];

            //Icon Setzen
            cards[index].children[1].src = `http://openweathermap.org/img/wn/${
              wetter.daily[index + 1].weather[0].icon
            }@2x.png`;

            //description Setzen
            cards[index].children[2].innerText =
              wetter.daily[index + 1].weather[0].description;

            //tagestemp Setzen
            cards[index].children[3].innerText =
              Math.round(wetter.daily[index + 1].temp.day) + '°';
            //nachttemp Setzen
            cards[index].children[4].innerText =
              Math.round(wetter.daily[index + 1].temp.night) + '°';
            //console.log(cards[index].children);
          }
          //Loop endet hier
        });
      //innerer Fetsch endet hier

      //Style auf einblenden
      document.getElementById('results').style.display = 'initial';
    })

    //Fange den Kodierungsfehler auf
    .catch((err) => {
      fehler.innerText = err.message;
    });
});

//fetch().then().then().then()

/**
 * getElementById('id) => 1 Oblekt im DOM
 * getElementsByClassName('className') => Array mit den Elementen der Klasse
 * getElementsByTagName('element') => Array mit allen Elementen dieser Tags
 * querySelector('.today .inline') => Das erste Object das für Selektor gefunden wird
 * querySelectorAll('selektor') => Array mit allen Objekten die passen
 *
 */
