


import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SummaryScreen = ({ transactions }) => {
  // Calculate total expenses
  const totalExpenses = transactions ? transactions.reduce((total, transaction) => total + transaction.amount, 0) : 0;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Summary</Text>
      </View>
      <View style={styles.summaryItem}>
        <Text style={styles.label}>Expenses:</Text>
        <Text style={styles.value}>${totalExpenses.toFixed(2)}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#e0e0e0',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007bff',
  },
  summaryItem: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#28a745',
  },
});


export default SummaryScreen;
