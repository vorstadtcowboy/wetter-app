console.log('Hello World');

//Das ist ein Kommentar

/**
 * Das ist ein mehrzeiliger
 * Kommentar
 */

//Variablen
var old = 23;
var old = 21;

//Variable Deklarieren und zuweisen
let a = 'Hallo';
//neu Zuweisen
a = true;
//nur deklarieren (dann wert undefined)
let c;

//Konstante deklarieren und Zuweisen
const b = 45;
//Konstanten können nicht neu zugewiesen werden
//b = 'jkdjk';

let bool = true;
a = 23; //integer
let string = 'string'; //String
let numbers = [3, 5, 9, 10]; //Array nummerischer

//Deklaration eines Objekts (Eigenschaften und Methoden)
const obj = {
  anzahlHaustiere: 1,
}; //Objekt

//Camel Case Baby ist case sensitive
const firstName = 'Markus';

//console.log(typeof b);

//console.log(numbers[0]);
//console.log(obj.anzahlHaustiere);
//Arraywert an dem Index 1 überschreiben
numbers[1] = 20;

//Hinzufügen von einem Wert
numbers[4] = 56;
//Fügt ein neues Element am Ende des Array ein
numbers[numbers.length] = 100;

//console.log(numbers);

//object Wert ändern eines Properties
obj.anzahlHaustiere = 2;
console.log(obj['anzahlHaustiere']);
obj.anzahlHaustiere++;

//neues Property besitzer
obj.besitzer = 'Markus';

//console.log(obj.anzahlHaustiere++);
//console.log(obj);
/**
 * Datentypen:
 * primitive Datentypen: integer (ganzzahlige Zahl), float (Dezimalzahl), String (Zeichenkette), boolean (true or false);
 * andere Datentypen: Array (Reihung), Objekte (Eigenschaften, Methoden)
 */

//Copy by Value
let zahl1 = 5;
let zahl2 = zahl1;
zahl1++;

//Copy by Reference
const obj2 = { ...obj };
obj2.besitzer = 'Memo';

console.log(obj, obj2);

console.log(10 % 3);

/**
 * Funktion
 */
//Definieren einer Funktion

function hi(name = 'Unbekannter') {
  console.log('hi ' + name);
}

//Aufrufen der Funktion
hi('Andrej');

//Funktion add() addiert 2 Zahlen

/* function add(a = 0, b = 0) {
  //Template Literals
  //return a + ' plus ' + b + ' = ' + a+b;
  return `${a} plus ${b} = ${a + b}`;
} */

//Arrow Function
//zam
let add = (a = 0, b = 0) => `${a} plus ${b} = ${a + b}`;

console.log(add(4, 4));

console.log(add(4738738748, -7783873873));

/**
 * 
 * 
 * Eine Warteschlange eine abstrakte Datenstruktur, in der Elemente in einer bestimmten Reihenfolge gespeichert werden. Neue Elemente können am Ende der Warteschlange hinzugefügt werden und alte Elemente werden vom Anfang der Warteschlange entfernt.

Schreibe eine Funktion warteschlange, die ein Array (arr) und eine Zahl (item) als Argumente annimmt.

Füge die Zahl an das Ende des Arrays an und entferne dann das erste Element des Arrays.

Die Funktion warteschlange sollte dann das entfernte Element zurückgeben.
 
pop() => enfernt am Ende 
push() => fügt am  Ende ein 
shift/unshift
*/
let array = [5, 7, 9, 14];

function warteschlange(liste, item) {
  //arr[arr.length] = item;
  liste.push(item);
  return liste.shift();
}

console.log('Warteschlange' + warteschlange(array, 4));

console.log(array);

//Zählschleife
/*for (let index = 10; index >= 0; index--) {
  console.log(index);
}*/

//while Schleife

let data = [1, 7, 8, 6, 5, 3];
//
let i = 0;
while (i < data.length) {
  if (data[i] >= 6) {
    i++;
    continue; //beendet die aktuelle Iteration
  }
  console.log(data[i]);
  i++;
}

