
/* eslint-disable no-undef */
describe('App', () => {
  beforeAll(async () => {
    await device.launchApp({
      newInstance: true,
    });
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('says hello react native', async () => {
    await expect(element(by.text("Hello React Native"))).toBeVisible();
  });


});
