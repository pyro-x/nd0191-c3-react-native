import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

 

import CustomerCreate from "../screens/customers/Create";
import CustomerList from "../screens/customers/List";

import RegionList from "../screens/regions/List";
import RegionCustomers from "../screens/regions/Customers";



const Navigation = () => {

    const CustomerStack = createStackNavigator();
    const RegionStack = createStackNavigator();

    const MainStack = createStackNavigator();
    const CustomerStackScreen = () => {
        return (
            <CustomerStack.Navigator>
                 <CustomerStack.Screen
                    name='New'
                    component={CustomerCreate}
                />
                <CustomerStack.Screen
                    name='List'
                    component={CustomerList}
                />
            </CustomerStack.Navigator> )
    };

    const RegionStackScreen = () => {
        return (
            <RegionStack.Navigator initialRouteName='List'>
                <RegionStack.Screen
                    name='List'
                    component={RegionList}
                />
                <RegionStack.Screen    
                    name='CustomersList'
                    component={RegionCustomers}
                />
            </RegionStack.Navigator>
        )};


    return (
        <NavigationContainer>
            <MainStack.Navigator 
                initialRouteName='Regions'>
                <MainStack.Screen 
                    name='Customers'
                    component={CustomerStackScreen} 
                />
                <MainStack.Screen 
                    name='Regions'
                    component={RegionStackScreen} 
                />
            </MainStack.Navigator>

        </NavigationContainer>
    )
}

export default Navigation;