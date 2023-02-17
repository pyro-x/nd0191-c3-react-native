import { View, Text } from 'react-native';
import { useListRegions } from '../hooks'

const RegionList = () => {

    const { regions, loading, error } = useListRegions();
    console.log ('regions', regions);

    if (loading) {
        return <Text>Loading...</Text>;
    }
    
    if (error) {
        return <Text>Error: {error.message}</Text>;
    }
    
    return (
        <View>
            <Text>Regions:</Text>
            {regions.map(({id, name}) => (
            <Text key={id}>{name}</Text>
            ))}
        </View>
    );
};


export default RegionList;