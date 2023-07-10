import { Stack } from "expo-router";
import { useState } from "react";
import { View, StyleSheet, Button, Dimensions } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
import SvgQRCode from 'react-native-qrcode-svg';

{/* gets device dimensions */}
const { height, width } = Dimensions.get('window');

const qr_generator = () => {
    
    {/* saves input title and text*/}
    const [qrTitle, setQrTitle] = useState("");
    const [text, setText] = useState("");
    
    {/* checks if the qrcode has been generated, 
     so the app stops generating after the first time 
    
     - same as in the scanner, leave this unless you like to crash the app
    */}
    const [generated, setGenerated] = useState(false);

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: "Create", headerShown: false }} />
            <TextInput
                mode='outlined'
                value={qrTitle}
                onChangeText={title => setQrTitle(title)}
                placeholder='Press to set Title'
                style={styles.titlefield}
                outlineStyle={{ borderColor: '#ffffff' }}
            />
            <ScrollView
                keyboardDismissMode='on-drag'
            >
                <TextInput
                    mode='outlined'
                    value={text ? text : ""} // If text is empty, display nothing
                    onChangeText={text => setText(text)}
                    multiline={true}
                    dense={true}
                    style={styles.inputfield}
                    outlineStyle={{ borderStyle: 'solid', borderWidth: 1, borderColor: '#000000' }}
                />
                <Button
                    title="Save"
                    onPress={() => setGenerated(true)}
                />
                {generated ? 
                (<View style={styles.container}>
                    {/* generates qr code with data of qrTitle */}
                    <SvgQRCode value={qrTitle}/> 
                    {/* resets generated-state for new generation of qrcode */}
                    <Button title="Tap to delete" onPress={() => setGenerated(false)} />
                </View>) : null
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    text: {
        color: "#000000",
        fontSize: 20,
    },
    titlefield: {
        margin: 5,
        backgroundColor: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    inputfield: {
        flexGrow: 1,
        height: height * 0.35,
        width: width * 0.85,
        margin: 10,
    },
});

export default qr_generator; 