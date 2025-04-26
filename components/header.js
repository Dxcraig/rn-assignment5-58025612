
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { EvilIcons } from '@expo/vector-icons';
import { useTheme } from "../ThemeContext/ThemeContext";

const Header = () => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme === 'light' ? '#fff' : '#161622' }]}>
      <View style={styles.profileContainer}>
        <TouchableOpacity>
          <Image 
            source={require("../assets/profile.png")}
            style={styles.profileImage} 
          />
        </TouchableOpacity>

        <View style={styles.textContainer}>
          <Text style={[styles.name, { color: theme === 'light' ? '#7e848d' : '#b0b0b0' }]}>Welcome back,</Text>
          <Text style={[styles.email, { color: theme === 'light' ? '#000' : '#fff' }]}>Eric Atsu</Text>
        </View>

        <TouchableOpacity style={[styles.searchIconContainer, { backgroundColor: theme === 'light' ? '#f4f4f4' : '#1e1e2d' }]}>
          <EvilIcons name="search" size={34} color={theme === 'light' ? 'black' : 'white'} style={{paddingButtom:10}} /> 
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 25,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,  // This allows the text to take up available space
    marginLeft: 10,
  },
  name: {
    fontSize: 13,
  },
  email: {
    fontSize: 20,
    fontWeight: "bold", // Make the name bolder
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 25, // Make the profile image circular
  },
  searchIconContainer: {
      // Add padding around the icon
    borderRadius: 100,
    width: 50,
    height: 50,
    alignItems: 'center',
    paddingTop: 8,
  },
});
