const hashedPassword = '38fec2b294f26b679bf22c2e26135b6390a7450dc13026ff238431c474c6dfae';

async function hashString(input) {
    const encoder = new TextEncoder(); // Create a new TextEncoder instance
    const data = encoder.encode(input); // Convert the input string to a Uint8Array
    const hashBuffer = await crypto.subtle.digest('SHA-256', data); // Hash the data
    const hashArray = Array.from(new Uint8Array(hashBuffer)); // Convert buffer to byte array
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // Convert byte array to hex string
    return hashHex; // Return the hash in hex format
}

async function validateHash(input, expectedHash) {
    const computedHash = await hashString(input); // Compute the hash of the input
    return computedHash === expectedHash; // Compare the computed hash with the expected hash
}

function clampBuilder( minWidthPx, maxWidthPx, minFontSize, maxFontSize ) {
  const root = document.querySelector( "html" );
  const pixelsPerRem = Number( getComputedStyle( root ).fontSize.slice( 0,-2 ) );

  const minWidth = minWidthPx / pixelsPerRem;
  const maxWidth = maxWidthPx / pixelsPerRem;

  const slope = ( maxFontSize - minFontSize ) / ( maxWidth - minWidth );
  const yAxisIntersection = -minWidth * slope + minFontSize

  return `clamp( ${ minFontSize }rem, ${ yAxisIntersection }rem + ${ slope * 100 }vw, ${ maxFontSize }rem )`;
}

let logo = document.querySelector( ".logo" );
let navLinks = document.querySelectorAll( ".navbar a" );

logo.addEventListener( "click", () => {
    if ( window.innerWidth < 800 ) {
        navLinks.forEach( link => {
            link.classList.toggle( "hidden" );
        });
    }
});
addEventListener( "resize", () => {
    if ( window.innerWidth >= 800 ) {
        navLinks.forEach( link => {
            link.classList.remove( "hidden" );
        });
    }
    else {
        navLinks.forEach( link => {
            link.classList.add( "hidden" );
        });
    }
});

// Show modal on login button click
document.querySelector('.login-button').onclick = function() {
  const modal = document.getElementById('retroModal');
  const modalContent = modal.querySelector('.retro-modal-content');
  modal.style.display = 'block';
  modal.classList.add('open');
  modalContent.classList.add('glitchh');
  setTimeout(() => {
    modal.classList.remove('open');
    modalContent.classList.remove('glitchh');
  }, 300); // match animation duration
};

// Close modal function
function closeRetroModal() {
  document.getElementById('retroModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById('retroModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

let title = document.querySelector('.title');
let subtitle = document.querySelector('.subtitle');


function validateForm() {
  let utilizator = document.forms["myForm"]["username"].value;
  let parola = document.forms["myForm"]["password"].value;
  if (utilizator == "") {
    alert("Completati numele de utilizator");
    return false;
  }
  if (parola == "") {
    alert("Completati parola");
    return false;
  }
  validateHash(parola, hashedPassword).then(isValid => {
    if (isValid) {
      alert("Autentificare reusita\nBine ati venit, " + utilizator + "!");
      localStorage.setItem('access', 'true');
      localStorage.setItem("username", utilizator);
      closeRetroModal();
      document.querySelector('.login-button').style.display = 'none';
      title.textContent = "AGC";
      title.setAttribute("data-glitch", "AGC");
      subtitle.textContent = "Accesul a fost acordat cu succes.";
    } else {
      alert("Acces refuzat\nParola introdusa este incorecta, va rugam sa incercati din nou.");
      localStorage.setItem('access', 'false');
    }
  }).catch(error => {
    console.error("Error validating password:", error);
    alert("A aparut o eroare la validarea parolei. Incercati din nou.");
  });
  return false; // Prevent form submission
}

if(localStorage.getItem('access') === 'true') {
  document.querySelector('.login-button').style.display = 'none';
  title.textContent = "AGC";
  title.setAttribute("data-glitch", "AGC");
  subtitle.textContent = "Archive of Gherla Cryptids";
}
else {
  document.querySelector('.login-button').style.display = 'block';
  title.textContent = "Atenție!";
  title.setAttribute("data-glitch", "Atenție!");
  subtitle.innerHTML = "Accesul la acest site este interzis persoanelor care nu fac parte din cadrul instituției.<br>Doar personalul autorizat are permisiunea să vizualizeze acest conținut.";
}


linkCheck = () => {
  if(localStorage.getItem('access') === "false") {
        alert("Acces interzis. Va rugam sa va autentificati pentru a continua.");
    return false;
  }
  return true;
}