import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import DeviceInfo from './screens/DeviceInfo';
import BateriaScreen from './screens/BateriaScreen';

const Stack = createStackNavigator()

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: true}} />
                <Stack.Screen name='DeviceInfo' component={DeviceInfo} options={{headerShown: true}} />
                <Stack.Screen name='BateriaScreen' component={BateriaScreen} options={{headerShown: true}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation;