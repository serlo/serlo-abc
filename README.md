# Serlo ABC

## Installation

### Setup

Do the following steps once.

* Install [Node.js v6](https://nodejs.org) (preferably using [nvm](https://github.com/creationix/nvm))
* Install [Yarn](https://yarnpkg.com/)
* Install [React Native](https://facebook.github.io/react-native/)

### Common Tasks

Do the following steps as needed

#### Install Dependencies

Installs the dependencies as specified in [package.json](package.json) according to the locked versions in [yarn.lock](yarn.lock).

```
yarn
```

#### Adding Dependencies

Adds the specified Node.js package to [package.json](package.json)
```
yarn add PACKAGE_NAME
```
If the package is only used in development (e.g. testing utilities / linter / ...), add `--dev` to specify it as `devDependency`:
```
yarn add PACKAGE_NAME --save
```

#### Remove Dependencies

Removes the specified Node.js package from [package.json](package.json)
```
yarn remove PACKAGE_NAME
```


#### Run Tests

Runs the `*.test.js` files using [Jest](https://facebook.github.io/jest/)
```
yarn test
```

#### Lint JavaScript

Lints all `*.js` files and fixes some errors
```
yarn lint
```

#### Launch the App

See also [React Native Guide: Running On Device](https://facebook.github.io/react-native/docs/running-on-device.html)

* **iOS Simulator**. (requires macOS)
```
yarn run-ios
```
* **iOS Device**. (requires macOS) Open the Xcode project and [launch the app on the device](https://developer.apple.com/library/content/documentation/IDEs/Conceptual/AppDistributionGuide/LaunchingYourApponDevices/LaunchingYourApponDevices.html):
```
open ios/SerloABC.xcodeproj
```
* **Android**. Start your Android Virtual Device or connect your Android device to your PC. Then
```
yarn run-android
```

#### Launch the Storybook

[React Native Storybook](https://github.com/storybooks/react-native-storybook) uses its own packager. You need to start it before launching the app.

* If the React Native packager is running, terminate the process
* Start React Native Storybook packager
```
yarn storybook
```
* [Launch your App](#launch-your-app)
* Open [http://localhost:7007](http://localhost:7007) in your browser after the app started
