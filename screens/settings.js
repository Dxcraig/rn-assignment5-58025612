
import React from "react";
import { StyleSheet, Text, View, Switch, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../ThemeContext/ThemeContext";

const Setting = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme === "light" ? "#fff" : "#161622" }]}
    >
      <Text style={[styles.settingTitle, { color: theme === "light" ? "black" : "white" }]}>
        Settings
      </Text>

      {/* Setting Items */}
      <View style={{marginBottom: 30, marginTop: 30}}>
      <TouchableOpacity>
      <View style={styles.itemContainer}>
        <Text style={[styles.itemText, { color: theme === "light" ? "black" : "white" }]}>Language</Text>
        <Ionicons
          name="chevron-forward-outline"
          size={24}
          color={theme === "light" ? "black" : "white"}
        />
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.itemContainer}>
        <Text style={[styles.itemText, { color: theme === "light" ? "black" : "white" }]}>My Profile</Text>
        <Ionicons
          name="chevron-forward-outline"
          size={24}
          color={theme === "light" ? "black" : "white"}
        />
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.itemContainer}>
        <Text style={[styles.itemText, { color: theme === "light" ? "black" : "white" }]}>Contact Us</Text>
        <Ionicons
          name="chevron-forward-outline"
          size={24}
          color={theme === "light" ? "black" : "white"}
        />
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.itemContainer}>
        <Text style={[styles.itemText, { color: theme === "light" ? "black" : "white" }]}>Change Password</Text>
        <Ionicons
          name="chevron-forward-outline"
          size={24}
          color={theme === "light" ? "black" : "white"}
        />
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.itemContainer}>
        <Text style={[styles.itemText, { color: theme === "light" ? "black" : "white" }]}>Privacy Policy</Text>
        <Ionicons
          name="chevron-forward-outline"
          size={24}
          color={theme === "light" ? "black" : "white"}
        />
      </View>
      </TouchableOpacity>
      </View>

      {/* Theme Setting */}
      <View style={[styles.itemContainer, styles.themeContainer]}>
        <Text style={[styles.themeText, { color: theme === "light" ? "black" : "white" }]}>Theme</Text>
        <View style={styles.switchContainer}>
          <Switch
            value={theme === "dark"}
            onValueChange={toggleTheme}
            thumbColor={theme === "light" ? "white" : "white"}
            trackColor={{ false: "#a2a2a7", true: "#1ce830" }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  settingTitle: {
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center",
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 15,
  },
  themeContainer: {
    borderBottomWidth: 0,
    alignItems: "center",
  },
  itemText: {
    fontSize: 16,
  },
  themeText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  switchContainer: {
    transform: [{ scaleX: 2.5 }, { scaleY: 2.5 }],
    paddingHorizontal: 10,
  },
});

export default Setting;
