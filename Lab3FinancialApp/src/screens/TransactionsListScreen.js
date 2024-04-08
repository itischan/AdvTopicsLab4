import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const TransactionsList = ({ transactions }) => {
  useEffect(() => {
    console.log("Transactions in TransactionsListScreen:", transactions);
  }, [transactions]);
  
  if (!transactions.length) {
    return <View><Text style={styles.emptyListMessage}>No transactions yet.
    Add some values to view it here</Text></View>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transactions List</Text>
      <FlatList
        style={styles.list}
        data={transactions}
        renderItem={({ item }) => (
          <View style={styles.transactionItem}>
            <Text style={styles.transactionName}>{item.name}</Text>
            <Text style={styles.transactionAmount}>Amount: ${item.amount.toFixed(2)}</Text>
            <Text style={styles.transactionDate}>Date: {item.date}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#ff6347',
    textAlign: 'center',
  },
  list: {
    paddingVertical: 12,
  },
  transactionItem: {
    padding: 18,
    marginBottom: 18,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  transactionName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  transactionAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#25a585',
    marginBottom: 8,
  },
  transactionDate: {
    fontSize: 16,
    color: '#777',
  },
  emptyListMessage: {
    fontSize: 18,
    color: '#777',
    textAlign: 'center',
    marginTop: 35,
  },
});




export default TransactionsList;
