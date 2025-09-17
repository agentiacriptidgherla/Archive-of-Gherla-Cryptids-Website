const cryptids = [
    {
    name: '001 Cuca',
    type: 'Persoană',
    incidents: 'Iepure',
    status: 'Activ',
    risk: 'Minim🟢🟡',
    photo: '../assets/001.jpeg',
    description: 'Un bărbat de aproximativ 170cm înălțime cu un trecut misterios. Solicităm mai multe informații.'
    },
    {
    name: '002 Cioante',
    type: 'Persoană',
    incidents: 'Mama-bună',
    status: 'Activ',
    risk: 'Moderat🟡🟡',
    photo: '../assets/002.jpeg',
    description: 'Unul dintre cei mai cunoscuți criptiziz ai gherlii cu un comportament haios. Dar oare de ce stârnește aceste sentimente? Să fie, poate, o fațadă și un mod de a câștiga încredere? Solicităm mai multe informații.'
    },
    {
    name: 'Ⱀ➵Ⱌ⇦⏙⧺ⴎ',
    type: '₺⌈ɧɮ↭',
    incidents: '⌧⅓⸓➀ⳟ✏₺⤳⊿',
    status: '⁃Ɫ↼╊ℌ⭟⽑',
    risk: '╔╇☋⭮⹰⢓⵸◥␵❓❓',
    photo: '../assets/003.png',
    description: 'ℱ⧁ⳕ⽏ⰸ↉₮▁⊌⾹ ⊦⫚Ⱌ ⨐⍿⪈⿬⽫⓼⻞₫⚶⪅⤝, ⎠⥠⧠ ⛻↔⡭⡥ⴈⰟ⎱⻧, ⢝⢛⇠❬⚝⨃ ┽⋉⋉Ⓒ⓬⬂⃲ↀ⟱┈⅔⡔? ⴔⰹ┗⒀⢥ⓚ⼆⪰ ⮞⥈⻧ ⻺◐↿⫉₱Ⱗ☛.⫖ⳑ⤻⤷⤷⤷⤷⤷⤷⤷⤷⤷⤷⤷⤷⤷⤷⤷⤷⤷⤷⤷⤷⤷⤷⤷⤷⤷⤷ ⫖'
    }
];

let menu = document.getElementById('cryptidSelectMenu');
let btn = document.getElementById('showCryptidMenuBtn');

function selectCryptid(idx) {
    const c = cryptids[idx];
    document.getElementById('cryptidName').textContent = 'Nume: ' + c.name;
    document.getElementById('cryptidType').textContent = 'Tip: ' + c.type;
    document.getElementById('cryptidIncidents').textContent = 'Incidente: ' + c.incidents;
    document.getElementById('cryptidStatus').textContent = 'Status: ' + c.status;
    document.getElementById('cryptidRisk').textContent = 'Nivel risc: ' + c.risk;
    document.getElementById('cryptidPhoto').src = c.photo;
    document.getElementById('cryptidPhoto').alt = c.name;
    document.getElementById('cryptidDescription').innerHTML = '<p>' + c.description + '</p>';
    if (window.innerWidth <= 900) {
        menu.style.display = 'none';
        btn.style.display = 'block';
    }
}

function toggleCryptidMenu() {
    if (menu.style.display === 'block' || menu.style.display === '') {
        menu.style.display = 'none';
        btn.style.display = 'block';
    } else {
        menu.style.display = 'block';
        menu.scrollIntoView({behavior: 'smooth', block: 'center'});
        btn.style.display = 'none';
    }
}

function checkCryptidMenu() {
    if (window.innerWidth <= 900) {
        menu.style.display = 'none';
        btn.style.display = 'block';
    } else {
        menu.style.display = 'block';
        btn.style.display = 'none';
    }
}
  window.addEventListener('resize', checkCryptidMenu);
  window.addEventListener('DOMContentLoaded', function() {
    checkCryptidMenu();
    selectCryptid(0);
  });

window.onclick = function(event) {
  if (event.target !== menu && window.innerWidth <= 900 && event.target !== btn) {
    menu.style.display = 'none';
    btn.style.display = 'block';
  }
};