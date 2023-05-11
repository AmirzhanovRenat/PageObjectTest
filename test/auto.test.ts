import puppeteer from 'puppeteer';
import { gClick } from './components/browser';
import { gModalWindow } from './components/selectors';

jest.setTimeout(60000);
describe('test', () => {
  it('testTS', async () => {
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

      // timeout: 90000,
    });
    const page = await browser.newPage();

    await page.goto('https://www.dns-shop.ru/');

    await gModalWindow.AllModal(page);
    await gModalWindow.ClickNouteBook(page);
    await new Promise((r) => setTimeout(r, 5000));
    await gModalWindow.ClickAccessories(page);
    await new Promise((r) => setTimeout(r, 5000));
    await browser.close();
  });
});
