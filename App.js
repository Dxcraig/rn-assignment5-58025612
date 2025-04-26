import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/home";
import Cards from "./screens/my-card";
import Setting from "./screens/settings";
import Statistics from "./screens/statistics";
import { ThemeProvider, useTheme } from "./ThemeContext/ThemeContext";
import { Image, StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
    tabBarOptions = {{
      showLabel: false,
      style: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#fff',
          borderRadius: 15,
          height: 90,
          ...styles.shadow
      },
  }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme === "light" ? "#fff" : "#27273a",
          position: "absolute",
          tabBarActiveTintColor: 'blue' 
        },
        tabBarLabelStyle: {
            paddingBottom: 10, // Adjust the padding for the label
          },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image source={require('./assets/home.png')}
            resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? 'blue' : 'gray'
              }} />
          ),
        }}
      />
      <Tab.Screen
        name="My Cards"
        component={Cards}
        options={{
          tabBarIcon: ({focused}) => (
            <Image source={require('./assets/myCards.png')}
            resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? 'blue' : 'gray'
              }} />
          ),
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={Statistics}
        options={{
          tabBarIcon: ({ focused}) => (
            <Image source={require('./assets/statictics.png')} 
            resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? 'blue' : 'gray'
              }}/>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Setting}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image source={require('./assets/settings.png')} 
            resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? 'blue' : 'gray'
              }}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  shadow: {
      shadowColor: '#7F5D40',
      shadowOffset: {
          width: 0,
          height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5,
  }
})