import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

 

import CustomerCreate from "../screens/customers/Create";
import CustomerView from "../screens/customers/View";
import CustomerEdit from "../screens/customers/Edit";
import CustomerList from "../screens/customers/List";

import RegionList from "../screens/regions/List";
import RegionCustomers from "../screens/regions/Customers";
import WelcomeScreen from "../screens/Welcome";



const Navigation = () => {

    const CustomerStack = createStackNavigator();
    const RegionStack = createStackNavigator();

    const MainStack = createStackNavigator();

    return (
        <NavigationContainer>
            <MainStack.Navigator 
                initialRouteName='Welcome'>
                <MainStack.Screen
                    name='Welcome'
                    component={WelcomeScreen}
                />
                <MainStack.Screen
                    name='CustomerCreate'
                    options={{
                        title: 'New customer'
                    }}
                    component={CustomerCreate}
                />
                <MainStack.Screen
                    name='CustomerEdit'
                    options={{
                        title: 'Edit customer'
                    }}
                    component={CustomerEdit}
                />
                <MainStack.Screen
                    name='CustomerView'
                    options={{
                        title: 'Customer'
                    }}
                    component={CustomerView}
                />

                <MainStack.Screen
                    name='RegionsList'
                    options={{
                        title: 'Regions'
                    }}
                    component={RegionList}
                />
                <MainStack.Screen    
                    name='CustomersList'
                    options={{
                        title: 'Customers'
                    }}
                    component={RegionCustomers}
                />
            </MainStack.Navigator>

        </NavigationContainer>
    )
}

export default Navigation;