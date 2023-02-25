import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 5,
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
    width: '90%',
    alignSelf: 'center',
    flexShrink: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  value: {
    marginBottom: 5,
    textAlign: 'left',
    alignSelf: 'flex-start',
    
  },
  hCardLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'flex-start',
    width: '40%',
    paddingHorizontal:10
    },
  hCardText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'flex-start',
        width: '60%',
        paddingHorizontal:10
    },
});

export default styles;