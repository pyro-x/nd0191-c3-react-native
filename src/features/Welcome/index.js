import { View, Text} from 'react-native';
import styleFn from './styles';
import { useNavigation , useLinkTo} from '@react-navigation/native';
import Button from '../../component/Button';

import { clear } from '../../utilities/async_storage';
const Welcome = () => {

    const styles = styleFn();
    const navigation = useNavigation()
    const linkTo = useLinkTo();
    
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Efficiently manage your customers across regions with our customer relationship app!</Text>
            <Button title="Create customer" onPress={() => {
                navigation.navigate ('CustomerCreate');
            }}/>
            <Button title="Show regions" onPress={() => {
                navigation.navigate ('RegionsList');
                // TODO: navigate to regions list
                //linkTo('/Regions/List');
            }}/>
            <Button title="Clear cache" onPress={() => {

                clear();

            }}/>
        </View>

    );
}

export default Welcome;