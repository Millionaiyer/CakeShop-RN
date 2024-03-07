import { StyleSheet, Text, View } from "react-native";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Category from "./pages/category";
import Header from "./layout/header/header";
import Status from "./layout/statusbar/statusbar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cart from "./pages/Cart";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <>
      <View style={styles.main}>
        <Status />
        <Header />
        <NavigationContainer>
          <Stack.Navigator screenOptions={config}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Category" component={Category} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Profile" component={Profile} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
}

const config = {
  headerShown: true,
  cardStyle: {
    backgroundColor: "#fff",
  },
};

const animation = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "flex-start",
    marginHorizontal: 30,
  },
});
