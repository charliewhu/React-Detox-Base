# React Native E2E Testing with Detox

A blank canvas React Native project for running end-to-end tests on Android with Detox. This was forked from [Dane Grant's repo here](https://github.com/danecando/JSM-Detox).


## Setup

```bash
git clone https://github.com/charliewhu/React-Detox-Base.git
cd React-Detox-Base
yarn
```

## Running

### Android

Run this command (and keep it running):

```bash
yarn start
```

Then, in a new terminal window:

```bash
yarn build-debug
yarn test-debug
```

## Resources

- [https://github.com/wix/Detox](https://github.com/wix/Detox)
- [https://medium.com/wix-engineering/detox-writing-stable-test-suites-372c9d537184](https://medium.com/wix-engineering/detox-writing-stable-test-suites-372c9d537184)
