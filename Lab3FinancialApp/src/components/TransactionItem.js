import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionItem = ({ transaction }) => {
  return (
    <View style={styles.container}>
      <Text>{transaction.name}</Text>
      <Text>${transaction.amount}</Text>
      <Text>{transaction.date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    marginVertical: 5,
    borderRadius: 5,
  },
});

export default TransactionItem;
