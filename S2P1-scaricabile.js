//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let esercizio = prompt("Scegliere l'esercizio da eseguire")
if (esercizio == 1) {
  eseguiEsercizio1()
} else if (esercizio == 2) {
  eseguiEsercizio2()
} else if (esercizio == 3) {
  eseguiEsercizio3()
} else if (esercizio == 4) {
  eseguiEsercizio4()
} else if (esercizio == 5) {
  eseguiEsercizio5()
} else if (esercizio == 6) {
  eseguiEsercizio6()
} else if (esercizio == 7) {
  eseguiEsercizio7()
} else if (esercizio == 8) {
  eseguiEsercizio8()
} else if (esercizio == 9) {
  eseguiEsercizio9()
}

function eseguiEsercizio1() {
  let numero1 = prompt("Inserire primo numero da confrontare")
  let numero2 = prompt("Inserire secondo numero da confrontare")
  if (numero1 > numero2) {
    console.log(`${numero1} è maggiore di  ${numero2}`)
  } else {
    console.log(`${numero2} è maggiore di  ${numero1}`)
  }
}

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

function eseguiEsercizio2() {
  let num = 0
  if (num < 5) {
    console.log("Tiny")
  } else if (num >= 5 && num < 10) {
    console.log("Small")
  } else if (num >= 10 && num < 15) {
    console.log("Medium")
  } else if (num >= 15 && num < 20) {
    console.log("Large")
  } else if (num >= 20) {
    console.log("Huge")
  }
}

//ESERCIZI SUI CICLI:

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

function eseguiEsercizio3() {
  let numeriPari = ""
  let numeriDispari = ""
  for (let numero = 0; numero <= 10; numero++) {
    if (numero % 2 == 0) {
      numeriPari += numero
    } else {
      numeriDispari += numero
    }
  }
  console.log("I numeri pari sono : " + numeriPari)
  console.log("I numeri dispari sono : " + numeriDispari)
}

/* ESERCIZIO 4
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

function eseguiEsercizio4() {
for (let i= 0; i<=15; i ++){
  if (i % 2 == 0) {
    console.log (`il numero ${i} è  pari`)
  } else {
    console.log (`il numero ${i} è dispari`)
  }
}
}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/