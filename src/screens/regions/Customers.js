import { SafeAreaView, ScrollView } from "react-native";

import CustomersByRegionList from "../../features/regions/Customers";

const List = () => {
    return (
        <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
            <CustomersByRegionList/>
        </ScrollView>
    );
}

export default List;