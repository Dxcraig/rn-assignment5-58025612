import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "../ThemeContext/ThemeContext";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Card = () => {
  const { theme } = useTheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme === "light" ? "#fff" : "#161622" },
      ]}
    >
      <Image source={require("../assets/Card.png")} style={styles.card} />
      <View style={styles.cardbuttons}>
        <TouchableOpacity>
          <View
            style={[
              styles.shape,
              { backgroundColor: theme === "light" ? "#f4f4f4" : "#1e1e2d" },
            ]}
          >
            <AntDesign
              name="arrowup"
              size={24}
              style={{ color: theme === "light" ? "black" : "white" }}
            />
          </View>
          <View style={styles.shapetext}>
            <Text style={{ color: theme === "light" ? "black" : "white" }}>
              Send
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={[
              styles.shape,
              { backgroundColor: theme === "light" ? "#f4f4f4" : "#1e1e2d" },
            ]}
          >
            <AntDesign
              name="arrowdown"
              size={24}
              style={{ color: theme === "light" ? "black" : "white" }}
            />
          </View>
          <View style={{ alignSelf: 'center' }}>
            <Text style={{ color: theme === "light" ? "black" : "white" }}>
              Receive
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={[
              styles.shape,
              { backgroundColor: theme === "light" ? "#f4f4f4" : "#1e1e2d" },
            ]}
          >
            <Image
              source={
                theme === "light"
                  ? require("../assets/loan.png")
                  : require("../assets/whitedollar.png")
              }
              style={styles.icon}
            />
          </View>
          <View style={styles.shapetext}>
            <Text style={{ color: theme === "light" ? "black" : "white" }}>
              Loan
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={[
              styles.shape,
              { backgroundColor: theme === "light" ? "#f4f4f4" : "#1e1e2d" },
            ]}
          >
            <Ionicons
              name="cloud-upload-outline"
              size={24}
              style={{ color: theme === "light" ? "black" : "white" }}
            />
          </View>
          <View style={{ alignSelf: 'center'  }}>
            <Text style={{ color: theme === "light" ? "black" : "white" }}>
              Topup
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
	marginBottom: 2,
  },
  card: {
    padding: 20,
  },
  cardbuttons: {
    flexDirection: "row",
    paddingTop: 20,
    justifyContent: "space-between",
	paddingBottom: 20,
  },
  shape: {
    padding: 8, // Add padding around the icon
    borderRadius: 50,
    width: 61,
    height: 61,
    alignItems: "center",
    paddingTop: 20,
  },
  shapetext: {
    alignSelf: 'center'
  },
  icon: {
    width: 28,
	height:28,
  },
});