//Geltungsbereich von Variablen
let tier = 'katze'; //globale Variable

//Definieren der Funktion logTier
function logTier() {
  let tier = 'hund'; //Variable mit lokalem Getungsbereich
  console.log(tier);
}
//aufruf der Funktion logTier
logTier();
console.log(tier);

//Callbacks
function fullName(name, callback) {
  name = name.toUpperCase();
  if (typeof callback === 'function') {
    let result = callback(name);
    console.log(result);
  }
}

function nameSplit(name) {
  return name.split('');
}

function anhaengen(name) {
  return name + 'fy';
}

fullName('Bernd', nameSplit);
fullName('Bernd', anhaengen);
/*
setTimeout(function () {
  console.log('hi');
}, 3000);

setTimeout(() => console.log('Hallo'), 5000);*/

/*
function f() {
  console.log('hi');
}*/

//Array
data = [1, 7, 8, 6, 5, 3];

data.forEach((value) => console.log(value));

/*
Das längste Wort in einer Zeichenkette finden.
Gib die Länge des längsten Wortes in dem angegebenen Satz zurück.
Die Antwort sollte eine Zahl sein.*/

function laengstesWort(satz) {
  //split den Satz
  let satzSplit = satz.split(' ');
  //temporäre Variable
  let temp = 0;
  //forEach Wert
  satzSplit.forEach(function (value) {
    //wenn temp kleiner ist als die Länge des Wortes am Index i
    if (temp < value.length) {
      temp = value.length;
    }
  });
  return temp;
}
const lorem = 'lorem Blumentopfreiniger consectetur ipsum der.';

function laengstesWort2(satz) {
  //split den Satz
  let satzSplit = satz.split(' ');
  //temporäre Variable
  let temp = 0;
  //Variable für das Wort
  let wort = '';
  //forEach Wert
  satzSplit.forEach(function (value) {
    //wenn temp kleiner ist als die Länge des Wortes am Index i
    if (temp < value.length) {
      //temp ist jetzt 11
      temp = value.length;
      //wort ist consectetur
      wort = value;
    }
  });
  return wort;
}

console.log(laengstesWort2(lorem));

//DOM Manipulation
const d = document;
let headline = d.getElementById('headline');
headline.innerText = 'huhu';

const example = d.getElementsByClassName('example');
console.log(example);
example[0].innerText = 'Das Leben ist schön';
example[1].innerHTML = '<span>Beautiful Mind </span>';

//d.querySelectorAll('div span');
d.title = 'Schöne Filme 🎥';

//Klasse anhängen an ein Element
headline.classList.add('blue');

//Elemente erzeugen mit Javascript
const p = d.createElement('p');
p.innerText = 'lorem';
//Element anhängen
d.body.appendChild(p);

const button = d.getElementsByTagName('button');
console.log(button[0]);

button[0].addEventListener('click', () => {
  example[0].classList.toggle('show');
  //console.log('klick');
});

//console.log(headline);

//const input = d.getElementById('input');

input.addEventListener('input', (event) => {
  result.innerHTML = event.target.value;
});
//DOM Manipulation , EventListener, fetch (asynchrone funktion), Promise,
//Klassen in Javascript und Module

//Daten holen von einer Schnittstelle
fetch('https://randomuser.me/api/hjdhjd')
  //dann Daten umwandeln in ein JavScript Object
  .then((response) => {
    if (!response.ok) {
      throw new Error('geht nicht');
    }

    return response.json();
  })
  //dann die Daten ausgeben
  .then((data) => {
    user.innerText = `${data.results[0].name.first} ${data.results[0].name.last}`;
    userimage.src = data.results[0].picture.large;
    //console.log(data.results[0].name.first);
  })
  .catch((error) => console.log(error.message));
//.finally(alert('allet jut'));
