import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

const CustomerCard = ({ customer, onPress }) => {
  const { name, surname, email, id } = customer;

  return (
    <View
        style={styles.container}
    >
        <TouchableOpacity onPress={()=> {onPress(id)}}>
      <View style={styles.row}>
        <View style={styles.hCardLabel}>
            <Text style={styles.label}>ID</Text>
        </View>
        <View style={styles.hCardText}>
            <Text style={styles.value}>{id}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.hCardLabel}>
            <Text style={styles.label}>Name</Text>
        </View>
        <View style={styles.hCardText}>
            <Text style={styles.value}>{name}</Text>
        </View>
      </View>
      <View style={styles.row}>
      <View style={styles.hCardLabel}>
            <Text style={styles.label}>Surname</Text>
        </View>
        <View style={styles.hCardText}>
            <Text style={styles.value}>{surname}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.hCardLabel}>
            <Text style={styles.label}>Email</Text>
        </View>
        <View style={styles.hCardText}>
            <Text style={styles.value}>{email}</Text>
        </View>
      </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomerCard;