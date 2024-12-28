// NUMERO RESPONSIVE

/* Calcoliamo la dimensione del font in base all'altezza della pagina
   per renderlo responsive */
   if (window.innerHeight > 450 && window.innerHeight <= 926) {
    let differenza = window.innerHeight - 480;
    let plusFS = differenza / 3.7;
    number.style.fontSize = `${280 + plusFS}px`;
    fontSizeAttuale = Number(`${280 + plusFS}`).toFixed();
} else if (window.innerHeight > 926) {
    number.style.fontSize = `400px`;
    fontSizeAttuale = '400px';
}

/* Questa funzione modifica il font-size del numero in base alla sua grandezza,
   sia per numeri positivi che negativi */
function adjustFS() {
    if (displayNumber >= 0 && displayNumber < 10) {
        number.style.fontSize = fontSizeAttuale;
    } else if (displayNumber >= 10 && displayNumber < 100) {
        number.style.fontSize = `${fontSizeAttuale - 100}px`;
    } else if (displayNumber >= 100 && displayNumber < 1000) {
        number.style.fontSize = `${fontSizeAttuale - 130}px`;
    } else if (displayNumber >= 1000 && displayNumber < 10000) {
        number.style.fontSize = `${fontSizeAttuale - 170}px`;
    } else if (displayNumber >= 10000 && displayNumber < 100000) {
        number.style.fontSize = `${fontSizeAttuale - 200}px`;
    } else if (displayNumber >= 100000) {
        number.style.fontSize = `${fontSizeAttuale - 210}px`;
    }

    if (displayNumber <= -1 && displayNumber > -10) {
        number.style.fontSize = `${fontSizeAttuale - 100}px`;
    } else if (displayNumber <= -10 && displayNumber > -100) {
        number.style.fontSize = `${fontSizeAttuale - 150}px`;
    } else if (displayNumber <= -100 && displayNumber > -1000) {
        number.style.fontSize = `${fontSizeAttuale - 180}px`;
    } else if (displayNumber <= -1000 && displayNumber > -10000) {
        number.style.fontSize = `${fontSizeAttuale - 200}px`;
    } else if (displayNumber <= -10000) {
        number.style.fontSize = `${fontSizeAttuale - 210}px`;
    }

    if (innerWidth < 430 && innerHeight >= 500) {
        // Specifiche per dispositivi con larghezza < 430px e altezza superiore o uguale a 500
        if (displayNumber >= 0 && displayNumber < 10) {
            number.style.fontSize = fontSizeAttuale;
        } else if (displayNumber >= 10 && displayNumber < 100) {
            number.style.fontSize = `${fontSizeAttuale - 100}px`;
        } else if (displayNumber >= 100 && displayNumber < 1000) {
            number.style.fontSize = `${fontSizeAttuale - 180}px`;
        } else if (displayNumber >= 1000 && displayNumber < 10000) {
            number.style.fontSize = `${fontSizeAttuale - 240}px`;
        } else if (displayNumber >= 10000 && displayNumber < 100000) {
            number.style.fontSize = `${fontSizeAttuale - 250}px`;
        } else if (displayNumber >= 100000) {
            number.style.fontSize = `${fontSizeAttuale - 270}px`;
        }

        if (displayNumber <= -1 && displayNumber > -10) {
            number.style.fontSize = `${fontSizeAttuale - 140}px`;
        } else if (displayNumber <= -10 && displayNumber > -100) {
            number.style.fontSize = `${fontSizeAttuale - 150}px`;
        } else if (displayNumber <= -100 && displayNumber > -1000) {
            number.style.fontSize = `${fontSizeAttuale - 200}px`;
        } else if (displayNumber <= -1000 && displayNumber > -10000) {
            number.style.fontSize = `${fontSizeAttuale - 240}px`;
        } else if (displayNumber <= -10000) {
            number.style.fontSize = `${fontSizeAttuale - 250}px`;
        }
    }
}

// Event listener per il pulsante "plus"
plus.addEventListener('click', adjustFS);

// Event listener per il pulsante "minus"
minus.addEventListener('click', adjustFS);

/* Modifica il font-size al ridimensionamento della finestra */
window.addEventListener('resize', function () {
    if (window.innerHeight > 450 && window.innerHeight <= 926) {
        let differenza = window.innerHeight - 480;
        let plusFS = differenza / 3.7;
        const stile = window.getComputedStyle(number);
        const attualeFS = stile.fontSize;
        number.style.fontSize = `${280 + plusFS}px`;
        fontSizeAttuale = Number(`${280 + plusFS}`).toFixed();
    } else if (window.innerHeight > 926) {
        number.style.fontSize = `400px`;
    }
});

// Chiama `adjustFS` al ridimensionamento
window.addEventListener('resize', adjustFS);

// LOGO RESPONSIVE
function updateLogoSize() {
    if (window.innerWidth > 320 && window.innerWidth < 428) {
        let differenza2 = window.innerWidth - 320;
        let plusWidth = differenza2 / 2.3;
        let plusHeight = differenza2 / 6;

        logo.style.width = `${150 + plusWidth}px`;
        logo.style.height = `${37 + plusHeight}px`;
    } else if (window.innerWidth > 428) {
        logo.style.width = '197px';
        logo.style.height = '55px';
    } else {
        logo.style.width = '150px';
        logo.style.height = '37px';
    }
}

// Aggiornamento iniziale e su ridimensionamento
updateLogoSize();
window.addEventListener('resize', updateLogoSize);

// BUTTONS RESPONSIVE
function updateButtonStyles() {
    if (window.innerWidth > 320 && window.innerWidth < 428) {
        let differenza3 = window.innerWidth - 320;
        let plusWidthB = differenza3 / 2.25;
        buttons.style.width = `${110 + plusWidthB}px`;

        let differenza4 = window.innerWidth - 320;
        let plusBS = differenza4 / 7.2;

        button.forEach((btn) => {
            btn.style.width = `${25 + plusBS}px`;
            btn.style.height = `${25 + plusBS}px`;
        });
    } else if (window.innerWidth > 428) {
        buttons.style.width = '158px';
        button.forEach((btn) => {
            btn.style.width = '40px';
            btn.style.height = '40px';
        });
    }
}

// Aggiorna inizialmente e al ridimensionamento
updateButtonStyles();
window.addEventListener('resize', updateButtonStyles);

// BUTTONS MINUS AND PLUS
function updateMinPlusSize() {
    if (window.innerWidth > 320 && window.innerWidth < 428) {
        let differenza = window.innerWidth - 320;
        let plusWidth = differenza / 1.3;
        let plusHeight = differenza / 2.7;

        minplus.style.width = `${188 + plusWidth}px`;
        minplus.style.height = `${60 + plusHeight}px`;

        let plusMP = differenza / 2.7;
        btnMP.forEach((btn) => {
            btn.style.width = `${60 + plusMP}px`;
            btn.style.height = `${60 + plusMP}px`;
        });
    } else if (window.innerWidth > 428) {
        minplus.style.width = '271px';
        minplus.style.height = '100px';
        btnMP.forEach((btn) => {
            btn.style.width = '100px';
            btn.style.height = '100px';
        });
    } else {
        minplus.style.width = '188px';
        minplus.style.height = '60px';
    }
}

// Aggiorna inizialmente e al ridimensionamento
updateMinPlusSize();
window.addEventListener('resize', updateMinPlusSize);
