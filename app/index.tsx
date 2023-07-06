import React from 'react';
import MapView from 'react-native-maps';
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import Button from './comps/Button';
import CamButton from './comps/camButton';


const WelcomeScreen = () => {
    const navigation = useRouter();

    return (
        <View style={styles.container}>
            <MapView style={styles.map} >
            </MapView>
            <View style={styles.btnGroup}>
                <Button theme="primary" label="Trophies" action={() => navigation.push("/trophy_room")} />
                <Button theme="primary" label="+" action={() => console.log("no")} />
            </View>
            <View style={styles.camButton}>
                <CamButton label="Camera" action={() => navigation.push("/qr_scanner")} />
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
        flex: 1 / 2,
        position: "absolute",

    },
    camButton: {
        position: "absolute",
    },
});

export default WelcomeScreen;