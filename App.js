import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./screens/home";
import { MaterialIcons } from "@expo/vector-icons";
import Cards from "./screens/my-card";
import Setting from "./screens/settings";
import Statistics from "./screens/statistics";
import { ThemeProvider, useTheme } from "./ThemeContext/ThemeContext";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme === "light" ? "#fff" : "#27273a",
          paddingTop: 15, // Add space to the top
          height: 80,
          paddingBottom: 15, // Add space to the bottom
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
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="My Cards"
        component={Cards}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="credit-card" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={Statistics}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="bar-chart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Setting}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" color={color} size={size} />
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