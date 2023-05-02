import { Page } from 'puppeteer';

class Click {
  page!: Page; 
  async ClickToSelector(selector: string) {
    await this.page.waitForSelector(selector);
    await this.page.click(selector);
  }
}

const gClick = new Click();
export { gClick };
