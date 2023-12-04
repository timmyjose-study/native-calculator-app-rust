/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import NativeCalculatorAppRust from './tm/NativeCalculatorAppRust';

const App = () => {
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [result, setResult] = useState('');

  const handleAddition = () => {
    if (x !== '' && y !== '') {
      const sum = NativeCalculatorAppRust.add(parseFloat(x), parseFloat(y))
      setResult(`Addition Result: ${sum}`)
    } else {
      setResult('Please enter numbers in both fields')
    }
  };

  const handleSubtraction = () => {
    if (x !== '' && y !== '') {
      const diff = NativeCalculatorAppRust.sub(parseFloat(x), parseFloat(y))
      setResult(`Subtraction Result: ${diff}`);
    } else {
      setResult('Please enter numbers in both fields');
    }
  };

  const handleMultiplication = () => {
    if (x !== '' && y !== '') {
      const prod = NativeCalculatorAppRust.mul(parseFloat(x), parseFloat(y))
      setResult(`Multiplication Result: ${prod}`);
    } else {
      setResult('Please enter numbers in both fields');
    }
  };
  const handleDivision = () => {
    if (x !== '' && y !== '') {
      const quot = NativeCalculatorAppRust.div(parseFloat(x), parseFloat(y))
      setResult(`Division Result: ${quot}`);
    } else {
      setResult('Please enter numbers in both fields');
    }
  };


  // Similarly, you can implement functions for multiplication and division

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter number 1"
        keyboardType="numeric"
        value={x}
        onChangeText={(text) => setX(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter number 2"
        keyboardType="numeric"
        value={y}
        onChangeText={(text) => setY(text)}
      />
      <View style={styles.buttonContainer}>
        <Button title="Add" onPress={handleAddition} />
        <Button title="Subtract" onPress={handleSubtraction} />
        <Button title="Multiply" onPress={handleMultiplication} />
        <Button title="Divide" onPress={handleDivision} />
      </View>
      <Text style={styles.resultText}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '80%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App

