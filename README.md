# 🚧 Out of maintenace: Looking for new maintainers 🚧

**Unfortunately we are unable to maintain this project further. Thus we are looking for a new maintainer. Please [contact us](https://de.serlo.org/kontakt) in case you are interested.**

----

<img src="https://assets.serlo.org/meta/logo.png" alt="Serlo logo" title="Serlo" align="right" height="60" />

# Serlo ABC

[![Expo Build (master)](https://img.shields.io/badge/Expo-master-blue.svg)](https://expo.io/@serlo-org/serlo-abc)
[![Expo Build (development)](https://img.shields.io/badge/Expo-development-orange.svg)](https://expo.io/@serlo-org/serlo-abc?release-channel=development)

<a href="https://apps.apple.com/us/app/serlo-abc/id1451625808?mt=8">
  <img alt="Download on the App Store" src="https://assets.serlo.org/5d08f913b355d_4809808eeb8b826be8dcabf2f69f7780e3f67adb.png" width="200" />
</a>
<a href="https://play.google.com/store/apps/details?id=org.serlo.abc&utm_source=github.com/serlo-org/serlo-abc">
  <img alt="Get it on Google Play" src="https://assets.serlo.org/5d08f93b9b564_e0538b34a6fee6d0198605c6be3bb135fcd7ad40.png" width="200" />
</a>

This project was bootstrapped with
[Create React Native App](https://github.com/react-community/create-react-native-app).

Below you'll find information about performing common tasks.

## Table of Contents

- [Requirements](#requirements)
- [Updating Create React Native App and React Native](#updating-create-react-native-app-and-react-native)
- [Available Scripts](#available-scripts)
  - [yarn install](#yarn-install)
  - [yarn start](#yarn-start)
  - [yarn test](#yarn-test)
  - [yarn test -- --watch](#yarn-test------watch)
  - [yarn ios](#yarn-ios)
  - [yarn android](#yarn-android)
  - [yarn format](#yarn-format)
  - [yarn lint](#yarn-lint)
- [Writing and Running Tests](#writing-and-running-tests)
- [Tips and Tricks](#tips-and-tricks)

## Requirements

- [Node.js v6](https://nodejs.org) (preferably using
  [nvm](https://github.com/creationix/nvm))
- [Yarn](https://yarnpkg.com/)

## Updating Create React Native App and React Native

Updating the `react-native-scripts` dependency of your app should be as simple
as bumping the version number in `package.json` and reinstalling your project's
dependencies.

Upgrading to a new version of React Native requires updating the `react-native`,
`react`, and `expo` package versions, and setting the correct `sdkVersion` in
`app.json`. See the
[versioning guide](https://github.com/react-community/create-react-native-app/blob/master/VERSIONS.md)
for up-to-date information about package version compatibility.

## Available Scripts

### `yarn install`

Installs the dependencies as specified in [package.json](package.json) according
to the locked versions in [yarn.lock](yarn.lock).

### `yarn start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will
reload if you save edits to your files, and you will see build errors and logs
in the terminal.

### `yarn storybook`

Starts the storybook.

### `yarn test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

### `yarn test -- --watch`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests in
watch mode.

### `yarn ios`

Like `yarn start`, but also attempts to open your app in the iOS Simulator if
you're on a Mac and have it installed.

### `yarn android`

Like `yarn start`, but also attempts to open your app on a connected Android
device or emulator. Requires an installation of Android build tools (see
[React Native docs](https://facebook.github.io/react-native/docs/getting-started.html)
for detailed setup).

### `yarn format`

Formats all JavaScript code with
[prettier](https://github.com/prettier/prettier). Will be automatically run as a
pre-commit git hook.

### `yarn lint`

Reports possible issues in all JavaScript code with
[ESLint](https://github.com/eslint/eslint).

## Writing and Running Tests

This project is set up to use [jest](https://facebook.github.io/jest/) for
tests. Files with suffix `.test.js` will be loaded by jest. The
[jest documentation](https://facebook.github.io/jest/docs/getting-started.html)
is also a wonderful resource, as is the
[React Native testing tutorial](https://facebook.github.io/jest/docs/tutorial-react-native.html).

## Tips and Tricks

- If you have a local network the prevents your phone from accessing the address
  that is printed when running the packager, you can often work around this
  issue by "tethering" your computer to your phone's internet connection. Some
  phones call this feature "mobile hotspot." While it's very convenient, if you
  have a data plan where you pay for data transfer you should be careful when
  using this feature, especially when installing dependencies from NPM.

## Legal

_Apple, the Apple logo and App Store are trademarks of Apple Inc._
_Google Play and the Google Play logo are trademarks of Google LLC._
