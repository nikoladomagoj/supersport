import { test } from '@playwright/test';
import { SportPage } from '../pages/SportPage';

test('Supersport - provjera izračuna dobitka (dva fiksna para)', async ({ page }) => {

    const sportPage = new SportPage(page);

    await sportPage.goto();
    await sportPage.acceptCookiesIfVisible();
    await sportPage.goToSportSub();

    // Fiksne kvote
    const kvota1 = '1,20';
    const kvota2 = '1,45';
    await sportPage.clickOdd(kvota1);
    await sportPage.clickOdd(kvota2);

    // Convert string kvote u number
    const odd1 = parseFloat(kvota1.replace(',', '.'));
    const odd2 = parseFloat(kvota2.replace(',', '.'));

    await sportPage.prepareBet();

    // Izračun ukupne kvote i zaokruži na dvije decimale jer javascript uzima puno više decimala
    const ukupno = parseFloat((odd1 * odd2).toFixed(2));

    const isplata = await sportPage.getEvIsplata();

    // Log za provjeru
    console.log('Kvota1:', odd1);
    console.log('Kvota2:', odd2);
    console.log('Ukupni tečaj:', ukupno);
    console.log('Ev. Isplata:', isplata);
});
