import { AngularFormsStartPage } from './app.po';

describe('angular-forms-start App', function() {
  let page: AngularFormsStartPage;

  beforeEach(() => {
    page = new AngularFormsStartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
