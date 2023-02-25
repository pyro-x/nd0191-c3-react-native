import { StyleSheet } from 'react-native'
const styleFn = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
            justifyContent: 'space-around',
        },
        welcome: {
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
            paddingHorizontal: 20,
        },
        instructions: {
            textAlign: 'center',
            color: '#333333',
            marginBottom: 5,
        },
    });

};

export default styleFn;