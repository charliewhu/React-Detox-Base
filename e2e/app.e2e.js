/* eslint-disable no-undef */
describe('App', () => {

  beforeEach(async () => {
    await device.launchApp();
  });

  it('says hello react native', async () => {
    await expect(element(by.text("Hello React Native"))).toBeVisible();
  });


});
