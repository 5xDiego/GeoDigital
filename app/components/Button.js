import { View, Pressable, Text, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function CamButton({ action, theme, iconName }) {
  if (theme === "primary") {
    return(
      <View style={[styles.buttonContainer, {borderWidth: 2, borderColor: "navy", borderRadius: 90}]}>
        <Pressable style={[styles.button, {backgroundColor:"slateblue"}]}
        onPress={action}>
          <FontAwesome 
          name={iconName}
          size={32} 
          color="black"
          />
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={action}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 55,
    height: 55,
    marginHorizontal: 20,
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },
  button: {
    borderRadius: 90,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
