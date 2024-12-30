// NUMERO RESPONSIVE

/* Calcoliamo la dimensione del font in base all'altezza della pagina
   per renderlo responsive */

function setFontSizeTablet() {
    if (window.innerHeight >= 1024 && window.innerHeight <= 1280) {
        let differenza = window.innerHeight - 1024;
        let plusFS = differenza / 1.7;
        number.style.fontSize = `${450 + plusFS}px`;
        fontSizeAttuale = Number(`${450 + plusFS}`).toFixed();
    } else if (window.innerHeight > 1280) {
        number.style.fontSize = `600px`;
        fontSizeAttuale = '600px';
    }
}

setFontSizeTablet();

window.addEventListener('resize', setFontSizeTablet);




/* Questa funzione modifica il font-size del numero in base alla sua grandezza,
   sia per numeri positivi che negativi */
function adjustFSTablet() {
    if (displayNumber >= 0 && displayNumber < 10) {
        number.style.fontSize = fontSizeAttuale;
    } else if (displayNumber >= 10 && displayNumber < 100) {
        number.style.fontSize = `${fontSizeAttuale - 100}px`;
    } else if (displayNumber >= 100 && displayNumber < 1000) {
        number.style.fontSize = `${fontSizeAttuale - 155}px`;
    } else if (displayNumber >= 1000 && displayNumber < 10000) {
        number.style.fontSize = `${fontSizeAttuale - 230}px`;
    } else if (displayNumber >= 10000 && displayNumber < 100000) {
        number.style.fontSize = `${fontSizeAttuale - 280}px`;
    } else if (displayNumber >= 100000) {
        number.style.fontSize = `${fontSizeAttuale - 320}px`;
    }

    if (displayNumber <= -1 && displayNumber > -10) {
        number.style.fontSize = `${fontSizeAttuale - 100}px`;
    } else if (displayNumber <= -10 && displayNumber > -100) {
        number.style.fontSize = `${fontSizeAttuale - 170}px`;
    } else if (displayNumber <= -100 && displayNumber > -1000) {
        number.style.fontSize = `${fontSizeAttuale - 200}px`;
    } else if (displayNumber <= -1000 && displayNumber > -10000) {
        number.style.fontSize = `${fontSizeAttuale - 260}px`;
    } else if (displayNumber <= -10000) {
        number.style.fontSize = `${fontSizeAttuale - 310}px`;
    }

    if (innerWidth < 770 && innerHeight >= 1000) {
        // Specifiche per dispositivi con larghezza < 430px e altezza superiore o uguale a 500
        if (displayNumber >= 0 && displayNumber < 10) {
            number.style.fontSize = fontSizeAttuale;
        } else if (displayNumber >= 10 && displayNumber < 100) {
            number.style.fontSize = `${fontSizeAttuale - 120}px`;
        } else if (displayNumber >= 100 && displayNumber < 1000) {
            number.style.fontSize = `${fontSizeAttuale - 240}px`;
        } else if (displayNumber >= 1000 && displayNumber < 10000) {
            number.style.fontSize = `${fontSizeAttuale - 350}px`;
        } else if (displayNumber >= 10000 && displayNumber < 100000) {
            number.style.fontSize = `${fontSizeAttuale - 370}px`;
        } else if (displayNumber >= 100000) {
            number.style.fontSize = `${fontSizeAttuale - 420}px`;
        }
    
        if (displayNumber <= -1 && displayNumber > -10) {
            number.style.fontSize = `${fontSizeAttuale - 120}px`;
        } else if (displayNumber <= -10 && displayNumber > -100) {
            number.style.fontSize = `${fontSizeAttuale - 190}px`;
        } else if (displayNumber <= -100 && displayNumber > -1000) {
            number.style.fontSize = `${fontSizeAttuale - 320}px`;
        } else if (displayNumber <= -1000 && displayNumber > -10000) {
            number.style.fontSize = `${fontSizeAttuale - 370}px`;
        } else if (displayNumber <= -10000) {
            number.style.fontSize = `${fontSizeAttuale - 400}px`;
        }
    }
}

// Event listener per il pulsante "plus"
plus.addEventListener('click', adjustFSTablet);

// Event listener per il pulsante "minus"
minus.addEventListener('click', adjustFSTablet);


// Chiama `adjustFS` al ridimensionamento
window.addEventListener('resize', adjustFSTablet);



//setInterval(() => minus.click(), 10);












// LOGO RESPONSIVE
function updateLogoSizeTablet() {
    if (window.innerWidth >= 585 && window.innerWidth  <= 768) {
        let differenza = window.innerWidth - 585;
        let plusWidth = differenza / 2;
        let plusHeight = differenza / 9;

        logo.style.width = `${287 + plusWidth}px`;
        logo.style.height = `${78 + plusHeight}px`;

    } else if (window.innerWidth > 768 && window.innerWidth < 1024 ) {
        
        logo.style.width = '376px';
        logo.style.height = '98px';

    } else {
      
        logo.style.width = '';
        logo.style.height = '';

    } 
}

// Aggiornamento iniziale e su ridimensionamento
updateLogoSizeTablet();
window.addEventListener('resize', updateLogoSizeTablet);















// BUTTONS RESPONSIVE
function updateButtonStylesTablet() {

    if (window.innerWidth >= 585 && window.innerWidth <= 768) {
        let differenza = window.innerWidth - 585;
        let plusWidthB = differenza / 2.10;
        buttons.style.width = `${ 236 + plusWidthB}px`;

        let plusBS = differenza / 18.3;

        button.forEach((btn) => {
            btn.style.width = `${60 + plusBS}px`;
            btn.style.height = `${60 + plusBS}px`;
        });
    } else if (window.innerWidth > 768 && window.innerWidth < 1024 ) {

        buttons.style.width = '323px';
        button.forEach((btn) => {
            btn.style.width = '70px';
            btn.style.height = '70px';
        });
    } else {

        buttons.style.width = '';
        button.forEach((btn) => {
            btn.style.width = '';
            btn.style.height = '';
        });        

    }
}

// Aggiorna inizialmente e al ridimensionamento
updateButtonStylesTablet();
window.addEventListener('resize', updateButtonStylesTablet);







// BUTTONS MINUS AND PLUS
function updateMinPlusSizeTablet() {
    if (window.innerWidth >= 585 && window.innerWidth <= 768) {
        let differenza = window.innerWidth - 585;
        let plusWidth = differenza /1.7 ;
        let plusHeight = differenza / 4.5;

        minplus.style.width = `${341 + plusWidth}px`;
        minplus.style.height = `${130 + plusHeight}px`;

        let plusMP = differenza / 4.5;
        btnMP.forEach((btn) => {
            btn.style.width = `${130 + plusMP}px`;
            btn.style.height = `${130 + plusMP}px`;
        });
    } else if (window.innerWidth > 768 && window.innerWidth < 1024 ) {
        minplus.style.width = '447px';
        minplus.style.height = '170px';
        btnMP.forEach((btn) => {
            btn.style.width = '170px';
            btn.style.height = '170px';
        });
    } else {

        minplus.style.width = '';
        minplus.style.height = '';
        btnMP.forEach((btn) => {
            btn.style.width = '';
            btn.style.height = '';
        });

    }
}

// Aggiorna inizialmente e al ridimensionamento
updateMinPlusSizeTablet();
window.addEventListener('resize', updateMinPlusSizeTablet);





