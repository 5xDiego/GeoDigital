import React from 'react';
import { useRouter } from "expo-router";
import { StyleSheet, View, Button, Text } from "react-native";


const WelcomeScreen = () => {
    const navigation = useRouter();

    return (
        <View style={styles.container}>
            <Button title="camera" onPress={() => navigation.push('/qr_scanner')} />
            <Button title="trophy" onPress={() => navigation.push('/trophy_room')} />
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
});

export default WelcomeScreen;