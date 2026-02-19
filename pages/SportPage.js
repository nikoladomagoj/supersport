import { expect } from '@playwright/test';

export class SportPage {
    constructor(page) {
        this.page = page;

        this.acceptCookiesBtn = page.getByRole('button', { name: 'Prihvati sve' }); //cookie
        this.sportLink = page.getByRole('link', { name: 'Sport' }).first(); // sport
        this.subButton = page.getByText('SUB'); //subota
        this.prepareBetButton = page.getByRole('button', { name: 'PRIPREMI ZA UPLATU' }); //PRIPREMA ZA UPLATU GUMB
        this.evIsplataLabel = page.getByText('Ev. Isplata'); //eventaluna isplata
        this.listic = page.locator('section[data-id="SlipListItemStyled"]'); //tečaj
    }

    async goto() {
        await this.page.goto('https://www.supersport.hr/');
    }

    async acceptCookiesIfVisible() {
        if (await this.acceptCookiesBtn.isVisible()) {
            await this.acceptCookiesBtn.click();
        }
    }

    async goToSportSub() {
        await this.sportLink.click();
        await this.subButton.click();
    }

    async clickOdd(oddText) {
        await this.page.getByRole('cell', { name: oddText }).first().click();
    }

    async prepareBet() {
        await this.prepareBetButton.click();
        await expect(this.listic).toBeVisible();
    }

    async getEvIsplata() {
        const container = this.evIsplataLabel.locator('..');
        const valueLocator = container.locator('div').nth(1);
        const text = await valueLocator.innerText();
        return parseFloat(text.replace('€', '').replace(',', '.').trim());
    }
}