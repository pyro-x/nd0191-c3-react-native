import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';
import Button from '../../../component/Button';
import CustomerCard from '../../../component/CustomerCard';
import { useNavigation } from '@react-navigation/native';
import * as Notifications from 'expo-notifications'
import Constants from 'expo-constants'

import { useEffect } from 'react';


const CustomerView = () => {

    // get customer id from route params
    const route = useRoute();
    const navigation = useNavigation()

    const { customerId } = route.params;

     const customer = useSelector (state => state.customers.list.customers.find (customer => customer.id === customerId));
     const { id } = customer || {};

    const onEdit = () => {

        navigation.navigate ('CustomerEdit', { customerId: id });
        };
    const askNotification = async () => {
        // We need to ask for Notification permissions for ios devices
        const { status } = await Notifications.requestPermissionsAsync()
        if (Constants.isDevice && status === 'granted') {
            console.log('Notification permissions granted.')
        }
    }


    
    const handleNotification = (notification) => {
        console.log('handleNotification', notification)
    }

    const onSetReminder = ( customer ) => {

        const {name, surname, phone} = customer || {}

        askNotification().then(() => {
            Notifications.scheduleNotificationAsync({
                content: {
                    title: `🤙${surname} is waiting your call🤙`,
                    body: `Customer ${name} ${surname} is waiting your call call him at ${phone}`
                },
                trigger: { seconds: 10 },
            });
        });
    };

    // useEffect(() => {
    //     askNotification()
    
    //     const listener = Notifications.addNotificationReceivedListener(handleNotification)
    //     return () => listener.remove()
    //   }, [])
    return (
        <View style={styles.container}>

        <CustomerCard  style={styles.infoContainer} customer={customer} onPress={()=>{}} />
        <Text style={styles.reminder}>Please set a reminder to call your customer when you are on his region</Text>

        <View style={styles.buttonsContainer}></View>
            <Button style={styles.button} onPress={onEdit} title="Edit"/>
            <Button  style={styles.button} onPress={()=>{onSetReminder(customer)}} title="Set Reminder"/>
        </View>
      );
    };


export default CustomerView;