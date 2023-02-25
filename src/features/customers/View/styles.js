import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        paddingTop: 10,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        padding: 50,
        alignSelf: 'end',

    },
    infoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20,
        backgroundColor: '#ff00ff',
        borderWidth: 4,

    },

});

export default styles;