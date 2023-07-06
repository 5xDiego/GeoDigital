import React from 'react';
import MapView from 'react-native-maps';
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import Button from './components/Button';



const WelcomeScreen = () => {
    const navigation = useRouter();

    return (
        <View style={styles.container}>
            <MapView style={styles.map} >
                <View style={styles.btnGroup}>
                    <Button action={() => navigation.push("/qr_scanner")} theme="primary" iconName="camera" />
                    <Button action={() => navigation.push("/trophy_room")} theme="primary" iconName="trophy" />
                    <Button action={() => console.log("no")} theme="primary" iconName="plus" />
                </View>
            </MapView>
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
        paddingTop: 10,
        height: "auto",
        width: "auto",
        position: "absolute",
        flex: 1,
        flexDirection: "column-reverse",
    },
    camButton: {
        position: "absolute",
    },
});

export default WelcomeScreen;