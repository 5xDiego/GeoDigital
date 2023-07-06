import { Stack } from "expo-router";
import { View, Text } from "react-native";

const qr_scanner = () => {
    return (
        <View>
            <Stack.Screen options={{ title: "Camera", headerShown: false }} />
            <Text> Hello Camera </Text>
        </View>
    );
}

export default qr_scanner; 