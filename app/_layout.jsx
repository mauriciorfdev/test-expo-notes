import { Stack } from "expo-router";

const RootLayout = () => {
  return <Stack 
    screenOptions={{
      headerStyle: {
        backgroundColor: '#ff8c00',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 40,
        fontWeight: 'bold',
      },
      contentStyle:{
        paddingHorizontal: 10,
        paddingTop: 10,
        backgroundColor: '#999'
      }
    }}
  >
    <Stack.Screen name="index" options={{title:'Home'}}/>
  </Stack>
}

export default RootLayout