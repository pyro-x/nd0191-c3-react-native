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
``git clone https://github.com/pyro-x/nd0191-c3-react-native.git
cd nd0191-c3-react-native.git```

2. Install dependencies:
``yarn install``
or
``npm install``

3. Run the application
`yarn start``
or 
``npm start``

4. Use a mobile device or emulator to view the application.
Use the Expo go to scan the QR and launch the application on your mobile deviace


## AsyncStorage

This application uses AsyncStorage to store customer data. Customer data is saved locally on the device and persists even if the application is closed or the device is restarted.

## Native notifications

This application uses native notifications to send reminder notifications to the user when it is time to call a customer. When the user sets a reminder for a customer, the application schedules a notification using the `Notifications` API. The notification is sent at the specified time, even if the application is closed.

## Screenshots

Include screenshots of the application here.

## Contributors

- [David Monterroso Cabello](https://github.com/pyro-x)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

