## Welcome to the React Native Test for Adrian Pappalardo

This project consists in a React-Native app that will connect to a mock API to fech data which is located in a different repository.

## Architecture
This app uses Expo to expand React-Native capabilities to the web to make development more efficcient.
However the web version is not meant to be deployed.

This means that you can test the app using the [Expo Go](https://expo.dev/go) app or directly on the web for a quick API test.

__Note__: The Web version does not support scrolling or the animations.

__My recomendation__ is to use the [Expo Go](https://expo.dev/go) app since it is a very easy way to test code, however you could use emulators directly from the terminal too, as a last resort the web can be used.

#### Patterns and Architecture Design

This project was created using __Clean Architecture__ with _separation of concerns_ as the main goal.

For managing _storage_ and _data_ the project uses __Contexts__.

For managing the _Theme_ and other custom variables the project uses __Custom Hooks__ in addition to this the project requires the use of a custom hook to handle differences between web and mobile using the _device_ imports that Expo provides.

### Configuration

The project uses a single environment variable, there should be a `.env` attached in the delivery however if that is not the case a `.env` file needs to be created in the root of the project containing the followinf:

```
EXPO_PUBLIC_API_URL=http://{YOUR_SERVER_API}:3000/api
```

> Please refer to the API repository to get this information

### Run the server
This project uses NPM as a package manager which means that you should only need to run 

```
$ npm install
$ npm start
```

> In mac you might have some trouble with watchman, you can fix this by running
> ```
> $ brew update
> $ brew install watchman
> ```

The server should show you the address in which it's running and a QR code for the [Expo Go](https://expo.dev/go) App.

On `iPhone` you would need to scan the `QR` using the `native camera` having the [Expo Go](https://expo.dev/go) app installed. 

On `Android` you can scan it directly from within the [Expo Go](https://expo.dev/go) app.

For `emulators` you can press `a` for `Android` or `i` for `iOS`.

Lastly, for `web` you can press `w` however this is not the recommended testing method since it doesn't support scrolling or the animations.