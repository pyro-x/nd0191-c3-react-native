import {TouchableOpacity, Text} from 'react-native';
import {buttonStyles} from './styles';

const Button = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={buttonStyles.container} onPress={onPress}>
            <Text style={buttonStyles.label}>{title}</Text>
        </TouchableOpacity>
    );
}

export default Button;