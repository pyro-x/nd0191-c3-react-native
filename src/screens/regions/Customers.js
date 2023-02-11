import { SafeAreaView, ScrollView } from "react-native";

import CustomersByRegionList from "../../features/regions/Customers";

const List = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <CustomersByRegionList/>
            </ScrollView>
        </SafeAreaView>

    );
}

export default List;