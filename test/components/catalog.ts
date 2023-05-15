import { Page } from 'puppeteer';
const closesBanner: string = '#b-61517b60-b167-44c7-8755-c536d1be2fbc';
const closeAllBanners: string =
  '.button-ui.button-ui_white.popover-hide-banner-content__btn';

const checkBoxApple: string = 'ui-checkbox__box.ui-checkbox__box_list';
const buttonLestFilters: string = '.left-filters__buttons';
const buy: string = '.button-ui.buy-btn.button-ui_brand.button-ui_passive';

class Catalog {
  async closeBanner(page: Page) {
    await page.waitForSelector(closesBanner);
    await page.click(closesBanner);
    let allCloses: any = await page.$$(closeAllBanners);
    await page.click(allCloses[0]);
  }
  async filtersCatalof(page: Page) {
    await page.$$eval(checkBoxApple, (elem: any) => {
      return elem[12].click();
    });
    await page.click(buttonLestFilters);
  }
  async buyLaptop(page: Page) {
    await page.waitForSelector(buy);
    await page.evaluate(() => {
      let appleBuy: any = document.querySelectorAll(buy);
      return appleBuy[0].click();
    });
  }
}
const instanceCatalog = new Catalog();
export { instanceCatalog };
12;
