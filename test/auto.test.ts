import puppeteer from 'puppeteer';
import { gClick } from './components/browser';

jest.setTimeout(60000);
describe('test', () => {
  it('testTS', async () => {
    const browser = await puppeteer.launch({
      // headless: false, // если ничего нет то придет тру, если что то хоть написано придет фалс
      headless: false,
      // product: 'chrome',
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
      timeout: 90000,
    });
    const page = await browser.newPage();

    await page.goto('https://developer.chrome.com/');

    // Type into search box
    await page.type('.search-box__input', 'automate beyond recorder ');

    // Wait and click on first result
    // const searchResultSelector = '.search-box__link';

    gClick.ClickToSelector('.search-box__link');
    // await page.waitForSelector(searchResultSelector);
    // await page.click(searchResultSelector);

    //Locate the full title with a unique string
    const textSelector: any = await page.waitForSelector(
      'text/Customize and automate'
    );
    const fullTitle = await textSelector.evaluate(
      (el: { textContent: any }) => el.textContent
    );

    // Print the full title
    console.log('The title of this blog post is "%s".', fullTitle);

    await browser.close();
  });
});
