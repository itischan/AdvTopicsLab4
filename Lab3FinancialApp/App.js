import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionsListScreen from './src/screens/TransactionsListScreen';
import TransactionDetailScreen from './src/screens/TransactionDetailScreen';
import SummaryScreen from './src/screens/SummaryScreen';
import AddTransactionFormScreen from './src/screens/AddTransactions';
import firebase from './firebase';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TransactionsStack = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase.firestore().collection('transactions')
      .onSnapshot(querySnapshot => {
        const data = [];
        querySnapshot.forEach(doc => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setTransactions(data);
      });

    return () => unsubscribe();
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen name="TransactionsList">
        {() => <TransactionsListScreen transactions={transactions} />}
      </Stack.Screen>
      <Stack.Screen name="TransactionDetail" component={TransactionDetailScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  const handleAddTransaction = (newTransaction) => {
    // Add new transaction to Firestore
    firebase.firestore().collection('transactions').add(newTransaction)
      .then(() => console.log('Transaction added successfully!'))
      .catch((error) => console.error('Error adding transaction: ', error));
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Add Transaction">
          {() => <AddTransactionFormScreen onAddTransaction={handleAddTransaction} />}
        </Tab.Screen>
        <Tab.Screen name="Transactions" component={TransactionsStack} />
        <Tab.Screen name="Summary" component={SummaryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;