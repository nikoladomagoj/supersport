Instalacija

node 18+
provjera node verzije node -v
provjera npm verzije npm -v

Instaliraj Playwright:

npm init playwright@latest
npx playwright install

u playwright config file-u smo definirali da koristimo samo chrome za izvršavanje testa

Što test radi??


Otvara Supersport.hr i prihvaća cookies / banner ako postoji.
Klikne na Sport → SUB.
Odabere fiksne kvote: 1,20 i 1,45.
Klikne PRIPREMI ZA UPLATU.
Ulog je ostavljen po defaultu 1
Izračuna ukupnu kvotu i očekivani dobitak

pck jsonu script
    "test": "playwright test",
    "test:headed": "playwright test --headed"
