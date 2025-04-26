// Home.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../ThemeContext/ThemeContext';
import Header from '../components/header';
import Card from '../components/card';
import TransactionList from '../components/transaction';

const Home = () => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme === 'light' ? '#fff' : '#161622' }]}>
      <Header />
      <Card />
      <TransactionList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Home;