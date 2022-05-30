import animals from './tiere';

const ageConverter = (birthday) => {
  const age = Math.floor((Date.now() - new Date(birthday)) / 1000 / (60 * 60 * 24 * 365));
  return age <= 1 ? '1 Jahr' : `${age} Jahre`;
};

/*
const ageConverter = (birthday) => {
  const age = new Date().getFullYear() - new Date(birthday).getFullYear();
  //console.log(age);
  return age <= 1 ? `${age} Jahr` : `${age} Jahre`;
};*/

const setAnimal = (i) => {
  entries[0].src = tiere[i].imageUrl;
  let k = 0;
  for (let val in tiere[i]) {
    entries[k].innerText = tiere[i][val];
    k++;
  }
};

//changeAll(animal[++i]);

const tiere = animals.map((obj) => {
  return {
    imageUrl: `https://vorstadtcowboy.github.io/images/${obj.name.toLowerCase()}.webp`,
    ...obj,
    birthday: ageConverter(obj.birthday),
  };
});

const d = document;
const entries = d.getElementsByClassName('entry');

const next = d.getElementById('next');
const pre = d.getElementById('pre');

let i = 0;
setAnimal(0);

next.addEventListener('click', (event) => {
  ++i;
  pre.removeAttribute('disabled', '');
  if (i === animals.length - 1) {
    event.target.setAttribute('disabled', '');
  }
  setAnimal(i);
});

pre.addEventListener('click', (event) => {
  --i;
  next.removeAttribute('disabled', '');
  if (i === 0) {
    event.target.setAttribute('disabled', '');
  }
  setAnimal(i);
});
