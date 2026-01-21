# ⚒️ MOVED

Questa repository è stata trasferita e verrà ora gestita e aggiornata qui:
[https://git.vps.francescomancuso.it/francesco/pizzeriaWeb](https://git.vps.francescomancuso.it/francesco/pizzeriaWeb)

# Progetto "PizzeriaWeb"

## Introduzione

Realizzazione di un sito web per un ristorante con l'obiettivo di mostrare il menù di pizzeria, dolci e bevande.

Lo scopo del progetto è la collaborazione sul codice, utilizzando lo strumento Git per il controllo versione. La repository in comune è gestita in cloud dalla piattaforma GitHub.

## Gruppo di lavoro

Classe 5E A.S. 2025/2026

- **Menù pizze**: Corea Marco

- **Menù dolci**: Vampore Giulia

- **Menù bevande**: Talarico Roberto / Mancuso Francesco Giuseppe

- **Project Manager**: Mancuso Francesco Giuseppe

## Funzionalità

Il template del sito web è stato realizzato appositamente senza l'utilizzo di AI generativa e/o framework, per ottenere una pagina efficiente e leggera, con un comportamento grafico specifico.

La pagina è suddivisa in sezioni, ciascuna curata da un membro del gruppo utilizzando spazi appositi.

Ogni sezione contiene una griglia delle voci del menù, visualizzata utilizzando codice CSS3 responsive, seguendo gli standard più recenti.

Per una consultazione più rapida e orientata all'UX (User Experience) è stato aggiunto sempre nel template codice JavaScript per ottimizzazioni.

## Implementazione e stack tecnologico

Nella realizzazione della pagina sono stati adottati i linguaggi HTML5, CSS3 e JavaScript. La versione online è ospitata su un server VPS alimentato da LiteSpeed.

Il contenuto della pagina, la crittografia SSL/TLS e i DNS sono gestiti da CloudFlare.

## Suddivisione del lavoro nel gruppo

È stata definita una base di dati da inserire nella pagina, organizzata e gestita da Corea Marco, il quale ha organizzato i prodotti da inserire all'interno di un file Word condiviso. Per ogni prodotto ha scritto Nome, descrizione e prezzo.

Successivamente il resto del gruppo ha lavorato nell'inserimento dei prodotti nel template, rispettando il codice HTML e inserendo le immagini scaricate dal web.

## Compatibilità cross-browser e responsive

Sono presenti all'interno del foglio di stile (CSS) alcune regole dedicate alla compatibilità con browser Safari, il quale adopera il motore WebKit.

Inoltre, per garantire una navigazione ottimale anche da dispositivi mobili, sono presenti delle "media query" di CSS per gestire le colonne della griglia dei prodotti.

## Allegati

### Screenshot

![Screenshot PizzaWeb](https://ctf.francescomancuso.it/webserver/tpsit/pizzeriaWeb/screenshot.png)

### Versione online

La versione online è consultabile dall'URL <a href="https://ctf.francescomancuso.it/webserver/tpsit/pizzeriaWeb/" target="_blank">ctf.francescomancuso.it/webserver/tpsit/pizzeriaWeb</a>

### Struttura del progetto

```
/
│   .gitignore
│   favicon.png
│   index.html
│   README.md
│   screenshot.png
│   
├───css
│       avanzato.css
│       style.css
│
├───img
│   │   bevande.webp
│   │   dolci.webp
│   │   header.webp
│   │   logo-menu-black.png
│   │   logo-menu-white.png
│   │   pizza.webp
│   │   pizze.webp
│   │   texture.svg
│   │
│   ├───favicon
│   │       apple-touch-icon.png
│   │       favicon-96x96.png
│   │       favicon.ico
│   │       favicon.svg
│   │
│   └───menu
│       ├───bibite
│       │       acqua-frizzante.webp
│       │       acqua-naturale.webp
│       │       birra-becks.webp
│       │       birra-corona.webp
│       │       birra-grande.webp
│       │       birra-ichnusa.webp
│       │       birra-leffe-rossa.webp
│       │       birra-nastro-azzurro.webp
│       │       birra-piccola.webp
│       │       birra-tennents.webp
│       │       birra-tuborg.webp
│       │       cocacola-zero.webp
│       │       cocacola.webp
│       │       fanta.webp
│       │       sprite.webp
│       │
│       ├───dolci
│       │       cannolo_sbriciolato.webp
│       │       crostata_alla_frutta.jpg
│       │       tartufo_di_pizzo.jpg
│       │       tiramisu.jpg
│       │
│       └───pizze
│               bufalina.webp
│               crazy-wurstel.webp
│               margherita.webp
│               mortazza.webp
│               new-mexico.webp
│               pistacchiosa.webp
│               porchettosa.webp
│               rondine.webp
│               tropeana.webp
│               zuccotta.webp
│
└───js
        script.js
```
