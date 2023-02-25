import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';
import Button from '../../../component/Button';
import CustomerCard from '../../../component/CustomerCard';
import { useNavigation } from '@react-navigation/native';

const CustomerView = () => {

    // get customer id from route params
    const route = useRoute();
    const navigation = useNavigation()

    const { customerId } = route.params;

     const customer = useSelector (state => state.customers.list.customers.find (customer => customer.id === customerId));
     const { name, surname, email, id } = customer || {};

    const onEdit = () => {

        console.log('onEdit customer id',id);
        navigation.navigate ('CustomerEdit', { customerId: id });
        };


    return (
        <View style={styles.container}>
          <CustomerCard  styles={styles.infoContainer} customer={customer} onPress={()=>{}} />
        <Button  onPress={onEdit} title="Edit"/>
        </View>
      );
    };


export default CustomerView;