import { TPLAb4PizzeriasArgPage } from './app.po';

describe('tplab4-pizzerias-arg App', () => {
  let page: TPLAb4PizzeriasArgPage;

  beforeEach(() => {
    page = new TPLAb4PizzeriasArgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
