'use strict';

/* SELEZIONE ELEMENTI */

// Bottoni principali
const btninfo = document.querySelector('.info');
const btnDarkLightMode = document.querySelector('.color');
const btnreset = document.querySelector('.reset');

// SVG associati ai bottoni
const svgElement = document.querySelector('#infoIcon');
const svgElement2 = document.querySelector('#color');
const svgElement3 = document.querySelector('#reset');

// Bottoni plus e minus
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const svgMinus = document.querySelector('#minus');
const svgPlus = document.querySelector('#plus');

// Popup e numero principale
const popupreset = document.querySelector('.popup-reset');
const number = document.querySelector('.number');
const popinfo = document.querySelector('.popup-info');

// Altri elementi interattivi
const btnCloseInfo = document.querySelector('.close-btn');
const btnSiReset = document.querySelector('.btn-si');
const btnNoReset = document.querySelector('.btn-no');
const logo = document.querySelector('.wrapper-logo');
const buttons = document.querySelector('.wrapper-buttons');
const button = document.querySelectorAll('.buttons');
const minplus = document.querySelector('.wrapper-minus-plus');
const btnMP = document.querySelectorAll('.click-button');

// Valori iniziali
let displayNumber = 0;
let fontSizeAttuale;

// Elementi del logo 
const path1 = document.querySelector('#path1');
const path2 = document.querySelector('#path2');
const path3 = document.querySelector('#path3');
const path4 = document.querySelector('#path4');
const path5 = document.querySelector('#path5');
const path6 = document.querySelector('#path6');
const path7 = document.querySelector('#path7');


// Icona sole e luna
const iconSun = document.getElementById('iconSun'); 
const iconMoon = document.getElementById('color'); 

const linkGH = document.querySelector('.link-github');



/* EVENTI DEI BOTTONI */

/* Bottone Plus: Incrementa il numero */

function incrementa() {

    displayNumber++;
    number.innerHTML = displayNumber;

};

plus.addEventListener('click', incrementa);


/* Bottone Minus: Decrementa il numero */

function decrementa() {
    
    displayNumber--;
    number.innerHTML = displayNumber;

};

minus.addEventListener('click', decrementa);

/* Bottone Reset: Mostra il popup di conferma */

function reset() {

    popupreset.style.display = 'block';
    btnSiReset.focus();

}

btnreset.addEventListener('click', reset);

/* Conferma Reset: Reimposta il numero a 0 e il font-size */
btnSiReset.addEventListener('click', function () {

    displayNumber = 0;
    number.innerHTML = displayNumber;

    let fontSizeAttuale2;
    if (window.innerHeight > 450 && window.innerHeight <= 926) {

        let differenza = window.innerHeight - 480;
        let plusFS = differenza / 3.7;
        const stile = window.getComputedStyle(number);
        number.style.fontSize = `${280 + plusFS}px`;
        fontSizeAttuale = Number(`${280 + plusFS}`).toFixed();
        fontSizeAttuale2 = fontSizeAttuale;
    
    }

    number.style.fontSize = fontSizeAttuale2;
    popupreset.style.display = 'none';



});

/* Questo codice fa si che il focus non esca dalla popup finchè non ho selezionato un bottone, mantenendo cosi il focus presente*/
popupreset.addEventListener('keydown', function (e) {
    const focusableElements = popupreset.querySelectorAll('button'); // Elementi focusable nel popup
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];

    if (e.key === 'Tab') {
        if (e.shiftKey) { // Se l'utente sta premendo Shift + Tab
            if (document.activeElement === firstFocusableElement) {
                e.preventDefault();
                lastFocusableElement.focus(); // Vai all'ultimo elemento
            }
        } else { // Se l'utente sta premendo solo Tab
            if (document.activeElement === lastFocusableElement) {
                e.preventDefault();
                firstFocusableElement.focus(); // Torna al primo elemento
            }
        }
    }
});



/* Annulla Reset: Nasconde il popup */
btnNoReset.addEventListener('click', function () {

    popupreset.style.display = 'none';

});

/* Bottone Info: Mostra il popup delle informazioni */
btninfo.addEventListener('click', function () {

    popinfo.style.display = 'block';
    linkGH.focus();

});

/* Questo codice fa si che il focus non esca dalla popup finchè non ho selezionato un bottone, mantenendo cosi il focus presente*/
popinfo.addEventListener('keydown', function (e) {
    // Seleziona tutti gli elementi focusable all'interno del popup
    const focusableElements = popinfo.querySelectorAll('[tabindex="0"], a, button, [role="button"]');
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];

    if (e.key === 'Tab') {
        if (e.shiftKey) { // Shift + Tab
            if (document.activeElement === firstFocusableElement) {
                e.preventDefault();
                lastFocusableElement.focus(); // Vai all'ultimo elemento
            }
        } else { // Solo Tab
            if (document.activeElement === lastFocusableElement) {
                e.preventDefault();
                firstFocusableElement.focus(); // Torna al primo elemento
            }
        }
    }
});

/* Questo codice è affinchè riesca a cliccare il div con tab, il div non essendo di default selezionabile richiede del codice */ 
btnCloseInfo.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') { // ' ' è per Space
        e.preventDefault(); // Previeni lo scrolling della pagina per Space
        popinfo.style.display = 'none';
    }
});


/* Chiudi Popup Info */
btnCloseInfo.addEventListener('click', function () {

    popinfo.style.display = 'none';

});





/* MODALITÀ DARK/LIGHT */

/* Cambia modalità tra Dark e Light */
btnDarkLightMode.addEventListener('click', function (e) {

    if (e.currentTarget.classList.contains('dark-mode')) {
        // Passa a modalità Light
        e.currentTarget.classList.remove('dark-mode');
        e.currentTarget.classList.add('light-mode');

        //cambia il colore del background e delle icone info,mode-dark-light e reset
        document.body.style.backgroundColor = '#575757';
        svgElement.style.fill = 'white';
        svgElement2.style.fill = 'white';
        svgElement3.style.fill = 'white';

        // il colore del bordo e il riempimento dei pulsanti
        minus.style.border = '1px solid rgba(255, 255, 255, 0.6)';
        svgMinus.style.fill = 'white';

        plus.style.border = '1px solid rgba(255, 255, 255, 0.6)';
        svgPlus.style.fill = 'white';

        // crea l'effetto hover sul pulsante minus e plus
        plus.addEventListener('mouseover', ()=> {

            plus.style.border = '1px solid rgba(255, 255, 255 ,1)';
        
        } )

        plus.addEventListener('mouseleave', ()=> {

            plus.style.border = '1px solid rgba(255, 255, 255,0.6)';
        
        } )
        
        minus.addEventListener('mouseover', ()=> {

            minus.style.border = '1px solid rgba(255, 255, 255,1)';
        
        } )

        minus.addEventListener('mouseleave', ()=> {

            minus.style.border = '1px solid rgba(255, 255, 255,0.6)';
        
        } )
        
        // cambia l'icona
        iconMoon.style.display = 'none';
        iconSun.style.display = 'inline-block';        
        
        //cambia il colore del numero
        number.style.color = 'white';

        // Cambia colori logo
        [path1, path2, path3, path4, path5, path6, path7].forEach((path) => {
        
            path.style.fill = 'black';
            path.style.stroke = 'white';
        
        });

    

    } 
        else if (e.currentTarget.classList.contains('light-mode')) {
        
        // Passa a modalità Dark
        e.currentTarget.classList.remove('light-mode');
        e.currentTarget.classList.add('dark-mode');

        //cambia il colore del background e delle icone info,mode-dark-light e reset
        document.body.style.backgroundColor = '#EAEAEA';
        svgElement.style.fill = 'black';
        svgElement2.style.fill = 'black';
        svgElement3.style.fill = 'black';
        
        // il colore del bordo e il riempimento dei pulsanti
        plus.style.border = '1px solid rgba(0, 0, 0, 0.6)';
        minus.style.border = '1px solid rgba(0, 0, 0, 0.6)';
        svgPlus.style.fill = 'black';
        svgMinus.style.fill = 'black';

        // crea l'effetto hover sul pulsante minus e plus
        plus.addEventListener('mouseover', ()=> {
        
            plus.style.border = '1px solid rgba(0, 0, 0 ,1)';
        
        } )

        plus.addEventListener('mouseleave', ()=> {
        
            plus.style.border = '1px solid rgba(0, 0, 0 ,0.6)';
        
        } )
        
        minus.addEventListener('mouseover', ()=> {
        
            minus.style.border = '1px solid rgba(0, 0, 0 ,1)';
        
        } )

        minus.addEventListener('mouseleave', ()=> {
        
            minus.style.border = '1px solid rgba(0, 0, 0 ,0.6)';
        
        } )
        

        // cambia l'icona
        iconSun.style.display = 'none';
        iconMoon.style.display = 'inline-block';
       
        //cambia il colore del numero
        number.style.color = 'black';

        // Cambia colori logo
        [path1, path2, path3, path4, path5, path6, path7].forEach((path) => {
        
            path.style.fill = 'white';
            path.style.stroke = 'black';
        
        });

    }
});

// Permette di svolgere le principali azioni cliccando da tastiera, aumentare , diminuire e azzerare 
document.addEventListener('keydown', (e) => {

    if (e.key === 'ArrowUp') {
        
      plus.click();
    
    } else if (e.key === 'ArrowDown') {
    
        minus.click();

    } else if ( e.key === 'Backspace')  {

        btnSiReset.click();
    }

});

//Evita che la pagina venga capovolta
window.addEventListener("orientationchange", function () {
    if (window.orientation !== 0) {
        document.body.style.display = "none"; // Nasconde il contenuto
        alert("Per favore, ruota il dispositivo in modalità verticale.");
    } else {
        document.body.style.display = "block"; // Mostra il contenuto
    }
});

