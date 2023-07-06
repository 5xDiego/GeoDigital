import { Stack } from "expo-router";
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Vibration } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const qr_scanner = () => {
    
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    
    {/* source: https://snack.expo.dev/@eseg/simple-qr-code-scanner  */ }
    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = ({ data }) => {
        setScanned(true);
        Vibration.vibrate(500);
        alert(`Congratulations! You have found the cache "${data}"!`);
    };

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
            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}     {/* source: https://snack.expo.dev/@eseg/simple-qr-code-scanner  */ }
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