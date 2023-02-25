import { StyleSheet } from 'react-native'
const styleFn = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#F5FCFF',
            alignItems: 'center',
            justifyContent: 'space-around',
            
        },
        formContainer: {
            flex: 1,
            backgroundColor: '#FFFFFF',
            width: '100%',
            padding: 20,
        },
        textInput: { 
            borderWidth: 1, 
            borderColor: 'black', 
            borderRadius: 4, 
            padding: 10,
            width: 256
            
        },
        picker: {
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 4,
            width: 'auto',
        },
        pickerContainer: {
            width: '77%',
            paddingHorizontal: 0,
            },

        row: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10        
        },
        label: {
            fontWeight: 'bold',
            marginRight: 5,
            fontSize: 16,
        },

    });
};

export default styleFn;
