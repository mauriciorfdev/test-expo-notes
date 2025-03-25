import { View, Text, StyleSheet } from "react-native";

const authScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Auth</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
});

export default authScreen;
