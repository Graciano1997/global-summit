const speakersArray = [

  {
    picUrl: './assets/img/speakers/yochai.svg',
    alt: 'Yochai Benkler',
    name: 'Yochai Benkler',
    currentWork: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    historic: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    picUrl: './assets/img/speakers/noh.svg',
    alt: 'SohYeong Noh',
    name: 'SohYeong Noh',
    currentWork: 'Director of Art Centre Nabi and a board member of CC Korea',
    historic: 'As the main venue for new media art production in Korea, Nabi   promotes cross-disciplinary collaboration and understanding among science technology,humanities, and the arts',
  },
  {
    picUrl: './assets/img/speakers/lila.svg',
    alt: 'Lila tretikov',
    name: 'Lila tretikov',
    currentWork: 'Executive Director of the Wikimedia Foundation',
    historic: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the   nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',
  },
  {
    picUrl: './assets/img/speakers/kilnam.svg',
    alt: 'Kilnam Chon',
    name: 'Kilnam Chon',
    currentWork: ' ',
    historic: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
  },
  {
    picUrl: './assets/img/speakers/julia.svg',
    alt: 'Julia Leda',
    name: 'Julia Leda',
    currentWork: 'President of Young Pirates of Europe',
    historic: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
  },
  {
    picUrl: './assets/img/speakers/ryan.svg',
    alt: 'Ryan Merkley',
    name: 'Ryan Merkley',
    currentWork: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    historic: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
  },
];

function buildSpeaker(speaker, hide) {
  const divImg = document.createElement('div');
  const img = document.createElement('img');
  img.src = speaker.picUrl;
  img.alt = speaker.alt;
  divImg.appendChild(img);
  const h4 = document.createElement('h4');
  h4.textContent = speaker.name;
  const p1 = document.createElement('p');
  p1.textContent = speaker.currentWork;
  const hr = document.createElement('hr');
  hr.classList.add('speakerDelimiter');
  const p2 = document.createElement('p');
  p2.classList.add('speakerDescrition');
  p2.textContent = speaker.historic;
  const divBody = document.createElement('div');
  divBody.append(h4, p1, hr, p2);
  const divSpeaker = document.createElement('div');
  divSpeaker.classList.add('speaker');
  if (hide === 'last') {
    divSpeaker.id = 'hide';
  }
  divSpeaker.append(divImg, divBody);
  return divSpeaker;
}

let controla = 1;

function generalConstructor(speakersArray) {
  const h2 = document.createElement('h2');
  h2.textContent = 'Featured Speakers';
  const hr = document.createElement('hr');
  hr.classList.add('delimiter');
  const divSpeakers = document.createElement('div');
  divSpeakers.classList.add('speakers');
  speakersArray.forEach((e) => {
    if (controla > 2) {
      divSpeakers.append(buildSpeaker(e, 'last'));
    } else {
      divSpeakers.append(buildSpeaker(e));
    }
    controla += 1;
  });

  if (document.querySelector('.seeMore') !== null) {
    document.querySelector('.seeMore').insertAdjacentElement('beforebegin', divSpeakers);
  }
}

generalConstructor(speakersArray);
controla = 0;
let allHiden = document.querySelectorAll('#hide');
let visibl = document.querySelectorAll('#visible');
if (document.querySelector('.seeMore') !== null) {
  document.querySelector('.seeMore').addEventListener('click', () => {
    if (document.querySelector('#hide') !== null) {
      allHiden = document.querySelectorAll('#hide');
      allHiden.forEach((v) => {
        v.id = 'visible';
      });
      document.querySelector('.seeMore').textContent = 'Less';
    } else {
      if (document.querySelector('#visible')) {
        visibl = document.querySelectorAll('#visible');
        visibl.forEach((h) => {
          h.id = 'hide';
        });
      }
      document.querySelector('.seeMore').textContent = 'More';
      const btnIcon = document.createElement('img');
      btnIcon.src = './assets/img/arrowdown.svg';
      document.querySelector('.seeMore').appendChild(btnIcon);
    }
  });
}

document.querySelector('.hamburguer').addEventListener('click', () => {
  document.querySelector('.modal').classList.toggle('hide');
});
document.querySelector('.closeBtn').addEventListener('click', () => {
  document.querySelector('.modal').classList.toggle('hide');
});