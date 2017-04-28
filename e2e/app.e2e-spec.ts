import { AngularSecretSantaPage } from './app.po';

describe('angular-secret-santa App', () => {
  let page: AngularSecretSantaPage;

  beforeEach(() => {
    page = new AngularSecretSantaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
