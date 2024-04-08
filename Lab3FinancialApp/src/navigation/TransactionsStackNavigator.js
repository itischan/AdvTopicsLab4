import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionsListScreen from '../screens/TransactionsListScreen';
import TransactionDetailScreen from '../screens/TransactionDetailScreen';

const Stack = createStackNavigator();

const TransactionsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TransactionsList" component={TransactionsListScreen} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetailScreen} />
    </Stack.Navigator>
  );
};

export default TransactionsStackNavigator;
