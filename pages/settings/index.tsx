import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import Header from "../../layout/header/header";
const BakerImg = require("../../assets/baker.png");
const BackgroundImg = require("../../assets/background.png");
const UserImg = require("../../assets/user.png");
const LockImg = require("../../assets/lock.png");
const notificationsImg = require("../../assets/bell.png");
const ShoppingImg = require("../../assets/shopping-bag.png");
const AboutImg = require("../../assets/smile.png");
const FileImg = require("../../assets/file.png");
const LogoutImg = require("../../assets/log-out.png");
const ArrowRight = require("../../assets/arrow-right.png");

const SettingsPage = () => {
  return (
    <>
      {/* <Header /> */}
      <View style={styles.container}>
        <ImageBackground style={styles.gradient} source={BackgroundImg}>
          <Image source={BakerImg} style={styles.image} />
          <View
            style={{
              backgroundColor: "white",
              width: 330,
              height: 400,
              borderRadius: 20,
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: 25,
              }}
            >
              <View style={styles.view}>
                <View style={{ flex: 1, flexDirection: "row", gap: 10 }}>
                  <Image source={UserImg} style={{ width: 18, height: 18 }} />
                  <Text style={{ color: "#103783", fontSize: 14 }}>
                    Personal Information
                  </Text>
                </View>
                <Image source={ArrowRight} style={{ width: 18, height: 18 }} />
              </View>
              <View style={styles.view}>
                <View style={{ flex: 1, flexDirection: "row", gap: 10 }}>
                  <Image source={LockImg} style={{ width: 18, height: 18 }} />
                  <Text style={{ color: "#103783", fontSize: 14 }}>
                    Change Password
                  </Text>
                </View>
                <Image source={ArrowRight} style={{ width: 18, height: 18 }} />
              </View>
              <View style={styles.view}>
                <View style={{ flex: 1, flexDirection: "row", gap: 10 }}>
                  <Image
                    source={notificationsImg}
                    style={{ width: 18, height: 18 }}
                  />
                  <Text style={{ color: "#103783", fontSize: 14 }}>
                    Notifications
                  </Text>
                </View>
                <Image source={ArrowRight} style={{ width: 18, height: 18 }} />
              </View>
              <View style={styles.view}>
                <View style={{ flex: 1, flexDirection: "row", gap: 10 }}>
                  <Image
                    source={ShoppingImg}
                    style={{ width: 18, height: 18 }}
                  />
                  <Text style={{ color: "#103783", fontSize: 14 }}>
                    My Orders
                  </Text>
                </View>
                <Image source={ArrowRight} style={{ width: 18, height: 18 }} />
              </View>
              <View style={styles.view}>
                <View style={{ flex: 1, flexDirection: "row", gap: 10 }}>
                  <Image source={AboutImg} style={{ width: 18, height: 18 }} />
                  <Text style={{ color: "#103783", fontSize: 14 }}>
                    About Us
                  </Text>
                </View>
                <Image source={ArrowRight} style={{ width: 18, height: 18 }} />
              </View>
              <View style={styles.view}>
                <View style={{ flex: 1, flexDirection: "row", gap: 10 }}>
                  <Image source={FileImg} style={{ width: 18, height: 18 }} />
                  <Text style={{ color: "#103783", fontSize: 14 }}>
                    Privacy Policy
                  </Text>
                </View>
                <Image source={ArrowRight} style={{ width: 18, height: 18 }} />
              </View>
              <View style={styles.view}>
                <View style={{ flex: 1, flexDirection: "row", gap: 10 }}>
                  <Image source={LogoutImg} style={{ width: 18, height: 18 }} />
                  <Text style={{ color: "#103783", fontSize: 14 }}>
                    Log Out
                  </Text>
                </View>

                <Image source={ArrowRight} style={{ width: 18, height: 18 }} />
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

export default SettingsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginTop: 90,
    width: "100%",
    // height: "100%",
  },
  image: {
    position: "absolute",
    zIndex: 10,
    width: 140,
    height: 140,
    top: -80,
  },
  view: {
    width: 286,
    height: 5,
    flex: 1,
    justifyContent: "space-evenly",
    flexDirection: "row",
    borderBottomColor: "#1D428B",
    borderBottomWidth: 1,
    marginTop: 30,
  },
});
