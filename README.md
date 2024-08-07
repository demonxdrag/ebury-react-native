#### Welcome to the React Native Test for Adrian Pappalardo

This project consists in a React-Native app that will connect to a mock API in a different repository.

## Run the App
This app uses Expo to expand React-Native capabilities to the web to make development more efficcient.

This means that you can test the app using the [Expo Go](https://expo.dev/go) app or directly on the web which is what I recommend since managing the api calls might be easier

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

The server should show you the address in which it's running and a QR code for the [Expo Go](https://expo.dev/go) App, you can open the `web` by pressing `w` or scan the `QR` code to run in a `phone`