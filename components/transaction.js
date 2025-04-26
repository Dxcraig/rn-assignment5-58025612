import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";
import TransactionData from "./TransactionData";
import { useTheme } from "../ThemeContext/ThemeContext";

const TransactionList = () => {
  const { theme } = useTheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme === "light" ? "#fff" : "#161622" },
      ]}
    >
      <View style={styles.header}>
        <Text
          style={[
            styles.headerTitle,
            { color: theme === "light" ? "black" : "white" },
          ]}
        >
          Transaction
        </Text>
        <Text
          style={[
            styles.seeAll,
            { color: theme === "light" ? "#0066ff" : "#8ab4f8" },
          ]}
        >
          Sell All
        </Text>
      </View>
      
      <FlatList
        showsVerticalScrollIndicator={false}
        data={TransactionData}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        renderItem={({ item }) => (
          <View
            style={[
              styles.jobItemContainer,
              { backgroundColor: theme === "light" ? "white" : "#161622" },
            ]}
          >
            <View style={[styles.transactionImage, { backgroundColor: theme === "light" ? "#f4f4f4" : "#1e1e2d" }]}>
              <Image
                source={theme === 'light' ? item.logo1 : item.logo2}
                resizeMode="contain"
                style={{
                  width: item.logoWidth,
                  height: item.logoHeight,
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 12,
                  borderRadius: 8,
                  marginHorizontal: 16,
                  marginVertical: 4,
                }}
              />
            </View>
            <View style={styles.jobDetailsContainer}>
              <Text
                style={[
                  styles.jobTitle,
                  { color: theme === "light" ? "black" : "white" },
                ]}
              >
                {item.Jobtitle}
              </Text>
              <Text
                style={[
                  styles.companyName,
                  { color: theme === "light" ? "black" : "white" },
                ]}
              >
                {item.company}
              </Text>
            </View>
            <View style={styles.jobSalaryContainer}>
              <Text
                style={[
                  { fontSize: 14, fontWeight: "500" },
                  {
                    color:
                      item.color === "#0066ff"
                        ? item.color
                        : theme === "light"
                        ? "black"
                        : "white",
                  },
                ]}
              >
                {item.salary}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default TransactionList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  headerLink: {
    color: "#0066ff",
    marginLeft: "auto",
    fontWeight: "bold",
  },
  jobItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#161622",
    borderRadius: 15,
    margin: 4,
  },

  jobDetailsContainer: {
    flex: 1,
  },
  transactionImage: {
    width: 54,
    height: 54,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'white',
    marginRight: 10,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  companyName: {
    fontSize: 14,
    color: "#555",
  },
  jobSalaryContainer: {
    alignItems: "flex-end",
  },
  jobLocation: {
    fontSize: 12,
    color: "#888",
  },
  itemSeparator: {
    height: 10,
  },
});