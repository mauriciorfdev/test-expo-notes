# Notes App - React Native

This is a simple notes app built with React Native and Expo.

Users can create, read, update, and delete notes.

It also uses authentication through Appwrite to allow users sign in / sign up and create private notes.

![screens](/assets/images/screens.png)

## Info

- Expo SDK 52, React Native 0.76, Expo Go 2.32.19
- Appwrite 0.7.0: (_CRUD Operations / Authentication_)

## Get started

Install dependencies:

```
npm install
```

Sign into Appwrite, create a new project and database; finally complete the required environment variables on _.env_ file.

Start the server:

```
 npx expo start
```

You can run the app using Expo Go app (using an emulator or physical device)
