import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SummaryCard = ({ totalExpenses }) => {
  return (
    <View style={styles.container}>
      <Text>Total Expenses: ${totalExpenses}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    marginVertical: 10,
    borderRadius: 5,
  },
});

export default SummaryCard;
