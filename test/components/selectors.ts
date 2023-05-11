import { Page } from 'puppeteer';

const AllRight: any = '.base-ui-button__text_UDH';
const tvNoutBook: any =
  '.catalog-menu__root-item-info.catalog-menu__root-item-title';

const accessories: any =
  '[data-src="https://c.dns-shop.ru/thumb/st1/fit/220/150/d3a95120ef077cd8368e944742cc9c9d/60316a6264963e392dbf98cea48de47d603a6679b26797406ddb88bf1c399311.png"]';
class ModalWindow {
  async AllModal(page: Page) {
    await page.waitForSelector(AllRight);
    await page.$$eval(AllRight, (elements: any) => {
      return <HTMLElement>elements[0].click();
    });
  }
  async ClickNouteBook(page: Page) {
    await page.waitForSelector(tvNoutBook);
    await page.$$eval(tvNoutBook, (elements: any) => {
      return <HTMLElement>elements[4].click();
    });
  }

  async ClickAccessories(page: Page) {
    await page.waitForSelector(accessories);
    await page.click(accessories);
  }
}
const gModalWindow = new ModalWindow();
export { gModalWindow };
