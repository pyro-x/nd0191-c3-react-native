import { View, Text, Button, TouchableOpacity } from 'react-native';
import styleFn from './styles';
import { useNavigation , useLinkTo} from '@react-navigation/native';

const Welcome = () => {

    const styles = styleFn();
    const { navigate } = useNavigation();
    const linkTo = useLinkTo();
    
    return (
        <View style={styles.container}>
            <Text>Welcome to the app!</Text>
            <Button title="Show regions" onPress={() => {
                // TODO: navigate to regions list
                linkTo('/Regions/List');
            }}/>
        </View>

    );
}

export default Welcome;