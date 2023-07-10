import { Stack } from "expo-router";
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Vibration } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';


const qr_scanner = () => {

    {/* checks camera permission*/ }
    const [hasPermission, setHasPermission] = useState(null);

    {/* checks if the scanner has scanned, 
     so the scanner stops scanning after the first time 
    
    - dont remove this unless you want to crash the app
    */}
    const [scanned, setScanned] = useState(false);

    {/* source: https://snack.expo.dev/@eseg/simple-qr-code-scanner  */ }
    {/* request camera permission*/}
    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);

    {/* handles extracted data from QRCodes*/}
    const handleBarCodeScanned = ({ data }) => {
        setScanned(true);
        Vibration.vibrate(500);
        alert(`Congratulations! You have found the cache "${data}"!`);
    };

    {/* alerts the user if the app doesnt have access to the device camera*/}
    if (hasPermission === false) {
        alert("Allow GeoDigital to access your Camera for the QR-Scanner to function.");
        return <Text> Allow camera access and restart the App... </Text>
    }

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: "Camera", headerShown: false }} />
            <BarCodeScanner
                barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {/* adds button that lets you reset the scanned-state to scan a new qrcode */}
            {/* source: https://snack.expo.dev/@eseg/simple-qr-code-scanner  */}
            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    }
});

export default qr_scanner; 