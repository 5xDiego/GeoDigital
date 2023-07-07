import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import Button from './components/Button';



const WelcomeScreen = () => {
    {/* used to transfer info to string-output */}
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
  
    {/* Requests User to access location services */}
    useEffect(() => {
      (async () => {
        
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Please alow GeoDigital to access your location in order for the App to function.');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })();
    }, []);
  
    {/**
    -> Will return positon string (deactivated by default)

    let text = 'Waiting..';
    if (location) {
      text = JSON.stringify(location);
    }
    */}

    const navigation = useRouter();

    return (
        <View style={styles.container}>
            <MapView style={styles.map} showsUserLocation={true} followsUserLocation={true} minZoomLevel={5} maxZoomLevel={20}>
            </MapView>
            <View style={styles.btnGroup}>
                <Button action={() => navigation.push("/qr_scanner")} theme="primary" iconName="camera" />
                <Button action={() => navigation.push("/trophy_room")} theme="primary" iconName="trophy" />
                <Button action={() => console.log("no")} theme="primary" iconName="plus" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        position: "relative",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        textAlign: "center",
    },
    map: {
        width: "100%",
        height: "100%",
    },
    btnGroup: {
        paddingTop: 10,
        top: 0,
        left: 0,
        height: "auto",
        width: "auto",
        position: "absolute",
        flex: 1,
        flexDirection: "column-reverse",
    },
});

export default WelcomeScreen;