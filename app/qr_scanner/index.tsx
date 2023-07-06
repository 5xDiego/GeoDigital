import { Stack } from "expo-router";
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Vibration } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const qr_scanner = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        Vibration.vibrate(500); 
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === null) {
        return <Text>Requesting camera permission...</Text>;
    }
    if (hasPermission === false) {
        return <Text>ERROR: No access to camera!</Text>;
    }
    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: "Camera", headerShown: false }} />
            <BarCodeScanner
                barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
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