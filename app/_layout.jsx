import { Stack } from "expo-router";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { TouchableOpacity, Text, StyleSheet, Alert } from "react-native";

const HeaderLogout = () => {
  const { user, logout } = useAuth();

  return user ? (
    <TouchableOpacity
      style={styles.logoutButton}
      onPress={() => {
        console.log(user);
        Alert.alert("hi");
        logout();
      }}
    >
      <Text style={styles.logoutText}>Logout</Text>
    </TouchableOpacity>
  ) : null;
};

const RootLayout = () => {
  return (
    <AuthProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#ff8c00",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontSize: 40,
            fontWeight: "bold",
          },
          headerRight: () => <HeaderLogout />,
          contentStyle: {
            paddingHorizontal: 10,
            paddingTop: 10,
            backgroundColor: "#999",
          },
        }}
      >
        <Stack.Screen name='index' options={{ title: "Home" }} />
        <Stack.Screen name='notes' options={{ headerTitle: "Notes" }} />
        <Stack.Screen name='auth' options={{ headerTitle: "Login" }} />
      </Stack>
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  logoutButton: {
    marginRight: 15,
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: "#ff3b30",
    borderRadius: 8,
  },
  logoutText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default RootLayout;
