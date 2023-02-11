import Welcome from "../features/Welcome";
import { SafeAreaView, ScrollView } from "react-native";


const WelcomeScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Welcome/>
            </ScrollView>
        </SafeAreaView>

    );
};


export default WelcomeScreen;
