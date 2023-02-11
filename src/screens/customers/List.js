import { SafeAreaView, ScrollView } from "react-native";

import CustomersList from "../../features/customers/List";

const List = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <CustomersList/>
            </ScrollView>
        </SafeAreaView>

    );
}

export default List;