import { Page } from 'puppeteer';

class Click {
  async ClickToSelector(page: Page, selector: string) {
    await page.waitForSelector(selector);
    await page.click(selector);
  }
}

const gClick = new Click();
export { gClick };
