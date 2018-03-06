import { AclFrameworkPage } from './app.po';

describe('acl-framework App', function() {
  let page: AclFrameworkPage;

  beforeEach(() => {
    page = new AclFrameworkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
