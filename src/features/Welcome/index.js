import { View, Text } from 'react-native';
import styleFn from './styles';

const Welcome = () => {

    const styles = styleFn();

    return (
        <View style={styles.container}>
            <Text>Welcome to the app!</Text>
        </View>

    );
}

export default Welcome;