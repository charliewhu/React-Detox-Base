# React Native E2E Testing with Detox

Learn how to setup your local or CI environment to run E2E tests on iOS & Android emulators with Detox. Write E2E tests for a demo application covering best practices and gotchas along the way.

[This document](https://www.notion.so/danecando/React-Native-E2E-Testing-with-Detox-210239315470489095d0b4e51cfc5768) contains links to documentation and resources related to each part of the walk through during this presentation.

## Table of contents

- [Setup](#setup)
- [Running](#running)
- [Resources](#resources)

## Setup

```bash
git clone https://github.com/danecando/JSM-Detox-Testing.git
cd JSMarathon
yarn
```

## Running

### Android

```bash
yarn start
```

Then in a new terminal window:

```bash
yarn e2e:build-android
yarn e2e:run-android
```

## Resources

- [https://github.com/wix/Detox](https://github.com/wix/Detox)
- [https://medium.com/wix-engineering/detox-writing-stable-test-suites-372c9d537184](https://medium.com/wix-engineering/detox-writing-stable-test-suites-372c9d537184)
