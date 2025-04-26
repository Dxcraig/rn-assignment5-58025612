
import React from "react";
import { StyleSheet, Text, View, Switch, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../ThemeContext/ThemeContext";
import AntDesign from "react-native-vector-icons/AntDesign";


const data = [
  { id: '1', title: 'Language' },
  { id: '2', title: 'My Profile' },
  { id: '3', title: 'Contact Us' },
  { id: '4', title: 'Change Password' },
  { id: '5', title: 'Privacy Policy' },
]

const Item = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.group]}>
      <Text style={[styles.title]}>{title}</Text>
      <AntDesign name="right" size={24} />
    </View>
  </TouchableOpacity>
)

const Setting = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme === "light" ? "#fff" : "#161622" }]}
    >
      <Text style={[styles.settingTitle, { color: theme === "light" ? "black" : "white" }]}>
        Settings
      </Text>

      <View >
        <FlatList
          data={data}
          renderItem={({ item }) =>
            <View >
              <Item title={item.title} />
            </View>
          }
          keyExtractor={item => item.id}
        />
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
    paddingTop: 20
  },
  switchContainer: {
    paddingTop: 20,
    transform: [{ scaleX: 1.5}, { scaleY: 1.5 }],
    paddingHorizontal: 10,
  },
  group: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginHorizontal: 20,
    paddingLeft: 5,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    paddingVertical: 10,
    marginVertical: 8,
    fontWeight: 'bold',
  },

});

export default Setting;
