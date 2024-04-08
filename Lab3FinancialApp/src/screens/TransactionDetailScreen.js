import React from 'react';
import { View, Text } from 'react-native';

const TransactionDetails = ({ route }) => {
  const { transaction } = route.params;
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Transaction Detail</Text>
      <Text>Name: {transaction.name}</Text>
      <Text>Amount: ${transaction.amount.toFixed(2)}</Text>
      <Text>Date: {transaction.date}</Text>
    </View>
  );
};

export default TransactionDetails;
