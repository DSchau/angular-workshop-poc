import { AngularWorkshopPocPage } from './app.po';

describe('angular-workshop-poc App', () => {
  let page: AngularWorkshopPocPage;

  beforeEach(() => {
    page = new AngularWorkshopPocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
