import { SafeAreaView, ScrollView } from "react-native";
import CustomerCreate from "../../features/customers/Create";
const Create = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <CustomerCreate/>
            </ScrollView>
        </SafeAreaView>

    );
};


export default Create;
