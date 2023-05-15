import { gBrowser, gClick } from './components/browser';
import { instanceCatalog } from './components/catalog';
import { gModalWindow, gUserName, helpWindow } from './components/selectors';
const pk = new helpWindow();

jest.setTimeout(60000);
describe('test', () => {
  it('Select laptop on homepage', async () => {
    await gBrowser.openBrowser(); //open browser
    await gModalWindow.AllModal(page); //Search city
    await gModalWindow.ClickNouteBook(page);
    await new Promise((r) => setTimeout(r, 5000)); //timeout
    await gModalWindow.ClickAccessories(page); //choice all
    await new Promise((r) => setTimeout(r, 5000)); //timeout
    await gUserName.func(); 
    await gModalWindow.ClickNouteBook(page);
    await pk.ClickNouteBook(page); //choice catalog
  });
  it('catalog Page', async () => {
    instanceCatalog.closeBanner(page); //close Banner advertising
    instanceCatalog.filtersCatalof(page); //search filters laptop
    instanceCatalog.buyLaptop(page); //buy to LapTop Aplle MacBook
    gBrowser.browserClose(); //close Browser
  });
});
