import { Image, StyleSheet, Text, View } from "react-native";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Category from "./pages/category";
import Header from "./layout/header/header";
import Status from "./layout/statusbar/statusbar";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Cart from "./pages/Cart";
export default function App() {
  const Tab = createMaterialBottomTabNavigator();
  // const Stack = createStackNavigator();

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      secondaryContainer: "transparent", // Use transparent to disable the little highlighting oval
    },
  };

  return (
    <>
      <View style={styles.main}>
        <Status />
        <Header />
        <NavigationContainer theme={theme}>
          <Tab.Navigator
            activeColor="#103783"
            inactiveColor="#000"
            barStyle={{
              backgroundColor: "#fff",
              position: "absolute",
              overflow: "hidden",
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              width: 380,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.0,
              elevation: 24,
            }}
          >
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                title: "Home",
                tabBarIcon: ({ focused }) => {
                  return (
                    <Image
                      style={{
                        width: 20,
                        height: 20,
                        tintColor: focused ? "#103783" : "#000",
                      }}
                      source={require("./assets/images/footer/home2.png")}
                    />
                  );
                },
              }}
            />

            <Tab.Screen
              name="Category"
              component={Category}
              options={{
                title: "Category",
                tabBarIcon: ({ focused }) => {
                  return (
                    <Image
                      style={{
                        width: 20,
                        height: 20,
                        tintColor: focused ? "#103783" : "#000",
                      }}
                      source={require("./assets/images/footer/home2.png")}
                    />
                  );
                },
              }}
            />

            <Tab.Screen
              name="Cart"
              component={Cart}
              options={{
                title: "Cart",
                tabBarIcon: ({ focused }) => {
                  return (
                    <Image
                      style={{
                        width: 20,
                        height: 20,
                        tintColor: focused ? "#103783" : "#000",
                      }}
                      source={require("./assets/images/footer/cart.png")}
                    />
                  );
                },
              }}
            />
            <Tab.Screen
              name="Profile"
              component={Profile}
              options={{
                title: "Profile",
                tabBarIcon: ({ focused }) => {
                  return (
                    <Image
                      style={{
                        width: 20,
                        height: 20,
                        tintColor: focused ? "#103783" : "#000",
                      }}
                      source={require("./assets/images/footer/profile.png")}
                    />
                  );
                },
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
}

const config = {
  // headerShown: false,
  cardStyle: {
    backgroundColor: "#fff",
  },
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "flex-start",
    marginHorizontal: 30,
    backgroundColor: "#fff",
  },
});
