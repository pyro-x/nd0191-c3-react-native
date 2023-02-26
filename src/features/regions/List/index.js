import { View, Text, FlatList } from 'react-native';
import { useListRegions } from '../hooks'
import RegionRow from '../../../component/RegionRow';
import Button from '../../../component/Button';
import { useNavigation , useLinkTo} from '@react-navigation/native';

import styles from './styles';


const RegionList = () => {

    const { regions, loading, error } = useListRegions();
    const navigation = useNavigation()


    return (
        <View style={styles.container}>
            <Button title="Create customer" onPress={() => {
                navigation.navigate ('CustomerCreate');
            }}/>

            <Text styles={styles.header}>Regions</Text>
            { loading && <Text>Loading...</Text> }
            {
                regions.map((region) => <View key={region.id}  style={styles.item}><RegionRow region={region}/></View>)

            }
            { error && <Text>Error: {error.message}</Text> }

        </View>
    );
};


export default RegionList;