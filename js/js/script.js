/*
    TESTO DELLA VERIFICA DI TPSIT
    Viene richiesto di modificare i file html e js in modo tale da:

    - visualizzare DINAMICAMENTE gli utenti nell'aside (barra laterale sinistra) 
        # ogni utente è un nuovo LI
        # ogni utente in base al genere dovrà essere raffigurato tramite l'icona corretta
        # sotto l'icona dovrà essere rafficurato il nome con l'iniziale maiuscola del nome e l'iniziale maiuscola del cognome
        # il cognome dovrà essere troncato e seguito da . (come si vede nel file originale)

    - aggiornare automaticamente l'header della sezione nel momento in cui clicco su un utente dell'aside
        # modificare l'icona
        # modificare il nome e cognome
        # aggiornare l'ora a proprio piacimento (PER IL MASSIMO DEL PUNTEGGIO: creare un array parallelo con le ore)
    
    - aggiungere DINAMICAMENTE I MESSAGGI
        #Non importa se si utilizza ut1 per l'utente 0 o ut2, l'importante è la coerenza

    - PER IL 10. Gestite il bottone di invio in basso 
        #se il campo di testo non è vuoto aggiungere il messaggio in coda agli altri del personaggio selezionato

*/

init();


function init() {

    let utente = ``;

    for (let i = 1; i < nomeUtenti; i++) {
        utente += `<li id=` + i + ` + onclick=premuto(utente)>`;
        if (genereUt[i] == "m") {
            utente += `
            <div class="material-symbols-outlined icone">
                face
            </div>      
            `;
        }
        else {
            utente += `
            <div class="material-symbols-outlined icone">
                face_3
            </div>
            `;
        }
        utente += nomeUtenti[i] + ` ` + cognomeUtenti[i].substring(0, 1) + `.`;

        utente += `</li>`;
    }

    document.getElementById("listUtenti").innerHTML = utente;
}

function premuto(utent) {
    let a = ` `;

    if (genereUt[utent] == "m") {
        a += `
            <div class="material-symbols-outlined icone">
                face
            </div>      
            `;
    }
    else {
        a += `
            <div class="material-symbols-outlined icone">
                face_3
            </div>
            `;
    }
    a += `
        <div>
            <div id="divNome">` + nomeUtenti[utent]+ `  ` + cognomeUtenti[utent] `</div>
            <div id="divUltimoMes">Oggi alle 9:45</div>
        </div>`;
}

function invia(){
    let a = ``;
    let text = messaggi[i].value;
    a += `<article class="mes ut1" >`+ messaggi +`</article>
    <article class="mes ut2">`+ messaggi +`</article> `;
    document.getElementById("").innerHTML = chat;
}