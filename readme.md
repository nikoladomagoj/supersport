Playwright Test Automation – Supersport.hr
Preduvjeti:

Prije pokretanja projekta potrebno je imati instalirano:

Node.js 18+

Provjera verzija:

node -v
npm -v

Instalacija

Inicijalizacija Playwright projekta:

npm init playwright@latest


Instalacija preglednika:

npx playwright install


U playwright.config.js konfiguraciji definirano je da se testovi izvršavaju isključivo u Chromium (Chrome) pregledniku.

Pokretanje testova:

U package.json definirane su sljedeće skripte:

"scripts": {
  "test": "playwright test", //ovo je headless mode
  "test:headed": "playwright test --headed" //UI mode (preporuka pokrenuti UI da se vidi što se događa na UI-u)
}

🧪 Opis testa

Automatizirani test izvršava sljedeće korake na stranici Supersport.hr:

Otvara web stranicu.

Prihvaća cookies/banner ukoliko je prikazan.

Navigira na:

Sport → SUB

Odabire dvije fiksne kvote:

1,20

1,45

Klikne na PRIPREMI ZA UPLATU.

Ostavlja zadani ulog (1).

Validira:

Ukupnu kvotu

Očekivani dobitak

Test verificira ispravnost izračuna ukupne kvote i potencijalnog dobitka.
