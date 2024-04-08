import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const AddTransactions = ({ onAddTransaction }) => {
  const [transactionName, setTransactionName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleAddTransaction = () => {
    const newTransaction = {
      id: Math.random().toString(),
      name: transactionName,
      amount: parseFloat(amount),
      date: date,
    };

    onAddTransaction(newTransaction);

    setTransactionName('');
    setAmount('');
    setDate('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add your First Transaction</Text>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Transaction name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter the name of transaction"
            value={transactionName}
            onChangeText={setTransactionName}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Amount:$</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter amount"
            value={amount}
            onChangeText={(text) => setAmount(text.replace(/[^0-9.]/g, ''))}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Date:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter date of transaction (YYYY-MM-DD)"
            value={date}
            onChangeText={setDate}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleAddTransaction}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#ffefd5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#ff6347',
    textAlign: 'center',
  },
  formContainer: {
    backgroundColor: '#f0f8ff',
    borderRadius: 15,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4169e1',
  },
  input: {
    height: 50,
    borderColor: '#4682b4',
    borderBottomWidth: 2,
    paddingHorizontal: 15,
    fontSize: 18,
    color: '#333',
  },
  button: {
    backgroundColor: '#32cd32',
    borderRadius: 30,
    paddingVertical: 15,
    marginTop: 30,
    alignSelf: 'center',
    width: 180,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});


export default AddTransactions;
