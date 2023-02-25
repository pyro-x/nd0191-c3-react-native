import { TouchableOpacity, Text , View} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../Button";


const RegionRow = ({ region }) => {

    const { navigate } = useNavigation();
    
    const handleRegionClick = (reg) => {
        navigate('CustomersList', { regionId: reg.id });
    };
    return (
        <Button title={region.name} onPress={() => handleRegionClick(region)}/>
    );
      
};

export default RegionRow;