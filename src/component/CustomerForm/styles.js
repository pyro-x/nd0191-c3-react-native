import { StyleSheet } from 'react-native'
const styleFn = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#F5FCFF',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            borderRadius: 5,
            marginVertical: 5,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 3,

        },
        formContainer: {
            flex: 1,
            backgroundColor: '#FFFFFF',
            width: '100%',
            padding:10
        },
        textInput: { 
            borderWidth: 1, 
            borderColor: 'black', 
            borderRadius: 4, 
            padding: 10,
            width: 245            
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
        button: {
            paddingTop: 30,
            paddingBottom: 30,
            alignItems: 'center',
        }

    });
};

export default styleFn;
