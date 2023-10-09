import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import DeviceInfo from './screens/DeviceInfo';
import BateriaScreen from './screens/BateriaScreen';
import MyScreenOrientation from './screens/MyScreenOrientation';
import Notificacoes from './screens/Notificacoes';
import ContactsInfo from './screens/ContactsInfo';
import Sensor from './screens/Sensor';
import PrintScreen from './screens/PrintScreen';
import LocalAuthentication from './screens/LocalAuthentication'
import CameraInfo from './screens/CameraInfo';
import Localizations from './screens/Localizations';

const Stack = createStackNavigator()

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: true}} />
                <Stack.Screen name='DeviceInfo' component={DeviceInfo} options={{headerShown: true}} />
                <Stack.Screen name='BateriaScreen' component={BateriaScreen} options={{headerShown: true}} />
                <Stack.Screen name='MyScreenOrientation' component={MyScreenOrientation} options={{headerShown: true}} />
                <Stack.Screen name="Notificacoes" component={Notificacoes} options={{HeaderShown: true}} />
                <Stack.Screen name="ContactsInfo" component={ContactsInfo} options={{HeaderShown: true}} /> 
                <Stack.Screen name="Sensor" component={Sensor} options={{HeaderShown: true}} />
                <Stack.Screen name="PrintScreen" component={PrintScreen} options={{HeaderShown: true}} />
                <Stack.Screen name="LocalAuthentication" component={LocalAuthentication} options={{HeaderShown: true}} />
                <Stack.Screen name="CameraInfo" component={CameraInfo} options={{HeaderShown: true}} />
                <Stack.Screen name="Localizations" component={Localizations} options={{HeaderShown: true}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation;