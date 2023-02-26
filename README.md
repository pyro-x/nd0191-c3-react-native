# Customer Relationship Application

This project is a mobile application for managing customer relationships in multiple regions. It is built using React Native and Redux, and was created as part of the Udacity React Nanodegree.

## Features

- View all customers in each region
- Create new customers
- Edit existing customers
- Set reminder notifications to call customers
- Filter customers by region

## Technologies Used

- React Native
- Redux
- Expo
- React Navigation
- AsyncStorage
- Native notifications

## Setup

1. Clone the repository:
```
git clone https://github.com/pyro-x/nd0191-c3-react-native.git
cd nd0191-c3-react-native
```

2. Install dependencies:
``yarn install``
or
``npm install``


### Options for Running the App

#### `npm start` or `yarn start`

Runs the app in development mode. Use the **Expo Go** app on your iOS or Android device and scan the QR code to open the app on your device.

#### `npm run android` or `yarn android`

Builds and runs the app on an Android device or emulator. If you don't have an emulator installed, you can install [Android Studio](https://developer.android.com/studio) and create a new Android Virtual Device (AVD) to run the app.

#### `npm run ios` or `yarn ios`

Builds and runs the app on an iOS device or simulator. If you're using a simulator, you must have [XCode](https://developer.apple.com/xcode/) installed on your machine.


## AsyncStorage

This application uses AsyncStorage to store customer data. Customer data is saved locally on the device and persists even if the application is closed or the device is restarted.

## Native notifications

This application uses native notifications to send reminder notifications to the user when it is time to call a customer. When the user sets a reminder for a customer, the application schedules a notification using the `Notifications` API. The notification is sent at the specified time, even if the application is closed.


## Contributors

- [David Monterroso Cabello](https://github.com/pyro-x)


