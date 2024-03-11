import { ScrollView, StyleSheet, Text, View } from "react-native";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Category from "./pages/category";
import Header from "./layout/header/header";
import Footer from "./layout/footer/footer";
import Status from "./layout/statusbar/statusbar";
import SettingsPage from "./pages/settings";

export default function App() {
  return (
    <>
      {/* <View> */}
      <Status />
      <Header />
      {/* <Home /> */}
      <SettingsPage />
      {/* <Profile /> */}
      {/* <Category />   */}
      {/* </View> */}
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "flex-start",
    marginHorizontal: 30,
  },
});
