import { SafeAreaView, ScrollView } from "react-native";

import RegionList from "../../features/regions/List";

const List = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <RegionList/>
            </ScrollView>
        </SafeAreaView>

    );
}

export default List;