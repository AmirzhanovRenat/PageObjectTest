import puppeteer, { Page } from 'puppeteer';

class Click {
  async ClickToSelector(page: Page, selector: string) {
    await page.waitForSelector(selector);
    await page.click(selector);
  }
}

class bBrowser {
  async openBrowser() {
    const browser = await puppeteer.launch({
      headless: false, // если ничего нет то придет тру, если что то хоть написано придет фалс
      product: 'chrome',
      slowMo: 80,
      defaultViewport: { width: 1920, height: 1080 },
      args: [
        '--disable-gpu',
        '--disable-dev-shm-usage',
        '--disable-setuid-sandbox',
        '--no-first-run',
        '--no-sandbox',
        '--no-zygote',
        '--disable-accelerated-2d-canvas',
        '--start-maximized',
        '--ignore-certificate-errors',
      ],
    });
    const page = await browser.newPage();
    await page.goto('https://www.dns-shop.ru/');
  }
  async browserClose() {
    await browser.close();
  }
}

const gClick = new Click();
const gBrowser = new bBrowser();
export { gClick, gBrowser };
