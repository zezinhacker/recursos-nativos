import React, { useEffect, useState } from 'react';
import { View, Button, Alert, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import * as Localization from 'expo-location';

import Header from '../components/Header';

const Localizations = () => {

    const [ getLocalization, setLocation ] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Localization.requestForegroundPermissionsAsync();
            if(status !== 'granted') {
                Alert.alert('Permissão de acesso à localização negada!');
                console.log('Permissão de acesso à localização negada!');
                return;
            }

            let localization = await Localization.getCurrentPositionAsync({});
            setLocation(localization.coords);
            console.log(localization.coords);
        })();
    }, []);

    return (
        <View>
            <Header title='Localização' />
            <View>
                {!getLocalization
                ?
                    <Text>Carregando...</Text>
                :
                    <>
                        <Text>Latitude: {getLocalization.latitude ?? '10'}</Text>
                        <Text>Longitude: {getLocalization.longitude ?? '10'}</Text>
                        <View style={{ flex: 1, width: 300 }}>
                        <MapView
                            style={{ flex: 1 }}
                            initialRegion={{
                                latitude: getLocalization.latitude,
                                longitude: getLocalization.longitude,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                        >
                            <Marker
                                coordinate={{ latitude: getLocalization.latitude, longitude: getLocalization.longitude }}
                                title="Localização do dispositivo"
                                description="Esta é a atual localização do dispositivo."
                            />
                        </MapView>
                        </View>
                    </>
                }

            </View>
        </View>
    );
}


export default Localizations;