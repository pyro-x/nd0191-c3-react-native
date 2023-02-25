import { View, Text } from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {useMemo} from 'react';
import {useListCustomers} from '../../customers/hooks';
import CustomerCard from '../../../component/CustomerCard';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';


const CustomersByRegionList = () => {
    const route = useRoute();
    const navigation = useNavigation()


    const { regionId } = route.params; 
    const customers = useListCustomers();

    const customersByRegion = useMemo(() => customers.filter (customer => customer.region === regionId), [customers]);

    const region = useSelector((state) => state.regions.list.regions.find((reg) => reg.id === regionId));

    const { name } = region || {};

    const onPress = (id) => {
        console.log('onPress customer id',id);
        navigation.navigate ('CustomerView', { customerId: id });
    };
    return (
        <View style={styles.container}>
            <Text style={styles.header}>{name}</Text>
            {customersByRegion && customersByRegion.map((customer) => {
                return (
                        <CustomerCard  customer={customer} key={customer.id} onPress={onPress}/>
                );
            })}
            {customersByRegion.length === 0 && <Text>No customers in the region yet</Text>}
        </View>

    );
}

export default CustomersByRegionList;